import Caption from "../../Caption"

const GrabWrenchCaption = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "I'll take this wrench with me."
      break;
    case "french":
      text = "Je vais prendre cette clé à molette."
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

export default GrabWrenchCaption;