import Caption from "../../Caption"

const CrumbCaption = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "Oh shit, crumbs! He's gonna kill me if that submarine doesn't kill me first."
      break;
    case "french":
      text = "Merde, j'ai mis des miettes partout. Il va me tuer, si on meurt pas de noyade avant!"
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

export default CrumbCaption;