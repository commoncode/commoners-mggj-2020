import React from "react";

import Event from "../Event";
import ActionCaption from "../../captions/ActionCaption";
import { Leak1, Leak2 } from "./LeakStyles";
import useEvent from "../useEvent";

type LeakProps = {
  x: number;
  y: number;
  activation: () => void;
  repair?: () => void;
  yell?: () => void;
  panic?: () => void;
  isSecondVersion?: boolean;
};

const actions = [
  { x: -35, y: -80, caption: "Repair", action: "repair" },
  { x: 50, y: -20, caption: "Yell", action: "yell" },
  { x: -35, y: 40, caption: "PANIC!", action: "panic" }
  // { x: -140, y: -20, caption: "action 4" }
];

const Leak = (props: LeakProps) => {
  const { x, y, activation, isSecondVersion } = props;

  const {
    ref: eventRef,
    showActions,
    setShowActions,
    coordsActions,
    calcCoordsOnClick
  } = useEvent();
  return (
    <>
      <Event
        x={x}
        y={y}
        ref={eventRef}
        activation={e => {
          setShowActions(!showActions);
          calcCoordsOnClick(e);
          activation();
        }}
      />
      {!isSecondVersion ? (
        <Leak1 x={x - 50} y={y + 25} />
      ) : (
        <Leak2 x={x - 77} y={y + 25} style={{ width: "180px" }} />
      )}

      {actions.map(
        a =>
          props[a.action] && (
            <ActionCaption
              x={coordsActions.x + a.x}
              y={coordsActions.y + a.y}
              activation={props[a.action]}
              isToggled={showActions}
            >
              {a.caption}
            </ActionCaption>
          )
      )}
    </>
  );
};

export default Leak;
