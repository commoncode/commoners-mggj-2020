import styled from "styled-components";
import sceneBase from "../../core/Stage";

export const Container = styled.a`
  ${sceneBase}
`;

const Image = styled.img`
  cursor: pointer;
  flex-grow: 1;
  flex-shrink: 1;
  margin-left: 30rem;
`;

const Cover = ({ onClick }) => (
  <Container onClick={onClick}>
    <Image src="/cover.png" width={1024} />
  </Container>
);

export default Cover;
