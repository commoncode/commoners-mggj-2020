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

const Leak = ({
  x,
  y,
  activation,
  repair,
  yell,
  panic,
  isSecondVersion
}: LeakProps) => {
  const { ref: eventRef, showActions, setShowActions } = useEvent();
  return (
    <>
      <Event
        x={x}
        y={y}
        ref={eventRef}
        activation={() => {
          setShowActions(!showActions);
          activation();
        }}
      />
      {!isSecondVersion ? (
        <Leak1 x={x - 50} y={y + 25} />
      ) : (
        <Leak2 x={x - 77} y={y + 25} style={{ width: "180px" }} />
      )}

      {repair && (
        <ActionCaption
          x={x + 20}
          y={y - 20}
          activation={() => {
            repair();
            console.log("click repair");
          }}
          isToggled={showActions}
        >
          Repair
        </ActionCaption>
      )}
      {yell && (
        <ActionCaption
          x={x + 20}
          y={y + 80}
          activation={() => {
            yell();
            console.log("click yell");
          }}
          isToggled={showActions}
        >
          Yell
        </ActionCaption>
      )}
      {panic && (
        <ActionCaption
          x={x - 50}
          y={y + 40}
          activation={() => {
            panic();
            console.log("click PANIC");
          }}
          isToggled={showActions}
        >
          PANIC!
        </ActionCaption>
      )}
    </>
  );
};

export default Leak;
