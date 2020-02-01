import Caption from "../../Caption"

const GrabCookieCaption = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "I can give this to bae."
      break;
    case "french":
      text = "Je peux lui donner un cookie."
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

export default GrabCookieCaption;