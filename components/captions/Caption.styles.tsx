import styled, { css } from "styled-components";

import { characterPosition } from "../characters/Character.styles";

type ContainerProps = {
  x: number;
  y: number;
  speed: number;
  isToggled: boolean;
};

const captionBase = css`
position: absolute;
display: flex;
align-items: center;

width: 10rem;
height: 3rem;

background: white;
color: black;
border: 2px solid black;

/* animation */
transition: visibility 0s, opacity 0.5s linear;

`
const isVisibleStyle = css`
visibility: 'visibility';
opacity: 1;
z-index: 500;
`

const isHiddenStyle = css`
visibility: 'hidden';
opacity: 0;
pointer-events:none;
`

export const Container = styled.div<ContainerProps>`
  ${captionBase}
  ${({ isToggled }) => isToggled ? isVisibleStyle : isHiddenStyle}
  left: ${({ x }) => x }px;
  top: ${({ y }) => y}px;
`

