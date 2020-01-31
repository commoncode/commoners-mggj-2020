import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        padding: 0;
        margin: 0;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;
