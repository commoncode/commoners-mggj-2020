import Caption from "../Caption"

const Photo = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "That was when he still loved me..."
      break;
    case "french":
      text = "On a l'air amoureux sur cette photo..."
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

export default Photo;