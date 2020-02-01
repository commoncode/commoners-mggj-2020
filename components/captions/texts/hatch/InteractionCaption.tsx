import Caption from "../../Caption"

const Interaction = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "Where are you going like this? It's a submarine!"
      break;
    case "french":
      text = "Tu vas où ? C'est un sous-marin j'te rappelle !"
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

export default Interaction;