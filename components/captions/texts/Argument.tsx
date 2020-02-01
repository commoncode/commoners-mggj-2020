import Caption from "../Caption"

const Argument = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "This is in English"
      break;
    case "french":
      text = "Texte en francais"
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

export default Argument;