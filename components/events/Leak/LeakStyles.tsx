import styled from 'styled-components';


const Svg = styled.svg`
    position: absolute;
    left: ${({ x }) => x}px;
    top: ${({ y }) => y}px;
    z-index: 500;
    width: 200px;
    height: auto;
    padding: 0;
`;

export const Leak1 = ({ x, y }) => (
    <Svg
        x={x}
        y={y}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 345">
        <title>Artboard 1</title>
        <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_8" data-name="Layer 8">
                <path d="M97.66,4.84a4.84,4.84,0,0,0-.14-.51A5.67,5.67,0,0,0,95.33.88a5,5,0,0,0-5.68,0A6,6,0,0,0,87,5.4a1.7,1.7,0,0,0,0,1v.15a5.81,5.81,0,0,0,4,4.55,5.47,5.47,0,0,0,5.66-1.73A5,5,0,0,0,97.66,4.84Z"
                    style={{ fill: "#1d3642" }} />
            </g>
        </g>
        <g id="Layer_2-2" data-name="Layer 2">
            <g id="Layer_9" data-name="Layer 9">
                <path d="M236,345c.21-3.16-1.67-6.23-5.7-5.75.46,0-.54-1.21-1-1.92a13.31,13.31,0,0,0-3.2-3.45c-2.74-2-5.2-1.63-8.38-1.69-5.34-.11-9.78-4.77-14.2-7.28a26.09,26.09,0,0,0-17.64-3.25c-5.22.8-15.52,6-20.11,1.66-2.43-2.27-.34-5.23-.24-8.17a13.14,13.14,0,0,0-2.52-8.28c-3.25-4.62-8.83-6.91-14.14-8.22-6.35-1.57-14.1-2.13-21-4.14v-.06a22,22,0,0,1-.93-6.94c.13-6.56.54-11.89-4.91-16.49-4.73-4-8.85-8-11.85-13.22-.16-.79-.33-1.58-.51-2.38-1.81-7.55-5.28-14.55-6.66-22.12-.27-9.47,1.15-19,3.07-28.34,3.22-15.64,7.76-31.12,8.81-47.13a88,88,0,0,0-1.58-23.52,149.21,149.21,0,0,0-7-22.82C100.6,96.39,93.62,81.64,90.5,65.74a98.27,98.27,0,0,1,3.34-49.91c.66-2,1.4-4,2.2-5.92,1.2-2.92,0-.08,0-.08a6.24,6.24,0,0,0,0-5.76.52.52,0,0,0-.71-.15.48.48,0,0,0-.2.27A38.65,38.65,0,0,1,89.8,14.3c-.53.65-1,1.31-1.54,2l-.07.09v.05C75.8,33.35,76.38,56.57,81.54,76.16c6.73,25.61,20.75,49.26,21.74,76.24a97.51,97.51,0,0,1-6.54,38.71c-4.61,11.83-12.48,21.94-17.42,33.59a42,42,0,0,0-3.72,17.48c.15,6,1.76,11.85,3.21,17.68.41,3.42-.63,6.28-2.25,9.39-2.12,4.12-5.26,8.1-5.48,12.92-.13,2.92,1.13,5.43,1.77,8.22a16.4,16.4,0,0,1,.41,3.42c-5.83.46-11.59.17-16,4.92s-4.35,11.43-7.19,17a25.32,25.32,0,0,1-1.63,2.69c-.69-.19-1.38-.37-2.08-.49a33,33,0,0,0-10.55-.1A30.31,30.31,0,0,0,18.7,326.1,26.7,26.7,0,0,0,13.31,334c-1.69,3.65-3.09,6.37-7.57,6.26A5.39,5.39,0,0,0,0,345Z"
                    style={{
                        fill: "#559fc1",
                        opacity: 0.699999988079071,
                        isolation: "isolate"
                    }} />
            </g>
        </g>
    </Svg>
)
