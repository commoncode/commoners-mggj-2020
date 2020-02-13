import React from "react";

import Event from "../Event";
import ActionCaption from "../../captions/ActionCaption";
import useEvent from "../useEvent";

type InteractionProps = {
  x: number;
  y: number;
  activation: () => void;
  ask?: () => void;
  apologise?: () => void;
};

const Interaction = ({
  x,
  y,
  activation,
  ask,
  apologise
}: InteractionProps) => {
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
          ask && ask();
        }}
        isToggled={showActions}
      >
        Ask For Help
      </ActionCaption>
      <ActionCaption
        x={x - 50}
        y={y + 40}
        activation={() => {
          apologise && apologise();
        }}
        isToggled={showActions}
      >
        Apologise
      </ActionCaption>
    </>
  );
};

export default Interaction;
