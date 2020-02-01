import Caption from "../Caption"

const PutItemBackCaption = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "I'll put it back."
      break;
    case "french":
      text = "Je vais remettre ça à sa place."
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

export default PutItemBackCaption;