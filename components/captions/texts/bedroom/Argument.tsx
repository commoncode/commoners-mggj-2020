import Caption from "../../Caption";

const Argument = ({x, y, language, isToggled}) => {
    let text = null;

    switch (language) {
        case "english":
            text = (
                <>
                    This is too much! I told you this submarine was in a bad shape. It is
                    as rusty as my love for you.{" "}
                    <strong>This relationship is beyond repair!</strong> I'm done!
                </>
            );
            break;
        case "french":
            text = (
                <>
                    Y'en a marre! J't'avais bien dit que ce sous-marin était dans un sale
                    état. Il est aussi rouillé que mon amour pour toi.{" "}
                     <strong>J'en ai fini avec toi!</strong>
                </>
            );
            break;
    }

    return (
        <Caption x={x} y={y} isToggled={isToggled} tail={"bottomRight"}>
            {text}
        </Caption>
    );
};

export default Argument;
