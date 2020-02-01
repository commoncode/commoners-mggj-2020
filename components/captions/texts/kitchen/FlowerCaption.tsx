import Caption from "../../Caption"

const FlowerCaption = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "Those are is favourite flowers."
      break;
    case "french":
      text = "Ses fleurs préférées."
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

export default FlowerCaption;