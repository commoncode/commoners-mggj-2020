import { useState, useRef, useEffect } from "react";

import Player from "../../characters/Player";
import Lover from "../../characters/Lover";
import OverlayNotClickable from "../OverlayNotClickable/OverlayNotClickable";
import EndingOverlay from "../EndingOverlay";

import "../Audio";
import Stage from "../Stage";
import Water from "./Water";
import LoveMeter from "../LoveMeter/LoveMeter";

import { GlobalStyle } from "./Game.styles";
import { getWalkDuration } from "./movement";

type Position = {
  scene: "kitchen" | "bedroom" | "helm" | "hatch" | "ending" | "title";
  x: number;
  y: number;
  duration: number; // The calculated speed at which the character should move to its new position
  walking: boolean;
};

type CharacterType = {
  position: Position;
};

type CaptionType = {
  isToggled: boolean;
};

type GameStateType = {
  player: CharacterType;
  lover: CharacterType;
  caption: CaptionType;
  language: "english" | "french";

  // Tracking
  love: number;
  time: number;
};

const initialState: GameStateType = {
  player: {
    position: {
      scene: "title",
      x: 200,
      y: 80,
      duration: 1,
      walking: false
    }
  },
  lover: {
    position: {
      scene: "bedroom",
      x: 700,
      y: 40,
      duration: 1,
      walking: false
    }
  },
  caption: {
    isToggled: true
  },
  language: "english",
  love: 100,
  time: 60 * 5
};

const Game = () => {
  const [gameState, setGameState] = useState({ ...initialState });
  const [offset, setOffset] = useState(0);
  const [showOverlayNotClickable, setShowOverlayNotClickable] = useState(true);

  // Player states
  const [playerWalking, setPlayerWalking] = useState(false);
  const [playerExpression, setPlayerExpression] = useState("sad");

  // Lover States
  const [loverWalking, setLoverWalking] = useState(false);
  const [loverExpression, setLoverExpression] = useState("sad");

  // Love Meter (works with percent 0%-100%)
  const [progressLove, setProgressLove] = useState(100);

  const increaseLovePoints = () => {
    return progressLove <= 90 ? setProgressLove(progressLove + 10) : setProgressLove(progressLove);
  }
  const decreaseLovePoints = () => {
    return progressLove >= 10 ? setProgressLove(progressLove - 10) : setProgressLove(progressLove);
  }

  // Setup ending
  const [typeEnding, setTypeEnding] = useState(null);

  const gameLoop = useRef(null);
  useEffect(() => {
    gameLoop.current = setInterval(() => {
      // Randomly generate a new offset for the ship every 5 seconds
      let items = [0, 25, 50, 125, -25, -50, -125];
      setOffset(items[Math.floor(Math.random() * items.length)]);
    }, 5000); // Frame renderer

    return () => {
      clearInterval(gameLoop.current);
    };
  });

  return (
    <>
      <GlobalStyle />
      <OverlayNotClickable isToggled={showOverlayNotClickable} />
      {typeEnding && <EndingOverlay typeEnding={typeEnding} />}
      <Water />
      <LoveMeter progressLove={progressLove} />
      <Stage
        scene={gameState.player.position.scene}
        language={gameState.language}
        offset={offset}
        setTypeEnding={setTypeEnding}
        increaseLovePoints={increaseLovePoints}
        decreaseLovePoints={decreaseLovePoints}
        setShowOverlayNotClickable={setShowOverlayNotClickable}
        setLocation={(x, y) => {
          const duration = getWalkDuration(
            x,
            y,
            gameState.player.position.x,
            gameState.player.position.y,
            500
          );

          setPlayerWalking(true);
          setGameState({
            ...gameState,
            player: {
              ...gameState.player,
              position: {
                ...gameState.player.position,
                x,
                y,
                duration
              }
            }
          });

          setTimeout(() => {
            setPlayerWalking(false);
          }, duration * 1000);
        }}
        setScene={(
          nextScene,
          direction: "left" | "right",
          floorWidth = 1024
        ) => {
          console.log("Setting Scene", nextScene, direction);

          // Animate character running off screen
          const x = direction === "left" ? -300 : floorWidth + 300;
          const y = 50;
          const leaveDuration = getWalkDuration(
            x,
            y,
            gameState.player.position.x,
            gameState.player.position.y,
            1000
          );

          setPlayerWalking(true);
          setGameState({
            ...gameState,
            player: {
              ...gameState.player,
              position: {
                ...gameState.player.position,
                x,
                y,
                duration: leaveDuration
              }
            }
          });

          // Change Scene
          setTimeout(() => {
            console.log("Scene change...", nextScene);

            const xExited = direction === "right" ? -300 : floorWidth + 300;
            const xEntered = direction === "right" ? 100 : floorWidth - 110;

            setGameState({
              ...gameState,
              player: {
                ...gameState.player,
                position: { ...gameState.player.position, scene: nextScene }
              }
            });

            // Teleport character
            setGameState({
              ...gameState,
              player: {
                ...gameState.player,
                position: {
                  ...gameState.player.position,
                  scene: nextScene,
                  x: xExited,
                  y,
                  duration: 0
                }
              }
            });

            // Animate character running on screen
            const enterDuration = getWalkDuration(xEntered, y, xExited, y, 800);

            setTimeout(() => {
              setGameState({
                ...gameState,
                player: {
                  ...gameState.player,
                  position: {
                    ...gameState.player.position,
                    scene: nextScene,
                    x: xEntered,
                    y,
                    duration: enterDuration
                  }
                }
              });

              setTimeout(() => {
                setPlayerWalking(false);
              }, enterDuration * 1000);
            }, 100);
          }, leaveDuration * 1000);
        }}
        setTargetLocationLover={(x, y) => {
          const duration = getWalkDuration(
            x,
            y,
            gameState.lover.position.x,
            gameState.lover.position.y,
            500
          );

          setLoverWalking(true);

          setGameState({
            ...gameState,
            lover: {
              ...gameState.lover,
              position: { ...gameState.lover.position, x, y, duration }
            }
          });

          setTimeout(() => {
            setLoverWalking(false);
          }, duration * 1000);
        }}
      >
        <Player
          state={gameState.player}
          walking={playerWalking}
          expression={playerExpression}
        />

        {gameState.lover.position.scene === gameState.player.position.scene ? (
          <Lover
            state={gameState.lover}
            walking={loverWalking}
            expression={loverExpression}
          />
        ) : null}
      </Stage>
    </>
  );
};

export default Game;
