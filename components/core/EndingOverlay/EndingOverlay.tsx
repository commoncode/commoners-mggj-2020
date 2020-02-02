import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const OverlayModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999999;
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
        </OverlayModal>
    );
};

export default Modal;
