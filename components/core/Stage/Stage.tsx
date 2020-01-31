import { useState } from "react";

import Bedroom from "../../scenes/Bedroom";
import Hatch from "../../scenes/Hatch";
import Helm from "../../scenes/Helm";
import Kitchen from "../../scenes/Kitchen";

import { Container, Inner } from "./Stage.styles";

const Stage = ({ children, scene }) => {
  return (
    <>
      <Container>
        <Inner className={scene}>
          <Bedroom />
          <Kitchen />
          <Helm />
          <Hatch />
        </Inner>
      </Container>
    </>
  );
};

export default Stage;
