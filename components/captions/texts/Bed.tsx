import Caption from "../Caption"

const Bed = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "No time for this!"
      break;
    case "french":
      text = "C'est vraiment pas le moment!"
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

export default Bed;