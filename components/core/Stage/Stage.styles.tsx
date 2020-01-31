import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  background: red;
  width: 100%;
  overflow: hidden;
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

  &.helm {
    margin-left: calc(50vw - 32rem - 128rem);
  }

  &.hatch {
    margin-left: calc(50vw - 32rem - 192rem);
  }
`;

export const Floor = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  height: 10rem;
  background: rgba(0, 0, 0, 0.6);
`;

export const sceneBase = css`
  position: relative;
  flex-shrink: 0;
  width: 64rem;
  height: 38rem;
`;
