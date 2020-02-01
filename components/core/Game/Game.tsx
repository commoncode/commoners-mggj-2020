import { useState, useRef, useEffect } from "react";

import Player from "../../characters/Player";
import Lover from "../../characters/Lover";
import Caption from "../../captions/Caption";
import EventsProvider from "../../core/Context";

import Stage from "../Stage";

import { GlobalStyle } from "./Game.styles";
import { getWalkDuration } from "./movement";

type Position = {
  scene: "kitchen" | "bedroom" | "helm" | "hatch" | "ending";
  x: number;
  y: number;
  duration: number; // The calculated speed at which the character should move to its new position
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
      scene: "bedroom",
      x: 10,
      y: 50,
      duration: 1
    }
  },
  lover: {
    position: {
      scene: "bedroom",
      x: 80,
      y: 50,
      duration: 1
    }
  },
  caption: {
    isToggled: true
  },
  language: "english",
  love: 0,
  time: 60 * 5
};

const Game = () => {
  const [gameState, setGameState] = useState({ ...initialState });
  const [offset, setOffset] = useState(0);

  const gameLoop = useRef(null);

  useEffect(() => {
    gameLoop.current = setInterval(() => {
      // Randomly generate a new offset for the ship every 5 seconds
      let items = [0, 25, 50, 125, -25, -50, -125];
      setOffset(items[Math.floor(Math.random() * items.length)]);
    }, 1000); // Frame renderer

    return () => {
      clearInterval(gameLoop.current);
    };
  });

  return (
    <>
      <GlobalStyle />
      <EventsProvider>
        <Stage
          scene={gameState.player.position.scene}
          language={gameState.language}
          offset={offset}
          setLocation={(x, y) => {
            const duration = getWalkDuration(
              x,
              y,
              gameState.player.position.x,
              gameState.player.position.y,
              500
            );

            setGameState({
              ...gameState,
              player: {
                ...gameState.player,
                position: { ...gameState.player.position, x, y, duration }
              }
            });
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
              const enterDuration = getWalkDuration(
                xEntered,
                y,
                xExited,
                y,
                800
              );

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
              }, 0);
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

            setGameState({
              ...gameState,
              lover: {
                ...gameState.lover,
                position: { ...gameState.lover.position, x, y, duration }
              }
            })
          }}
        >
          <Player state={gameState.player} />
          {gameState.lover.position.scene ===
            gameState.player.position.scene ? (
              <Lover state={gameState.lover} />
            ) : null}
        </Stage>
      </EventsProvider>
    </>
  );
};

export default Game;

// const GameTimer = new setInterval(() => updateGameState(), 1000);

// Animation {
//     currentProgress: 1,
//     aniamtionEvents: {}
// }

// animationEvents[animation.currentProgress].forEach((e) => {e.step()})

// type Animation = Animation []
// type AnimationEvent

// player2RunRight
// navigatePlayer2(x+1)
