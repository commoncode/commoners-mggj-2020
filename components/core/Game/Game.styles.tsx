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

        background: #72a8c1;
        font-family: 'Itim', cursive;


        /* To avoid selecting text on clicks and avoid triggering anything on text selected */
        /* iOS Safari */
        -webkit-touch-callout: none; 
        /* Safari */
        -webkit-user-select: none;
        /* Konqueror HTML */
        -khtml-user-select: none; 
        /* Old versions of Firefox */
        -moz-user-select: none; 
        /* Internet Explorer/Edge */
        -ms-user-select: none; 
        /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
        user-select: none;
    }
`;
