import styled, { css } from "styled-components";

type ContainerProps = {
  x: number;
  y: number;
};

export const eventBase = css`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 5rem;
  height: 5rem;

  background: white;
  border: 2px solid black;

  top: -5rem;
`;

export const Container = styled.div<ContainerProps>`
  ${eventBase}
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
  z-index: 999999999;
`;
