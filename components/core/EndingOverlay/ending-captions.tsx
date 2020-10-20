import React from 'react'
import styled from 'styled-components'

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Text = styled.span`
    color: #020D18;
    font-size: 30px;
    font-weight: bold;
`;

export const Ending1 = ({language}) => {
    switch (language) {
        case "english":
            return (
                <Column>
                    <Text>Moustachio climbs up the hatch...</Text>
                    <Text>and closes it behind him.</Text>
                    <Text>Guess he really doesn't love you anymore</Text>
                    <Text>You die.</Text>
                </Column>
            )
        case "french":
            return (
                <Column>
                    <Text>Moustachio sort par la trappe du sous-marin...</Text>
                    <Text>et la referme derrière lui.</Text>
                    <Text>C'est la fin de votre histoire d'amour.</Text>
                    <Text>Vous mourrez seul.</Text>
                </Column>
            )
    }
}

export const Ending2 = ({language}) => {
    switch (language) {
        case "english":
            return (
                <Column>
                    <Text>Moustachio climbs up the hatch and you scramble out after him</Text>
                    <Text>Escaping certain death reminded him how much he loves you</Text>
                    <Text>You both live happily ever after on a tropical deserted island</Text>
                    <Text>Cute!</Text>
                </Column>
            )
        case "french":
            return (
                <Column>
                    <Text>Moustachio sort par la trappe du sous-marin et vous le suivez</Text>
                    <Text>Echapper une mort certaine lui rappelle à quel point il vous aime</Text>
                    <Text>Vous vivrez heureux ensemble sur une île tropicale déserte.</Text>
                </Column>
            )
    }
}

export const Ending3 = ({language}) => {
    switch (language) {
        case "english":
            return (
                <Column>
                    <Text>Punching the glass was a real dumb idea</Text>
                    <Text>You slice your hand open and bleed to death</Text>
                    <Text>Moustachio has to clean up the mess.</Text>
                    <Text>So now you're dead and single.</Text>
                </Column>
            )
        case "french":
            return (
                <Column>
                    <Text>Briser la glace avec votre poing était vraiment une idée stupide.</Text>
                    <Text>Vous vous videz de votre sang et Moustachio doit nettoyer derrière vous.</Text>
                    <Text>Vous êtes mort (et célibataire)</Text>
                </Column>
            )
    }
}
