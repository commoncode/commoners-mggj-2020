import { Container } from "./Caption.styles";

type CaptionType = {
  x: number;
  y: number;
  children?: React.ReactNode;
  isToggled?: boolean;
  tail?: "bottomLeft" | "bottomRight" | "bottom" | "left" | "right";
  activation?: () => void;
};

const Caption = ({
  children,
  x,
  y,
  isToggled = false,
  activation = null,
  tail
}: CaptionType) => (
  <Container
    x={x}
    y={y}
    tail={tail}
    className={isToggled ? "visible" : null}
    onClick={() => activation && activation()}
  >
    {children}
  </Container>
);

export default Caption;
