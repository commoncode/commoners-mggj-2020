import Caption from "../../Caption"

const Punch = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "Oh no! I cut my hand pretty badly!"
      break;
    case "french":
      text = "Je me suis coupé en essayant de briser la vitre !"
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

export default Punch;