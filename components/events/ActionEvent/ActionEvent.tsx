import React from 'react';
import Event from '../Event';

type ActionEventState = {
    x: number;
    y: number;
    activation: (event: any) => void,
    style?: any;
}

const ActionEvent = ({ x, y, style, activation }: ActionEventState) => {
    return (<Event x={x} y={y} activation={activation} style={style} />)

}
export default ActionEvent;