import styled, { css } from "styled-components";

import { characterPosition } from "../characters/Character.styles";

type ContainerProps = {
  x: number;
  y: number;
  speed: number;
};

const captionBase = css`
  position: absolute;

  display: flex;
  align-items: center;

  margin-top: 0;
  width: 18rem;

  /* animation */
  transition: opacity 0.5s ease-in-out, margin-top 0.5s ease-in-out;

  background: #282828;
  color: #fff;
  padding: 20px;
  font-size: 18px;
  border-radius: 10px;

  z-index: 1200;

  margin-top: 10px;

  opacity: 0;
  pointer-events: none;

  &.visible {
    margin-top: 0;
    opacity: 1;
  }
`;

export const Container = styled.div<ContainerProps>`
  ${captionBase}
  
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
`;
