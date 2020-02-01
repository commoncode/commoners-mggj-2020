import Caption from "../../Caption"

const IkeaBox = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "Maybe this screw was supposed to go somewhere?"
      break;
    case "french":
      text = "Peut-être que ce clou devait aller quelque part."
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

export default IkeaBox;