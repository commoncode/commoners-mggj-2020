import Caption from "../../Caption"

const BreakWindow = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "I broke the glass with the wrench."
      break;
    case "french":
      text = "J'ai brisé la vitre avec la clé à molette."
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

export default BreakWindow;