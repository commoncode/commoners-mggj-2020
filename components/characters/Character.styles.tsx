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
`;

export const characterPosition = (x, y) => css`
  left: calc(${x}px - 5rem);
  top: calc(${y}px - 15rem);
`;
