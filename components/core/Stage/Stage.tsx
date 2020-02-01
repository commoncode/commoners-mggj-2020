import { useState, useCallback } from "react";

import Bedroom from "../../scenes/Bedroom";
import Hatch from "../../scenes/Hatch";
import Helm from "../../scenes/Helm";
import Kitchen from "../../scenes/Kitchen";

// events
import Leak from "../../events/Leak";
import Argument from "../../captions/texts/Argument";

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

const BedroomInitialState = [{
  ...LeakEvent,
}];

const Stage = ({ children, scene, language, setLocation, setScene }) => {
  const handleClick = (e, clipLeft, clipRight) => {
    const rect = e.target.classList.contains("floor")
      ? e.target.getBoundingClientRect()
      : e.target.parentElement.getBoundingClientRect();
    let x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Clip max / min so it doesn't leak over the edge of the sub
    if (x < clipLeft) {
      x = clipLeft;
    } else if (x > clipRight) {
      x = clipRight;
    }

    // Characters peaking above the touch zone extend it ><'
    if (y >= 0) {
      setLocation(x, y);
    }
  };

  const capRight = 920;
  const capLeft = 100;


  const [events, setEvents] = useState([...BedroomInitialState]);

 const addAndPopEvent = (event) => {
    const [_first, ...others] = events;
    setEvents([...others, event])
  };

  const displayEvents = () => {
    return (
      <>
        {events &&
          events.length > 0 &&
          events
            .filter(({ component, ...eventState }) => eventState.position.scene === scene)
            .map(({ component: EventComponent, ...eventState }, index) => {

              return (
                <EventComponent
                  key={`event-${index}`}
                  activation={() => {
                    addAndPopEvent({
                      ...LeakEvent,
                      position: {
                        x: eventState.position.x + 200,
                        y: eventState.position.y,
                        scene: 'bedroom'
                      },
                    })
                  }}
                  {...eventState}

                />
              )
            })
        }
      </>
    )
  }

  console.log(events)
  return (
    <>
      <Container>
        <Inner className={scene}>
          <Bedroom>
            {scene === "bedroom" ? (
              <>
                <RightButton onClick={() => setScene("kitchen", "right", 880)}>
                  Right
                </RightButton>

                <Argument x={100} y={100} language={language} isToggled />
              </>
            ) : null}

            <Floor
              onClick={e => handleClick(e, 100, 770)}
              className={`floor`}
              left={9}
            >
              {scene === "bedroom" ? <>{children}</> : null}
            </Floor>
            {scene === "bedroom" && displayEvents()}
          </Bedroom>

          <Kitchen>
            {scene === "kitchen" ? (
              <>
                <LeftButton onClick={() => setScene("bedroom", "left", 880)}>
                  Left
                </LeftButton>
                <RightButton onClick={() => setScene("helm", "right")}>
                  Right
                </RightButton>
              </>
            ) : null}

            <Floor
              onClick={e => handleClick(e, capLeft, capRight)}
              className={`floor`}
            >
              {scene === "kitchen" ? <>{children}</> : null}
            </Floor>
            {scene === "kitchen" && displayEvents()}
          </Kitchen>

          <Helm>
            {scene === "helm" ? (
              <>
                <LeftButton onClick={() => setScene("kitchen", "left")}>
                  Left
                </LeftButton>
                <RightButton onClick={() => setScene("hatch", "right")}>
                  Right
                </RightButton>
              </>
            ) : null}

            <Floor
              onClick={e => handleClick(e, capLeft, capRight)}
              className={`floor`}
            >
              {scene === "helm" ? <>{children}</> : null}
            </Floor>
            {scene === "helm" && displayEvents()}
          </Helm>

          <Hatch>
            {scene === "hatch" ? (
              <>
                <LeftButton onClick={() => setScene("helm", "left")}>
                  Left
                </LeftButton>
              </>
            ) : null}

            <Floor
              onClick={e => handleClick(e, capLeft, capRight)}
              className={`floor`}
            >
              {scene === "hatch" ? <>{children}</> : null}
            </Floor>
            {scene === "hatch" && displayEvents()}
          </Hatch>
        </Inner>
      </Container>
    </>
  );
};

export default Stage;
