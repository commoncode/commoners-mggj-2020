import React from 'react';
import EventsContext from './EventsContext';

import Leak from "../../events/Leak";

type StageStateType = {
    events: any[];
    firstLoad: boolean;
}


interface Props {
}

interface State {
    bedroom: StageStateType;
    kitchen: StageStateType;
    hatch: StageStateType;
    helm: StageStateType;
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

class EventsProvider extends React.Component<Props, State> {
    state = {
        bedroom: {
            events: [],
            firstLoad: false,
        },
        kitchen: {
            events: [],
            firstLoad: false,
        },
        hatch: {
            events: [],
            firstLoad: false,
        },
        helm: {
            events: [],
            firstLoad: false,
        }
    };

    render() {
        return (
            <EventsContext.Provider
                value={{
                    bedroom: this.state.bedroom,
                    kitchen: this.state.kitchen,
                    hatch: this.state.hatch,
                    helm: this.state.helm,
                    init: (scene) => {
                        if (!this.state[scene].firstLoad) {
                            let initialEvents = []
                            if (scene === 'bedroom') {
                                initialEvents = [LeakEvent];
                            }

                            this.setState({
                                ...this.state,
                                [scene]: {
                                    events: initialEvents,
                                    firstLoad: true,
                                }
                            });
                        }
                    },
                    addEvent: (newEvent, scene: string) => {
                        this.setState({
                            ...this.state,
                            [scene]: {
                                ...this.state[scene],
                                events: [
                                    ...this.state[scene].events,
                                    newEvent
                                ]
                            }
                        });
                    },
                    removeEvent: (scene) => {
                        if (this.state[scene] && this.state[scene].events) {
                            const [_first, ...others] = this.state[scene].events;
                            this.setState({
                                ...this.state,
                                [scene]: {
                                    ...this.state[scene],
                                    events: [...others]
                                }
                            });
                        }
                    }
                }}
            >
                {this.props.children}
            </EventsContext.Provider>
        );
    }
}

export default EventsProvider;