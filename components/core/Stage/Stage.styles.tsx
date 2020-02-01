import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  background: #72a8c1;
  width: 100%;
  overflow: hidden;
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

  &.helm {
    margin-left: calc(50vw - 32rem - 128rem);
  }

  &.hatch {
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
  background: rgba(0, 0, 0, 0.6);
`;

export const sceneBase = css`
  position: relative;
  flex-shrink: 0;
  width: 64rem;
  height: 38rem;
  margin-right: 3rem;
  overflow: hidden;

  &:last-child {
    margin-right: 0;
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
