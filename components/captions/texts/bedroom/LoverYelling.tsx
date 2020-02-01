import Caption from "../../Caption"

const LoverYelling = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "I'd rather drown!"
      break;
    case "french":
      text = "Plutôt mourir!"
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

export default LoverYelling;