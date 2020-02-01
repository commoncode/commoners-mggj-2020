import { useContext, useEffect } from "react";

import EventsContext from "../../core/Context/EventsContext";
import Bedroom from "../../scenes/Bedroom";
import Hatch from "../../scenes/Hatch";
import Helm from "../../scenes/Helm";
import Kitchen from "../../scenes/Kitchen";

// events
import Leak from "../../events/Leak";
import Argument from "../../captions/texts/Argument";

// captions for Bedroom scene
import Bed from "../../captions/texts/Bed";
import LoverYelling from "../../captions/texts/LoverYelling";
import Panic from "../../captions/texts/Panic";
import Photo from "../../captions/texts/Photo";
import PlayerShout from "../../captions/texts/PlayerShout";

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

const BedroomInitialState = [
  {
    ...LeakEvent
  }
];

const Stage = ({
  children,
  scene,
  language,
  offset, // wave offset
  setLocation,
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

  const { bedroom: bedroomState, init, addEvent, removeEvent } = useContext(EventsContext);

  const displayEvents = (scene) => {

    if (scene === "bedroom") {

      return (
        <>
          {
            bedroomState && bedroomState.events.length > 0 && bedroomState.events.map(({ component: EventComponent, ...eventState }, index) => {
              return (
                <EventComponent
                  key={`event-${index}`}
                  activation={() => {

                    removeEvent("bedroom")
                    setTimeout(() => {
                      addEvent({
                        ...LeakEvent,
                        position: {
                          x: eventState.position.x + 200,
                          y: eventState.position.y,
                          scene: 'bedroom'
                        },
                      }, "bedroom");
                    }, 0)
                  }}
                  {...eventState}
                />
              );
            })}
        </>
      );
    }
  };

  useEffect(() => {
    init(scene);
  }, [scene])

  return (
    <>
      <Container offset={offset}>
        <Inner className={scene}>
          <Bedroom className={scene !== "bedroom" ? "deselected" : null}>
            <RightButton onClick={() => setScene("kitchen", "right", 880)}>
              Right
            </RightButton>

            <Argument x={450} y={100} language={language} isToggled={false} />
            <PlayerShout x={450} y={170} language={language} isToggled={false} />
            <LoverYelling x={820} y={270} language={language} isToggled={false} />
            <Photo x={300} y={180} language={language} isToggled={false} />
            <Bed x={250} y={180} language={language} isToggled />
            <Panic x={450} y={150} language={language} isToggled />

            <Floor
              onClick={e =>
                scene === "bedroom" ? handleClick(e, 100, 770) : null
              }
              className={`floor`}
              left={9}
            >
              {children}
            </Floor>

            {scene === "bedroom" && displayEvents("bedroom")}
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

            {scene === "kitchen" && displayEvents("kitchen")}
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

            {scene === "hatch" && displayEvents("hatch")}
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

            {scene === "helm" && displayEvents("helm")}
          </Helm>
        </Inner>
      </Container>
    </>
  );
};

export default Stage;
