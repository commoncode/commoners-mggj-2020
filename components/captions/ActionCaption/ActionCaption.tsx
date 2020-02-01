import { Container } from "./ActionCaption.styles"

type ActionCaptionProps = {
    activation?: () => void;
    isToggled?: boolean;
    children?: any;
    x?: number;
    y?: number;
}

const noneFn = () => { };

const ActionCaption = ({ x, y, children = null, isToggled = false, activation }: ActionCaptionProps) => {
    return <Container
        x={x}
        y={y}
        isToggled={isToggled}
        onClick={() => activation && activation()}
    >
        {children}
    </Container>
}

export default ActionCaption;
