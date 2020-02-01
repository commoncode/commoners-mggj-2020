import React, { useState, useRef, useEffect } from 'react';
import { Container } from "./Event.styles";

const Event = (state) => {
    console.log(state)
    return (<>
        {
            // state.status === "display" && state.display > 0 && (
            <Container
                x={state.position.x}
                y={state.position.y}
            >
                Event
                </Container>
            // )
        }
    </>);
}


export default Event;