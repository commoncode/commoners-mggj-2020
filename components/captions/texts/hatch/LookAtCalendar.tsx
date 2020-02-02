import Caption from "../../Caption"

const LookAtCalendar = ({ x, y, language, isToggled }) => {
  let text = null;

  switch(language) {
    case "english":
      text = "I forgot our anniversary! I should apologise."
      break;
    case "french":
      text = "J'ai oublié notre anniversaire! Je devrais lui demander pardon."
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

export default LookAtCalendar;