import Title from "../../scenes/Title";
import Bedroom from "../../scenes/Bedroom";
import Hatch from "../../scenes/Hatch";
import Helm from "../../scenes/Helm";
import Kitchen from "../../scenes/Kitchen";
import Divider from "../../scenes/Divider";

import ActionsBedroom from "../../events/Actions/ActionsBedroom";
import ActionsKitchen from "../../events/Actions/ActionsKitchen";
import ActionsHatch from "../../events/Actions/ActionsHatch";
import ActionsHelm from "../../events/Actions/ActionsHelm";

import {
  Container,
  Inner,
  Floor,
  LeftButton,
  RightButton
} from "./Stage.styles";

const Stage = ({
  children,
  scene,
  language,
  increaseLovePoints,
  decreaseLovePoints,
  offset, // wave offset
  setLocation,
  setTargetLocationLover,
  setShowOverlayNotClickable,
  setScene,
  setTypeEnding
}) => {
  const handleClick = (e, clipLeft, clipRight) => {
    const rect = e.target.classList.contains("floor")
      ? e.target.getBoundingClientRect()
      : e.target.parentElement.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    // Clip max / min so it doesn't leak over the edge of the sub
    if (x < clipLeft) {
      x = clipLeft;
    } else if (x > clipRight) {
      x = clipRight;
    }

    if (y > 70) {
      y = 70;
    }

    // Characters peaking above the touch zone extend it ><'
    if (y >= 0) {
      setLocation(x, y);
    }
  };

  const capRight = 920;
  const capLeft = 100;

  return (
    <>
      <Container offset={offset}>
        <Inner className={scene}>
          <Bedroom className={scene !== "bedroom" ? "deselected" : null}>
            <ActionsBedroom
              language={language}
              setTargetLocationLover={setTargetLocationLover}
              setShowOverlayNotClickable={setShowOverlayNotClickable}
              increaseLovePoints={increaseLovePoints}
              decreaseLovePoints={decreaseLovePoints}
            />

            <Floor
              onClick={e =>
                scene === "bedroom" ? handleClick(e, 200, 770) : null
              }
              className={`floor`}
              left={9}
            >
              {children}
            </Floor>
          </Bedroom>

          <Divider
            kind={"first"}
            onClick={() => {
              if (scene === "bedroom") {
                setScene("kitchen", "right", 880);
              } else {
                setScene("bedroom", "left", 880);
              }
            }}
          />

          <Kitchen className={scene !== "kitchen" ? "deselected" : null}>
            {scene === "kitchen" ? (
              <>
                <ActionsKitchen
                  language={language}
                  increaseLovePoints={increaseLovePoints}
                  decreaseLovePoints={decreaseLovePoints} />

                <Floor
                  onClick={e => handleClick(e, capLeft, capRight)}
                  className={`floor`}
                >
                  {children}
                </Floor>
              </>
            ) : null}
          </Kitchen>

          <Divider
            kind={"second"}
            onClick={() => {
              if (scene === "kitchen") {
                setScene("hatch", "right", 880);
              } else {
                setScene("kitchen", "left", 880);
              }
            }}
          />

          <Hatch className={scene !== "hatch" ? "deselected" : null}>
            {scene === "hatch" ? (
              <>
                <ActionsHatch
                  language={language}
                  increaseLovePoints={increaseLovePoints}
                  decreaseLovePoints={decreaseLovePoints}
                />

                <Floor
                  onClick={e => handleClick(e, capLeft, capRight)}
                  className={`floor`}
                >
                  {children}
                </Floor>
              </>
            ) : null}
          </Hatch>

          <Divider
            kind={"third"}
            onClick={() => {
              if (scene === "hatch") {
                setScene("helm", "right", 880);
              } else {
                setScene("hatch", "left", 880);
              }
            }}
          />

          <Helm className={scene !== "helm" ? "deselected" : null}>
            {scene === "helm" ? (
              <>
                <ActionsHelm
                  language={language}
                  setTypeEnding={setTypeEnding}
                  increaseLovePoints={increaseLovePoints}
                  decreaseLovePoints={decreaseLovePoints}
                />

                <Floor
                  onClick={e => handleClick(e, capLeft, 800)}
                  className={`floor`}
                >
                  {children}
                </Floor>
              </>
            ) : null}
          </Helm>

          <Title onClick={() => setScene("bedroom", "right", 880)} />
        </Inner>
      </Container>
    </>
  );
};

export default Stage;
