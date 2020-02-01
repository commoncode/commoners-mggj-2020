import Caption from "../../Caption"

const CookieCaption = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "Those cookies look yum."
      break;
    case "french":
      text = "Ces cookies ont l'air bon."
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