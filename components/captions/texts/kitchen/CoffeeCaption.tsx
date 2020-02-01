import Caption from "../../Caption"

const CoffeeCaption = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "He knows how to make a good coffee."
      break;
    case "french":
      text = "Grand-mère sait faiiire un bon café!"
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

export default CoffeeCaption;