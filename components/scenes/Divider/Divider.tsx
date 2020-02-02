import First from "./First";
import Second from "./Second";
import Third from "./Third";

import { Container } from "./Divider.styles";

type DividerType = {
  kind: "first" | "second" | "third";
  onClick: Function;
};

const Divider = ({ kind, onClick }: DividerType) => {
  let internal = <Third />;
  switch (kind) {
    case "first":
      internal = <First />;
      break;
    case "second":
      internal = <Second />;
      break;
  }

  return <Container onClick={onClick}>{internal}</Container>;
};

export default Divider;
