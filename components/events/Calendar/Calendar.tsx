import React, { useRef, useEffect } from "react";

import Event from "../Event";
import ActionCaption from "../../captions/ActionCaption";
import useActionCaption from "../../captions/ActionCaption/useActionCaption";
import useEvent from "../useEvent";

type CalendarProps = {
  x: number;
  y: number;
  activation: () => void;
  look?: () => void;
  admire?: () => void;
  style?: any;
};

const Calendar = ({ x, y, style, activation, look, admire }: CalendarProps) => {
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
          look && look();
        }}
        isToggled={showActions}
      >
        Look At Date
      </ActionCaption>
      <ActionCaption
        x={x - 50}
        y={y + 40}
        activation={() => {
          admire && admire();
        }}
        isToggled={showActions}
      >
        Admire Firefighter
      </ActionCaption>
    </>
  );
};

export default Calendar;
