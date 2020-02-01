import Caption from "../../Caption"

const GrabFlowerCaption = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "I can give him a flower."
      break;
    case "french":
      text = "Je peux lui donner une fleur."
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

export default GrabFlowerCaption;