import React from "react";

import Event from "../Event";
import ActionCaption from "../../captions/ActionCaption";
import useEvent from "../useEvent";

type CookieProps = {
  x: number;
  y: number;
  activation: () => void;
  eat?: () => void;
  grab?: () => void;
};

const Cookie = ({ x, y, activation, eat, grab }: CookieProps) => {
  const { ref: eventRef, showActions, setShowActions } = useEvent();

  return (
    <>
      <Event
        x={x}
        y={y}
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
          eat && eat();
        }}
        isToggled={showActions}
      >
        Eat
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

export default Cookie;
