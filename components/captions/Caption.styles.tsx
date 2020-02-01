import styled, { css } from "styled-components";

import { characterPosition } from "../characters/Character.styles";

type ContainerProps = {
  x: number;
  y: number;
  speed: number;
  isToggled: boolean;
};

const captionBase = css`
display: flex;
position: absolute;
align-items: center;

width: 18rem;

background: rgba(255, 255, 255, 0.3);
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

const Inner = styled.div`
color: yellow;
`
export const Container = styled.div<ContainerProps>`
${captionBase}
${Inner}
${({ isToggled }) => isToggled ? isVisibleStyle : isHiddenStyle}
left: ${({ x }) => x }px;
top: ${({ y }) => y}px;
`