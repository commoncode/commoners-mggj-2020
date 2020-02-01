import styled, { css } from "styled-components";

import { characterPosition } from "../characters/Character.styles";

type ContainerProps = {
  x: number;
  y: number;
};

export const captionBase = css`
position: absolute;
display: flex;
align-items: center;

width: 10rem;
height: 3rem;

background: white;
color: black;
border: 2px solid black;
`
export const Container = styled.div<ContainerProps>`
  ${captionBase}
  ${({ x, y, speed }) => characterPosition(x, y, `${speed}s`)}
`

