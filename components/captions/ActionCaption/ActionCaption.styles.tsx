import styled, { css } from "styled-components";

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

  width: 5rem;

  /* animation */
  transition: opacity 0.5s ease-in-out, margin-top 0.5s ease-in-out;

  background: #282828;
  color: #fff;
  padding: 12px;
  font-size: 18px;
  border-radius: 8px;
`;
const isVisibleStyle = css`
  visibility: "visibility";
  opacity: 1;
  z-index: 502;
`;

const isHiddenStyle = css`
  visibility: "hidden";
  opacity: 0;
  pointer-events: none;
`;

const Inner = styled.div`
  flex-shrink: 1;
`;
export const Container = styled.div<ContainerProps>`
${captionBase}
${Inner}
${({ isToggled }) => (isToggled ? isVisibleStyle : isHiddenStyle)}
left: ${({ x }) => x}px;
top: ${({ y }) => y}px;
`;
