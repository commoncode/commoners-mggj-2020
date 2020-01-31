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
  height: 8rem;

  background: white;
  border: 5px solid black;

  top: -8rem;
`;

export const Container = styled.div<ContainerProps>`
  ${({ x }) => `left: ${x}`}
  ${({ y }) => `top: ${y}`}
`;
