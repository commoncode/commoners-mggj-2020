import Caption from "../../Caption"

const LeakingCaption = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "Oh no! The water level is rising."
      break;
    case "french":
      text = "Oh non! Le niveau de l'eau continue de monter."
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

export default LeakingCaption;