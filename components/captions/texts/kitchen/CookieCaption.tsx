import Caption from "../../Caption"

const CookieCaption = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "Okay, one for the road. Yum."
      break;
    case "french":
      text = "Aller, un pour la route. Miam."
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

export default CookieCaption;