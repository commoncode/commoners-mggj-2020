import styled from "styled-components";
import Caption from "../../Caption";

const Yell = styled.div`
  font-family: "Frijole", cursive;
  font-size: 28px;
  text-transform: uppercase;
  text-align: center;

  animation: wiggle ease-in-out 500ms infinite;

  @keyframes wiggle {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-2deg);
    }
    33% {
      transform: rotate(5deg);
    }
    65% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const LoverYelling = ({ x, y, language, isToggled }) => {
  let text = null;

  switch (language) {
    case "english":
      text = (
        <Yell>
          I'd
          <br /> rather
          <br /> drown!
        </Yell>
      );
      break;
    case "french":
      text = (
        <Yell>
          Plutôt
          <br /> mourir
          <br /> ici!
        </Yell>
      );
      break;
  }

  return (
    <Caption x={x} y={y} isToggled={isToggled} tail={"right"}>
      {text}
    </Caption>
  );
};

export default LoverYelling;
