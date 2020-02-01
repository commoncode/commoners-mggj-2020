import { Container } from "./Caption.styles";

type CaptionType = {
  x: number;
  y: number;
  children?: any;
  isToggled?: boolean;
  activation?: () => void;
};

const Caption = ({ children, x, y, isToggled = false, activation = null }) => (
  <Container
    x={x}
    y={y}
    className={isToggled ? "visible" : null}
    onClick={() => activation && activation()}
  >
    {children}
  </Container>
);

export default Caption;
