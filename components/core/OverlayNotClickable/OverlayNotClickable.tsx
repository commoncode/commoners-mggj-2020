import React from 'react';
import { Container } from './OverlayNotClickable.styles';

type OverlayNotClickableProps = {
    isToggled?: boolean;
}

const OverlayNotClickable = ({ isToggled }: OverlayNotClickableProps) => (
    <>
        {
            isToggled && (<Container />)
        }
    </>
)

export default OverlayNotClickable;