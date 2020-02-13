import React, { useRef, useEffect } from "react";

import Event from "../Event";
import ActionCaption from "../../captions/ActionCaption";
import useActionCaption from "../../captions/ActionCaption/useActionCaption";
import useEvent from "../useEvent";

type FlowerProps = {
  x: number;
  y: number;
  style?: any;
  activation: () => void;
  grab?: () => void;
  put?: () => void;
};

const Flower = ({ x, y, style, activation, grab, put }: FlowerProps) => {
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
          put && put();
        }}
        isToggled={showActions}
      >
        Put back
      </ActionCaption>
      <ActionCaption
        x={x - 50}
        y={y + 40}
        activation={() => {
          grab && grab();
        }}
        isToggled={showActions}
      >
        Grab
      </ActionCaption>
    </>
  );
};

export default Flower;
