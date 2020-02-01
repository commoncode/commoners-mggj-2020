import styled, { css } from "styled-components";

type ContainerProps = {
  offset: number;
};

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  background: #72a8c1;
  width: 100%;
  overflow: hidden;

  transition: margin 4s ease-in;
  margin-top: ${({ offset }) => offset}px;
`;

type InnerProps = {
  offset: number;
};

export const Inner = styled.div<InnerProps>`
  display: flex;
  transition: margin 800ms ease-out;
  background: #282828;

  &.bedroom {
    margin-left: calc(50vw - 32rem);
  }

  &.kitchen {
    margin-left: calc(50vw - 32rem - 64rem);
  }

  &.hatch {
    margin-left: calc(50vw - 32rem - 128rem);
  }

  &.helm {
    margin-left: calc(50vw - 32rem - 192rem);
  }
`;

type FloorProps = {
  left?: number;
  right?: number;
};

export const Floor = styled.div<FloorProps>`
  position: absolute;
  bottom: 5.5rem;
  left: ${({ left }) => left || 0}rem;
  right: ${({ right }) => right || 0}rem;

  height: 6rem;
  // background: rgba(0, 0, 0, 0.6);
`;

export const sceneBase = css`
  position: relative;
  flex-shrink: 0;
  width: 64rem;
  height: 38rem;
  margin-right: 3rem;
  overflow: hidden;
  background: #72a8c1;
  transition: opacity 1s ease-in-out;

  > * {
    transition: opacity 1s ease-in-out;
  }

  &:last-child {
    margin-right: 0;
  }

  &.deselected {
    > * {
      opacity: 0;

      &:first-child {
        opacity: 0.4;
      }
    }
  }
`;

const Button = css`
  position: absolute;
  top: 2rem;

  background: white;
  border-radius: 0.5rem;

  z-index: 1000;
`;

export const LeftButton = styled.button`
  ${Button}

  left: 2rem;
`;

export const RightButton = styled.button`
  ${Button}

  right: 2rem
`;
