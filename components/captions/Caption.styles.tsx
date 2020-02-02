import styled, { css } from "styled-components";

import { characterPosition } from "../characters/Character.styles";

type ContainerProps = {
  x: number;
  y: number;
  speed: number;
  tail?: "bottomLeft" | "bottomRight" | "bottom" | "left" | "right";
};

const captionBase = css`
  position: absolute;

  display: block;
  align-items: center;

  margin-top: 0;
  max-width: 18rem;

  /* animation */
  transition: opacity 0.5s ease-in-out, margin-top 0.5s ease-in-out;

  background: #282828;
  color: #fff;
  padding: 20px;
  font-size: 18px;
  border-radius: 10px;
  border: 5px solid #303c42;

  z-index: 1200;

  margin-top: 10px;

  opacity: 0;
  pointer-events: none;

  &.visible {
    margin-top: 0;
    opacity: 1;
  }

  &:before,
  &::before {
    content: " ";
    display: none;
    width: 20px;
    height: 20px;
    background: #282828;

    position: absolute;
    bottom: -10px;
    right: 30px;

    transform: rotate(45deg);
    z-index: 100;
    overflow: visible;
  }

  strong {
    display: inline;
    font-size: 19px;
  }
`;

export const Container = styled.div<ContainerProps>`
  ${captionBase}
  
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;

  ${({ tail }) => {
    switch (tail) {
      case "bottomLeft":
        return `
        
          &:before,
          &::before {
            display: block;
            bottom: -10px;
            left: 30px;
          }
        `;
        break;

      case "bottomRight":
        return `
          &:before,
          &::before {
            display: block;
            bottom: -10px;
            right: 30px;
          }
        `;
        break;

      case "left":
        return `
          &:before,
          &::before {
            display: block;
            bottom: 20px;
            left: -10px;
          }
        `;
        break;

      case "right":
        return `
            &:before,
            &::before {
              display: block;
              bottom: 20px;
              right: -10px;
            }
          `;
        break;

      case "bottom":
        return `
          &:before,
          &::before {
            display: block;
            bottom: -10px;
            left: calc(50% - 10px);
          }
        `;
        break;
    }
  }} 
`;
