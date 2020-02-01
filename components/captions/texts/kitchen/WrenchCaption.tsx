import Caption from "../../Caption"

const WrenchCaption = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "That could be useful."
      break;
    case "french":
      text = "Tiens, ça pourrait être utile."
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

export default WrenchCaption;