import Caption from "../../Caption"

const Wrench = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "Let's see if that works."
      break;
    case "french":
      text = "Voyons voir..."
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

export default Wrench;