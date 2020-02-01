import styled, { css } from "styled-components";

type ContainerProps = {
  offset: number;
};

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;

  transition: margin 4s ease-in;
  margin-top: ${({ offset }) => offset}px;

  -webkit-transform: translate3d(250px, 250px, 250px)
    rotate3d(250px, 250px, 250px, -120deg) scale3d(0.5, 0.5, 0.5);
`;

type InnerProps = {
  offset: number;
};

export const Inner = styled.div<InnerProps>`
  display: flex;
  transition: margin 800ms ease-out;

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
  z-index: 600;
`;

export const sceneBase = css`
  position: relative;
  flex-shrink: 0;
  width: 64rem;
  height: 38rem;
  border-right: 3rem solid #282828;
  overflow: hidden;

  transition: opacity 1s ease-in-out;

  > * {
    transition: opacity 1s ease-in-out;
  }

  .background {
    position: absolute;
    z-index: 500;
  }

  .silhouette {
    position: absolute;
    z-index: 499;
  }

  &:last-child {
    border: none;
  }

  &.deselected {
    > * {
      opacity: 0;

      &.background {
        opacity: 0.2;
      }

      &.silhouette {
        opacity: 1;
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
