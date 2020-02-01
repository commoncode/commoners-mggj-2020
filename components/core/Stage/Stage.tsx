import { useState, useCallback } from "react";

import Bedroom from "../../scenes/Bedroom";
import Hatch from "../../scenes/Hatch";
import Helm from "../../scenes/Helm";
import Kitchen from "../../scenes/Kitchen";

// events
import Leak from '../../events/Leak';

import {
  Container,
  Inner,
  Floor,
  LeftButton,
  RightButton
} from "./Stage.styles";

type EventType = {
  activation?: () => {};
  component: any,
  position: {
    scene: "kitchen" | "bedroom" | "helm" | "hatch" | "ending";
    x: number;
    y: number;
  };
  display: number; // display the event until reach some ammount of time
  status: "display" | "hidden";
}

type StageStateType = {
  events: EventType[]
}

const LeakEvent = {
  component: Leak,
  position: {
    x: 300,
    y: 300,
    scene: "bedroom"
  },
  display: 30,
  status: 'display',
}

const BedroomInitialState = [{
  ...LeakEvent,
  activation: (fn) => () => fn({
    ...LeakEvent,
    position: {
      x: 500,
      y: 300,
      scene: 'bedroom'
    },
    activation: (fn) => () => fn({
      ...LeakEvent,
      position: {
        x: 700,
        y: 300,
        scene: 'bedroom'
      }
    })
  })
}];

const Stage = ({ children, scene, setLocation, setScene }) => {
  const handleClick = e => {
    const rect = e.target.classList.contains("floor")
      ? e.target.getBoundingClientRect()
      : e.target.parentElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Characters peaking above the touch zone extend it ><'
    if (y >= 0) {
      setLocation(x, y);
    }
  };

  const [events, setEvents] = useState(BedroomInitialState);

  const addEvent = useCallback((event) => {
    setEvents([...events, event])
  }, [setEvents])

  const displayEvents = useCallback(() => {
    return (
      <>
        {
          events && events.length > 0 &&
          events
            .filter(({ component, ...eventState }) => eventState.position.scene === scene)
            .map(({ component: EventComponent, activation, ...eventState }, index) => {

              let additionalProps = {}
              if (activation) {
                additionalProps = {
                  activation: activation(addEvent)
                }
              }

              return (
                <EventComponent
                  key={`event-${index}`}
                  {...eventState}
                  {...additionalProps}
                />
              )
            })
        }
      </>
    )
  }, [scene, events, addEvent])

  return (
    <>
      <Container>
        <Inner className={scene}>
          <Bedroom>
            {scene === "bedroom" ? (
              <>
                <RightButton onClick={() => setScene("kitchen", "right")}>
                  Right
                </RightButton>
              </>
            ) : null}

            <Floor onClick={handleClick} className={`floor`}>
              {scene === "bedroom" ? <>{children}</> : null}
            </Floor>
            {
              scene === "bedroom" && displayEvents()
            }

          </Bedroom>

          <Kitchen>
            {scene === "kitchen" ? (
              <>
                <LeftButton onClick={() => setScene("bedroom", "left")}>
                  Left
                </LeftButton>
                <RightButton onClick={() => setScene("helm", "right")}>
                  Right
                </RightButton>
              </>
            ) : null}

            <Floor onClick={handleClick} className={`floor`}>
              {scene === "kitchen" ? <>{children}</> : null}
            </Floor>
            {
              scene === "kitchen" && displayEvents()
            }

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

            <Floor onClick={handleClick} className={`floor`}>
              {scene === "helm" ? <>{children}</> : null}
            </Floor>
            {
              scene === "helm" && displayEvents()
            }

          </Helm>

          <Hatch>
            {scene === "hatch" ? (
              <>
                <LeftButton onClick={() => setScene("helm", "left")}>
                  Left
                </LeftButton>
              </>
            ) : null}

            <Floor onClick={handleClick} className={`floor`}>
              {scene === "hatch" ? <>{children}</> : null}
            </Floor>
            {
              scene === "hatch" && displayEvents()
            }

          </Hatch>
        </Inner>
      </Container>
    </>
  );
};

export default Stage;
