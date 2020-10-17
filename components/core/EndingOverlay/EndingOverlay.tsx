import React, { useEffect } from 'react';
import styled from 'styled-components';

import {Ending1, Ending2, Ending3} from './ending-captions';

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

type OverlayProps = {
    typeEnding: number;
    language: string;
};

const Modal = ({typeEnding, language}: OverlayProps) => {
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
                    <Ending1 language={language}/>
                )
            }

            {/*  Up the hatch, love meter high */}
            {
                typeEnding === 2 && (
                    <Ending2 language={language}/>
                )
            }

            {/* Breaking the glass, bleeding out */}
            {
                typeEnding === 3 && (
                    <Ending3 language={language}/>
                )
            }
        </OverlayModal>
    );
};

export default Modal;
