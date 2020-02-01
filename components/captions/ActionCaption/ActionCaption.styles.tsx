import styled, { css } from "styled-components";

type ContainerProps = {
    x: number;
    y: number;
    speed: number;
    isToggled: boolean;
};

const captionBase = css`
display: flex;
position: absolute;
align-items: center;

width: 5rem;

/* animation */
transition: visibility 0s, opacity 0.5s linear;
`
const isVisibleStyle = css`
visibility: 'visibility';
opacity: 1;
z-index: 500;
`

const isHiddenStyle = css`
visibility: 'hidden';
opacity: 0;
pointer-events:none;
`

const Inner = styled.div`
color: yellow;
`
export const Container = styled.div<ContainerProps>`
${captionBase}
${Inner}
${({ isToggled }) => isToggled ? isVisibleStyle : isHiddenStyle}
left: ${({ x }) => x}px;
top: ${({ y }) => y}px;
`