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

  const [showPlayerShout, setShowPlayerShout] = useState(false);
  const [showLoverYelling, setShowLoverYelling] = useState(false);
  const [showPanicCaption, setShowPanicCaption] = useState(false);


  const runInitialConversation = async () => {
    await setTimeout(() => {
      setShowFirstLeak(true);
    }, 500);

    await setTimeout(() => {
      setShowArgument(false);
    }, 5000);

    await setTimeout(() => {
      setTargetLocationLover(1000, 50);
    }, 3500);
  };

  useEffect(() => {
    runInitialConversation();
  }, []);

  return (
    <>
      <Container offset={offset}>
        <Inner className={scene}>
          <Bedroom className={scene !== "bedroom" ? "deselected" : null}>
            <RightButton onClick={() => setScene("kitchen", "right", 880)}>
              Right
            </RightButton>
            
            <Argument x={450} y={100} language={language} isToggled={showArgument} />

            {/* Leaks */}
            {showFirstLeak &&
              <Leak x={500}
                y={200}
                activation={() => {
                  console.log('click leak')
                }}
                repair={() => {
                  setShowFirstLeak(false);
                  setShowSecondLeak(true);
                }}
                yell={async () => {
                  setShowPlayerShout(true)

                  await setTimeout(() => {
                    setShowPlayerShout(false)
                  }, 1500)

                  await setTimeout(() => {
                    setShowLoverYelling(true)
                  }, 2000)

                  await setTimeout(() => {
                    setShowLoverYelling(false)
                  }, 3500)

                }}
                panic={async () => {
                  setShowPanicCaption(true)

                  await setTimeout(() => {
                    setShowPanicCaption(false)
                  }, 2500)
                }}
              />
            }

            {showSecondLeak && <Leak x={700} y={200} activation={() => {

              // setShowSecondLeak(false);
            }}

              repair={() => {
                setShowSecondLeak(false);
                setShowFirstLeak(true);
              }}
              yell={async () => {
                setShowPlayerShout(true)

                await setTimeout(() => {
                  setShowPlayerShout(false)
                }, 1500)

                await setTimeout(() => {
                  setShowLoverYelling(true)
                }, 2000)

                await setTimeout(() => {
                  setShowLoverYelling(false)
                }, 3500)
              }}
              panic={async () => {
                setShowPanicCaption(true)

                await setTimeout(() => {
                  setShowPanicCaption(false)
                }, 2500)
              }}
            />}

            {/* END Leaks */}

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
