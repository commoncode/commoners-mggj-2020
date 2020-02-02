import Caption from "../../Caption"

const Firies = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "Love those abs! I'd love to slip some cash into those pants!"
      break;
    case "french":
      text = "Regardez-moi ces muscles ! Je devrais leur faire une donation!"
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

export default Firies;