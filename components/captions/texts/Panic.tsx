import Caption from "../Caption"

const Panic = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "WE'RE GOING TO DIE HERE!"
      break;
    case "french":
      text = "ON VA MOURIR ICI!"
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

export default Panic;