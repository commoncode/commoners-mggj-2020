import { useState } from "react";

import Bedroom from "../../scenes/Bedroom";
import Hatch from "../../scenes/Hatch";
import Helm from "../../scenes/Helm";
import Kitchen from "../../scenes/Kitchen";

import {
  Container,
  Inner,
  Floor,
  LeftButton,
  RightButton
} from "./Stage.styles";

const Stage = ({ children, scene, setLocation, setScene }) => {
  const handleClick = e => {
    const rect = e.target.classList.contains("floor")
      ? e.target.getBoundingClientRect()
      : e.target.parentElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setLocation(x, y);
  };

  return (
    <>
      <Container>
        <Inner className={scene}>
          <Bedroom>
            {scene === "bedroom" ? (
              <>
                <RightButton onClick={() => setScene("kitchen")}>
                  Right
                </RightButton>
              </>
            ) : null}

            <Floor onClick={handleClick} className={`floor`}>
              {scene === "bedroom" ? <>{children}</> : null}
            </Floor>
          </Bedroom>

          <Kitchen>
            {scene === "kitchen" ? (
              <>
                <LeftButton onClick={() => setScene("bedroom")}>
                  Left
                </LeftButton>
                <RightButton onClick={() => setScene("helm")}>
                  Right
                </RightButton>
              </>
            ) : null}

            <Floor onClick={handleClick} className={`floor`}>
              {scene === "kitchen" ? <>{children}</> : null}
            </Floor>
          </Kitchen>

          <Helm>
            {scene === "helm" ? (
              <>
                <LeftButton onClick={() => setScene("kitchen")}>
                  Left
                </LeftButton>
                <RightButton onClick={() => setScene("hatch")}>
                  Right
                </RightButton>
              </>
            ) : null}

            <Floor onClick={handleClick} className={`floor`}>
              {scene === "helm" ? <>{children}</> : null}
            </Floor>
          </Helm>

          <Hatch>
            {scene === "hatch" ? (
              <>
                <LeftButton onClick={() => setScene("helm")}>Left</LeftButton>
              </>
            ) : null}

            <Floor onClick={handleClick} className={`floor`}>
              {scene === "hatch" ? <>{children}</> : null}
            </Floor>
          </Hatch>
        </Inner>
      </Container>
    </>
  );
};

export default Stage;
