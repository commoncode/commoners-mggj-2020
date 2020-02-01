import React from 'react';
import { Container } from "./Event.styles";

const Event = (state) =>
    <Container
        x={state.x}
        y={state.y}
        onClick={state.activation}
        style={state.style}
    />


export default Event;