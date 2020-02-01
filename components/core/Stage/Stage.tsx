import { useEffect, useState } from "react";

import Bedroom from "../../scenes/Bedroom";
import Hatch from "../../scenes/Hatch";
import Helm from "../../scenes/Helm";
import Kitchen from "../../scenes/Kitchen";

// events
import Leak from "../../events/Leak";
import Actions from "../../events/Actions/Actions";
import Argument from "../../captions/texts/bedroom/Argument";


import {
  Container,
  Inner,
  Floor,
  LeftButton,
  RightButton
} from "./Stage.styles";

type EventType = {
  activation?: () => {};
  component: any;
  position: {
    scene: "kitchen" | "bedroom" | "helm" | "hatch" | "ending";
    x: number;
    y: number;
  };
  display: number; // display the event until reach some ammount of time
  status: "display" | "hidden";
};

type StageStateType = {
  events: EventType[];
};

const LeakEvent = {
  component: Leak,
  position: {
    x: 300,
    y: 300,
    scene: "bedroom"
  },
  display: 30,
  status: "display"
};

const Stage = ({
  children,
  scene,
  language,
  offset, // wave offset
  setLocation,
  setTargetLocationLover,
  setScene
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


  // Bedroom events
  const [showArgument, setShowArgument] = useState(true);
  const [showFirstLeak, setShowFirstLeak] = useState(false);
  const [showSecondLeak, setShowSecondLeak] = useState(false);


  const runInitialConversation = async () => {
    await setTimeout(() => {
      setShowFirstLeak(true);
    }, 500);

    await setTimeout(() => {
      setShowArgument(false);
    }, 5000);

    await setTimeout(() => {
      setTargetLocationLover(1000, 50)
    }, 3500)
  }

  useEffect(() => {
    runInitialConversation();
  }, [])



  return (
    <>
      <Container offset={offset}>
        <Inner className={scene}>
          <Bedroom className={scene !== "bedroom" ? "deselected" : null}>
            <RightButton onClick={() => setScene("kitchen", "right", 880)}>
              Right
            </RightButton>
            <Argument x={450} y={100} language={language} isToggled={showArgument} />

            {showFirstLeak && <Leak x={500} y={200} activation={() => {
              setShowFirstLeak(false)
              setShowSecondLeak(true)
            }} />}

            {showSecondLeak && <Leak x={700} y={200} activation={() => {
              setShowFirstLeak(true);
              setShowSecondLeak(false);
            }} />}

            <Actions language={language}></Actions>

            <Floor
              onClick={e =>
                scene === "bedroom" ? handleClick(e, 100, 770) : null
              }
              className={`floor`}
              left={9}
            >
              {children}
            </Floor>

          </Bedroom>

          <Kitchen className={scene !== "kitchen" ? "deselected" : null}>
            {scene === "kitchen" ? (
              <>
                <LeftButton onClick={() => setScene("bedroom", "left", 880)}>
                  Left
                </LeftButton>
                <RightButton onClick={() => setScene("hatch", "right")}>
                  Right
                </RightButton>

                <Floor
                  onClick={e => handleClick(e, capLeft, capRight)}
                  className={`floor`}
                >
                  {children}
                </Floor>
              </>
            ) : null}

          </Kitchen>

          <Hatch className={scene !== "hatch" ? "deselected" : null}>
            {scene === "hatch" ? (
              <>
                <LeftButton onClick={() => setScene("kitchen", "left")}>
                  Left
                </LeftButton>
                <RightButton onClick={() => setScene("helm", "right")}>
                  Right
                </RightButton>

                <Floor
                  onClick={e => handleClick(e, capLeft, capRight)}
                  className={`floor`}
                >
                  {children}
                </Floor>
              </>
            ) : null}

          </Hatch>

          <Helm className={scene !== "helm" ? "deselected" : null}>
            {scene === "helm" ? (
              <>
                <LeftButton onClick={() => setScene("hatch", "left")}>
                  Left
                </LeftButton>

                <Floor
                  onClick={e => handleClick(e, capLeft, capRight)}
                  className={`floor`}
                >
                  {children}
                </Floor>
              </>
            ) : null}

          </Helm>
        </Inner>
      </Container>
    </>
  );
};

export default Stage;
