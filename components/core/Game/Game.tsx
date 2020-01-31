import { useState, useEffect } from "react";

import Player from "../../characters/Player";
import Lover from "../../characters/Lover";

import Stage from "../Stage";

import { GlobalStyle } from "./Game.styles";

type Position = {
  scene: "kitchen" | "bedroom" | "helm" | "hatch" | "ending";
  x: number;
  y: number;
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
      y: 50
    }
  },
  lover: {
    position: {
      scene: "bedroom",
      x: 80,
      y: 50
    }
  },
  love: 0,
  time: 60 * 5
};

let gameLoop = null;

const Game = () => {
  const [gameState, setGameState] = useState(initialState);
  const [targetLocation, setTargetLocation] = useState({
    x: gameState.player.position.x,
    y: gameState.player.position.y
  });

  useEffect(() => {
    gameLoop = setInterval(() => {
      // console.log("Target location", targetLocation);
      // Update player position
      if (
        (targetLocation && gameState.player.position.x !== targetLocation.x) ||
        (targetLocation && gameState.player.position.y !== targetLocation.y)
      ) {
        console.log("Updating user position...");
        const travelX = targetLocation.x - gameState.player.position.x;
        const travelY = targetLocation.y - gameState.player.position.y;

        const movementSpeed = 100 / 60; // Pixels per second / frames

        let x =
          travelX > movementSpeed
            ? gameState.player.position.x + movementSpeed
            : targetLocation.x;

        let y =
          travelY > movementSpeed
            ? gameState.player.position.y + movementSpeed
            : targetLocation.y;

        setGameState({
          ...gameState,
          player: {
            ...gameState.player,
            position: { ...gameState.player.position, x, y }
          }
        });
      }
    }, 1000 / 60); // Frame renderer

    return () => {
      clearInterval(gameLoop);
    };
  }, []);

  //   setGameState({ ...gameState, myChange: 12 });

  return (
    <>
      <GlobalStyle />
      <Stage
        scene={gameState.player.position.scene}
        setLocation={(x, y) => {
          console.log("Setting target", x, y, targetLocation);
          setTargetLocation({ x, y });
        }}
      >
        <Player state={gameState.player} />
        <Lover state={gameState.lover} />
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
