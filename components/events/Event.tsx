import React, { useState, useRef, useEffect } from 'react';
import { Container } from "./Event.styles";

type EventState = {
    activation: () => {};
    position: {
        scene: "kitchen" | "bedroom" | "helm" | "hatch" | "ending";
        x: number;
        y: number;
    };
    display: number; // display the event until reach some ammount of time
    status: "display" | "hidden";
}

const Event = (state: EventState) => {

    return (<>
        {
            state.status === "display" && state.display > 0 && (
                <Container
                    x={state.position.x}
                    y={state.position.y}
                >
                    Player
                </Container>
            )
        }
    </>);
}


export default Event;