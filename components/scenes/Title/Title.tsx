import styled from "styled-components";
import sceneBase from "../../core/Stage";

export const Container = styled.a`
  position: relative;
  ${sceneBase}
`;

const Image = styled.img`
  flex-grow: 1;
  flex-shrink: 1;
  margin-left: 30rem;
`;

const English = styled.a`
  position: absolute;
  top: 305px;
  left: 50%;
  margin-left: 100px;
  width: 280px;
  height: 70px;

  cursor: pointer;
`;

const French = styled.a`
  position: absolute;
  top: 390px;
  left: 50%;
  margin-left: 100px;
  width: 280px;
  height: 70px;
  cursor: pointer;
`;

const Credits = styled.a`
  position: absolute;
  top: 475px;
  left: 50%;
  margin-left: 100px;
  width: 280px;
  height: 70px;

  cursor: pointer;
`;

const Cover = ({ onClick }) => (
  <Container>
    <Image src="/cover.png" width={1024} />
    <English onClick={() => onClick("english")} />
    <French onClick={() => onClick("french")} />
    <Credits />
  </Container>
);

export default Cover;
