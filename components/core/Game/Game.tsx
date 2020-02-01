import { useState, useRef, useEffect } from "react";

import Player from "../../characters/Player";
import Lover from "../../characters/Lover";
import Caption from '../../captions/Caption';

import Stage from "../Stage";

import { GlobalStyle } from "./Game.styles";

type Position = {
  scene: "kitchen" | "bedroom" | "helm" | "hatch" | "ending";
  x: number;
  y: number;
  speed: number; // The calculated speed at which the character should move to its new position
};

type CharacterType = {
  position: Position;
};

type CaptionType = {
  position: Position;
  language?: string;
  text: string;
};

type GameStateType = {
  player: CharacterType;
  lover: CharacterType;
  caption: CaptionType;

  // Tracking
  love: number;
  time: number;
};

type EventType = {
  activation: () => {};
  position: {
    scene: "kitchen" | "bedroom" | "helm" | "hatch" | "ending";
    x: number;
    y: number;
  };
  display: number; // display the event until reach some ammount of time
  status: "display" | "hidden";
}

const initialState: GameStateType = {
  player: {
    position: {
      scene: "bedroom",
      x: 10,
      y: 50,
      speed: 1
    }
  },
  lover: {
    position: {
      scene: "bedroom",
      x: 80,
      y: 50,
      speed: 1
    }
  },
  caption: {
    position: {
      scene: "bedroom",
      x: 300,
      y: 20,
      speed: 1
    },
    language: "English",
    text: "This relationship is beyond repair!"
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

  const gameLoop = useRef(null);

  useEffect(() => {
    gameLoop.current = setInterval(() => { }, 1000 / 60); // Frame renderer

    return () => {
      clearInterval(gameLoop.current);
    };
  });

  return (
    <>
      <GlobalStyle />
      <Stage
        scene={gameState.player.position.scene}
        setLocation={(x, y) => {
          const travelX =
            x > gameState.player.position.x
              ? x - gameState.player.position.x
              : gameState.player.position.x - x;

          const travelY =
            y > gameState.player.position.y
              ? y - gameState.player.position.y
              : gameState.player.position.y - y;

          const distance = Math.sqrt(
            Math.pow(travelX, 2) + Math.pow(travelY, 2)
          );

          const movementSpeed = 500; // Pixels per second
          const speed = Math.abs(distance / movementSpeed);

          // setTargetLocation({ x, y });
          setGameState({
            ...gameState,
            player: {
              ...gameState.player,
              position: { ...gameState.player.position, x, y, speed }
            }
          });
        }}
        setScene={nextScene => {
          console.log("Setting Scene", nextScene);
          setGameState({
            ...gameState,
            player: {
              ...gameState.player,
              position: { ...gameState.player.position, scene: nextScene }
            }
          });
        }}
      >
        <Caption state={gameState.caption} />
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
