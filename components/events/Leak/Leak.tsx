import React, { useRef, useEffect } from 'react';

import Event from '../Event';
import ActionCaption from '../../captions/ActionCaption';
import useActionCaption from "../../captions/ActionCaption/useActionCaption";
import { Leak1 } from './LeakStyles';

type LeakProps = {
    x: number;
    y: number;
    activation: () => void;
    repair: () => void;
    yell?: () => void;
    panic?: () => void;
}


const Leak = ({ x, y, activation, repair, yell, panic }: LeakProps) => {
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
                activation={() => {
                    option.setShow(!option.show);
                    activation();
                }}
            />
            <Leak1 x={x - 50} y={y + 25} />
            <ActionCaption x={x + 20} y={y - 20} activation={() => { repair(); console.log('click repair') }} isToggled={option.show}>Repair</ActionCaption>
            <ActionCaption x={x + 20} y={y + 80} activation={() => { yell && yell(); console.log('click yell') }} isToggled={option.show}>Yell</ActionCaption>
            <ActionCaption x={x - 50} y={y + 40} activation={() => { panic && panic(); console.log('click PANIC') }} isToggled={option.show}>PANIC!</ActionCaption>
        </>
    )

};

export default Leak;