import Caption from "../../Caption"

const Argument = ({ x, y, language, isToggled }) => {
  let text = null;

  switch (language) {
    case "english":
      text = "This is too much! I told you this submarine was in a bad shape. It is as rusty as my love for you. This relationship is beyond repair! I'm done!"
      break;
    case "french":
      text = "Y'en a marre! J't'avais bien dit que ce sous-marin était dans un sale état. Il est aussi rouillé que mon amour pour toi. Notre couple est irréparable! J'en ai fini avec toi!"
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

export default Argument;