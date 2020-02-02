import Caption from "../../Caption"

const TryNotToDie = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "Hadn't considered this."
      break;
    case "french":
      text = '"Essayez de ne pas mourir."'
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

export default TryNotToDie;