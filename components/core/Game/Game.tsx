import { useState } from "react";

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

const state: GameStateType = {
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

const Game = () => {
  const [gameState, setGameState] = useState(state);

  const gameLoop = setInterval(() => {
    // Update player position
    // Update animation ticks
  }, 1000 / 60); // Frame renderer

  //   setGameState({ ...gameState, myChange: 12 });

  return (
    <>
      <GlobalStyle />
      <Stage scene={state.player.position.scene}>
        <Player state={state.player} />
        <Lover state={state.player} />
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
