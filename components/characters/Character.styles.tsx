import { css } from "styled-components";

export const characterBase = css`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 10rem;
  height: 15rem;

  background: white;
  border: 5px solid black;

  top: -15rem;

  transition: left 1s ease-out, top 1s ease-out;
`;

export const characterPosition = (x, y, time) => css`
  transition: left ${time} ease-out, top ${time} ease-out;

  left: calc(${x}px - 5rem);
  top: calc(${y}px - 15rem);

  z-index: ${y.toFixed(2) * 100};
`;
