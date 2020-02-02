import styled, { css } from "styled-components";

type ContainerProps = {
  offset: number;
};

export const Container = styled.a<ContainerProps>`
  flex-shrink: 0;
  width: 56px;
  cursor: pointer;
`;
