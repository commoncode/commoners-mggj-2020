import React, { useRef, useEffect } from "react";

import Event from "../Event";
import ActionCaption from "../../captions/ActionCaption";
import useActionCaption from "../../captions/ActionCaption/useActionCaption";
import useEvent from "../useEvent";

type EmergencyProps = {
  x: number;
  y: number;
  activation: () => void;
  punch?: () => void;
  breakWindow?: () => void;
  style?: any;
};

const Emergency = ({
  x,
  y,
  style,
  activation,
  punch,
  breakWindow
}: EmergencyProps) => {
  const { ref: eventRef, showActions, setShowActions } = useEvent();

  return (
    <>
      <Event
        x={x}
        y={y}
        style={style}
        ref={eventRef}
        activation={event => {
          setShowActions(!showActions);
          activation();
        }}
      />
      <ActionCaption
        x={x + 20}
        y={y - 20}
        activation={() => {
          punch && punch();
        }}
        isToggled={showActions}
      >
        Punch
      </ActionCaption>
      <ActionCaption
        x={x - 50}
        y={y + 40}
        activation={() => {
          breakWindow && breakWindow();
        }}
        isToggled={showActions}
      >
        Break
      </ActionCaption>
    </>
  );
};

export default Emergency;
