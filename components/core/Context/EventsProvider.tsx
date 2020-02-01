import React from 'react';
import EventsContext from './EventsContext';

import Leak from "../../events/Leak";

interface State {
    events?: any;
    addEvent?: (newEvent: any) => void;
    removeEvent?: (newEvent: any) => void;
}

const LeakEvent = {
    component: Leak,
    position: {
        x: 300,
        y: 300,
        scene: "bedroom"
    },
    display: 30,
    status: "display"
};

class EventsProvider extends React.Component<State> {
    state = {
        events: [LeakEvent]
    };

    render() {
        return (
            <EventsContext.Provider
                value={{
                    events: this.state.events,
                    addEvent: newEvent => {
                        this.setState({
                            events: [
                                ...this.state.events,
                                newEvent
                            ]
                        });
                    },
                    removeEvent: () => {
                        const [_first, ...others] = this.state.events;
                        this.setState({ events: others });
                    }
                }}
            >
                {this.props.children}
            </EventsContext.Provider>
        );
    }
}

export default EventsProvider;