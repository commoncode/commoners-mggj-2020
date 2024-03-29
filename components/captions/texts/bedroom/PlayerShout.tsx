import Caption from "../../Caption"

const PlayerShout = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "Hey, come back here and help me!"
      break;
    case "french":
      text = "Reviens me donner un coup de main!"
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