import React, { useRef, useEffect } from 'react';

import Event from '../Event';
import ActionCaption from '../../captions/ActionCaption';
import useActionCaption from "../../captions/ActionCaption/useActionCaption";

type WrenchProps = {
  x: number;
  y: number;
  activation: () => void;
  grab?: () => void;
  put?: () => void;
}

const Wrench = ({ x, y, activation, grab, put }: WrenchProps) => {
  const option = useActionCaption();
  const eventRef = useRef(null);

  const handleClickInside = event => {
    if (
      eventRef &&
      eventRef.current &&
      eventRef.current.contains(event.target) &&
      !option.show
    ) {
      option.setShow(true);
    }
    else {
      option.setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickInside, true);

    return () => {
      document.removeEventListener('click', handleClickInside, true);
    };
  }, []);

  return (
    <>
      <Event
        x={x}
        y={y}
        ref={eventRef}
        activation={(event) => {
          option.setShow(!option.show);
          activation();
        }}
      />
      <ActionCaption x={x + 20} y={y - 20} activation={() => { put && put() }} isToggled={option.show}>Put back</ActionCaption>
      <ActionCaption x={x - 50} y={y + 40} activation={() => { grab && grab() }} isToggled={option.show}>Grab</ActionCaption>
    </>
  )
}

export default Wrench;