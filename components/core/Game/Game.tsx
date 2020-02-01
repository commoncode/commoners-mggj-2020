import { useState, useEffect } from "react";

import Player from "../../characters/Player";
import Lover from "../../characters/Lover";

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

type GameStateType = {
  player: CharacterType;
  lover: CharacterType;

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
  love: 0,
  time: 60 * 5
};

const Game = () => {
  const [gameState, setGameState] = useState(initialState);
  const [targetLocation, setTargetLocation] = useState({
    x: gameState.player.position.x,
    y: gameState.player.position.y
  });

  useEffect(() => {
    const gameLoop = setInterval(() => {}, 1000 / 60); // Frame renderer

    return () => {
      clearInterval(gameLoop);
    };
  });

  //   setGameState({ ...gameState, myChange: 12 });

  return (
    <>
      <GlobalStyle />
      <Stage
        scene={gameState.player.position.scene}
        setLocation={(x, y) => {
          const duration = getWalkDuration(
            x,
            y,
            gameState.player.position.x,
            gameState.player.position.y,
            500
          );

          // setTargetLocation({ x, y });
          setGameState({
            ...gameState,
            player: {
              ...gameState.player,
              position: { ...gameState.player.position, x, y, duration }
            }
          });
        }}
        setScene={(nextScene, direction: "left" | "right") => {
          console.log("Setting Scene", nextScene, direction);
          // Animate character running off screen
          const x = direction === "left" ? -300 : 1124;
          const y = 80;
          const leaveDuration = getWalkDuration(
            x,
            y,
            gameState.player.position.x,
            gameState.player.position.y,
            800
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
                  x: direction === "right" ? -300 : 1124,
                  y,
                  duration: 0
                }
              }
            });

            // Animate character running on screen
            const enterDuration = getWalkDuration(
              direction === "right" ? 50 : 1024 - 50,
              y,
              direction === "right" ? -300 : 1124,
              y,
              800
            );

            setGameState({
              ...gameState,
              player: {
                ...gameState.player,
                position: {
                  ...gameState.player.position,
                  scene: nextScene,
                  x: direction === "right" ? 50 : 1024 - 50,
                  y,
                  duration: enterDuration
                }
              }
            });
          }, leaveDuration * 1000);
        }}
      >
        <Player state={gameState.player} />
        {gameState.lover.position.scene === gameState.player.position.scene ? (
          <Lover state={gameState.lover} />
        ) : null}
      </Stage>
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
