import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  background: red;
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

export const sceneBase = css`
  flex-shrink: 0;
  width: 64rem;
  height: 48rem;
`;
