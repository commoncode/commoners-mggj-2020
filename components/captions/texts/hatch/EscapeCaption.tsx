import Caption from "../../Caption"

const EscapeCaption = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "I need help to climb this ladder."
      break;
    case "french":
      text = "J'ai besoin d'aide pour monter à l'échelle."
      break;
  }

  return <Caption
    x={x}
    y={y}
    isToggled={isToggled}
  >
    {text}
    </Caption>
}

export default EscapeCaption;