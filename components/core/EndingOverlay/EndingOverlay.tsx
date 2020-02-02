import React, { useEffect } from 'react';
import styled from 'styled-components';

const OverlayModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 900000;
  overflow-y: auto;
  background-color: #74A8C0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

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


type OverlayProps = {
    typeEnding: number;
};

const Modal = ({ typeEnding }: OverlayProps) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <OverlayModal>
            {/* Up the hatch, love meter low */}
            {
                typeEnding === 1 && (
                    <Column>
                        <Text>Moustachio climbs up the hatch...</Text>
                        <Text>and closes it behind him.</Text>
                        <Text>Guess he really doesn't love you anymore</Text>
                        <Text>You die.</Text>
                    </Column>
                )

            }

            {/*  Up the hatch, love meter high */}
            {
                typeEnding === 2 && (
                    <Column>
                        <Text>Moustachio climbs up the hatch and you scramble out after him</Text>
                        <Text>Escaping certain death reminded him how much he loves you</Text>
                        <Text>You both live happily ever after on a tropical deserted island</Text>
                        <Text>Cute!</Text>
                    </Column>
                )
            }

            {/* Breaking the glass, bleeding out */}
            {
                typeEnding === 2 && (
                    <Column>
                        <Text>Punching the glass was a real dumb idea</Text>
                        <Text>You slice your hand open and bleed to death</Text>
                        <Text>Moustachio has to clean up the mess.</Text>
                        <Text>So now you're dead and single.</Text>
                    </Column>
                )
            }
        </OverlayModal>
    );
};

export default Modal;
