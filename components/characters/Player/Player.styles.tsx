import styled from "styled-components";

import { characterBase, characterPosition } from "../Character.styles";

type ContainerProps = {
  x: number;
  y: number;
};

export const Container = styled.div<ContainerProps>`
  ${characterBase}
  ${({ x, y, speed }) => characterPosition(x, y, `${speed}s`)}
`;
