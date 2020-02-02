import Caption from "../../Caption"

const AskForHelp = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "I need your help to open the hatch."
      break;
    case "french":
      text = "J'ai besoin de ton aide pour ouvrir le sas."
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

export default AskForHelp;