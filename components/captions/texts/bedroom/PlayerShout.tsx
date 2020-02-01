import Caption from "../../Caption"

const PlayerShout = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "Hey come back here! we're not finished talking!"
      break;
    case "french":
      text = "Hé reviens! On n'a pas fini de parler!"
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

export default PlayerShout;