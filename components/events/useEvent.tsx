import { useEffect, useRef, useState } from 'react';

const useEvent = ({ activation, remainingTime }) => {
    const [show, setShow] = useState(false);
    const [actualTime, setActualTime] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            const time = actualTime + 1000;
            setActualTime(time);
            if (time <= remainingTime) {
                activateAndHide();
            }
        }, 1000)

        return () => {
            clearInterval(intervalRef.current);
        }
    })

    const activateAndHide = () => {
        // clear event from the map
        clearInterval(intervalRef.current);
        setShow(false)

        // activate a function
        activation();
    };

    return { show, setShow, activateAndHide };
};

export default useEvent;