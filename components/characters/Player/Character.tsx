import cx from "classnames";
import styled from "styled-components";

type CharacterType = {
  expression: "happy" | "sad" | "surprised";
  walking: boolean;
};

const Svg = styled.svg`
  @keyframes walkin {
    0% {
      transform: translate(0, 0);
    }

    50% {
      transform: translate(0, -40px);
    }

    100% {
      transform: translate(0, 0);
    }
  }

  &.walking {
    .left-leg {
      animation-duration: 500ms;
      animation-name: walkin;
      animation-iteration-count: infinite;
    }

    .right-leg {
      animation-duration: 500ms;
      animation-name: walkin;
      animation-delay: 250ms;
      animation-iteration-count: infinite;
    }
  }
`;

const Character = ({ expression, walking }: CharacterType) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 404 554"
    className={cx([walking ? "walking" : null])}
  >
    <g className={"left-leg"}>
      {/** Left Leg */}
      <path
        fill="#073931"
        d="M149 486.89c3-4.73 4.75-9.27 3.94-14.87a2.48 2.48 0 00-.92-1.68 11.46 11.46 0 00-6.26-8.32c-6.8-3.27-13.65-.11-18.26 5a2.45 2.45 0 00-1.81 1.51 95.93 95.93 0 00-1.69 76.69 3.24 3.24 0 003.47 2 4.63 4.63 0 001.56.76 5.25 5.25 0 002.43 0 9.4 9.4 0 003.81-.28 3 3 0 001.06-.57 2.8 2.8 0 002.08-.87 6.31 6.31 0 001.75-6.78 2.8 2.8 0 00-1.42-1.76c-.89-11.22-1.27-22.67 1.68-33.56 1.77-6.46 5.03-11.66 8.58-17.27z"
      />
      {/** Left Foot */}
      <path
        fill="#073931"
        d="M140.88 544.14a2.64 2.64 0 000-1.66c1.82-12.77-11.38-21.8-23.22-21.69-14.15.12-25.93 11.16-25.69 25.52a3 3 0 003 3h5.43a2.85 2.85 0 00.42 0h14.66a2.4 2.4 0 00.28 0h23.18c2.95.07 3.61-3.56 1.94-5.17z"
      />
    </g>

    {/** Left Arm */}
    <g>
      <path
        fill="#18b8a1"
        stroke="#073931"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M74.49 433a11.82 11.82 0 014-2.39c-2.75-20.53-.35-42.23 10.38-60.17A67.34 67.34 0 01152 338a3.16 3.16 0 012.85 2.46 11.65 11.65 0 013 7.45 12 12 0 01-2.29 10.28 2.47 2.47 0 01-2 1.85c-16.29 3.83-34.39 8.05-46.5 20.46-11.29 11.58-15 29-15.61 45.28a3 3 0 01.35 1.28l.08 2.31a8.2 8.2 0 013.61 2.63 8.71 8.71 0 01.8 1.24 8.94 8.94 0 011.65 7.28c0 .34-.1.69-.17 1a8.83 8.83 0 01-8.91 7.17A14.69 14.69 0 0176.37 447c-4.46-3.11-6.06-9.94-1.88-14z"
      />
      <path
        fill="#073931"
        d="M96.24 435.76a5.1 5.1 0 00-1.76-1.87 2.68 2.68 0 00.18-.28 2 2 0 00-.86-2.69 17.64 17.64 0 00-13.73-.09 1.64 1.64 0 00-1.36-.07 2.26 2.26 0 00-1.36 1.52 1.91 1.91 0 00-.65 1 9.08 9.08 0 00-2.27 10.15 7.63 7.63 0 003.95 4 1.86 1.86 0 001.12.4 6.49 6.49 0 001.31.2c.31.13.63.24 1 .35a7.52 7.52 0 005.22.57 11.74 11.74 0 005.16-1.71A7 7 0 0094 446a6.07 6.07 0 001.48-2.12 9.13 9.13 0 001-2.28 6.91 6.91 0 00.19-1 6.54 6.54 0 00-.43-4.84z"
      />
    </g>

    <g className={"right-leg"}>
      {/** Right Leg */}
      <path
        fill="#073931"
        d="M298 488.72c-3.11-4.62-5.07-9.1-4.45-14.73a2.47 2.47 0 01.86-1.71 11.48 11.48 0 016-8.53c6.69-3.51 13.64-.58 18.43 4.38a2.42 2.42 0 011.86 1.45 95.92 95.92 0 014.29 76.56 3.23 3.23 0 01-3.39 2.08 4.69 4.69 0 01-1.6.78 5.44 5.44 0 01-2.44.13 9.31 9.31 0 01-3.81-.15 3 3 0 01-1.08-.53 2.77 2.77 0 01-2.11-.8 6.31 6.31 0 01-2-6.71 2.82 2.82 0 011.36-1.81c.5-11.24.48-22.7-2.85-33.48-1.97-6.37-5.41-11.45-9.07-16.93z"
      />
      {/** Right Foot */}
      <path
        fill="#073931"
        d="M308 545.66a2.64 2.64 0 010-1.67c-2.26-12.7 10.61-22.18 22.45-22.49 14.14-.37 26.3 10.25 26.57 24.62a3 3 0 01-2.9 3.1l-5.43.21a1.85 1.85 0 01-.42.06l-8.76.31-5.89.23h-.28l-23.16.81c-2.97.09-3.76-3.52-2.18-5.18z"
      />
    </g>

    {/** Right Arm */}
    <g>
      <path
        fill="#18b8a1"
        stroke="#073931"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M359.37 413a11.71 11.71 0 00-4.38-1.42c-2-20.61-9.33-41.19-23.88-56.2a67.36 67.36 0 00-68.88-17.09 3.17 3.17 0 00-2.21 3 11.58 11.58 0 00-1.18 7.92 11.88 11.88 0 004.58 9.48 2.46 2.46 0 002.35 1.36c16.73 0 35.32 0 50 9.27 13.64 8.68 21.21 24.83 25.56 40.51a2.92 2.92 0 000 1.32l.45 2.27a8.14 8.14 0 00-3 3.35 9.15 9.15 0 00-.5 1.38 9 9 0 00.06 7.47c.12.33.26.65.41 1a8.81 8.81 0 0010.25 4.96 14.68 14.68 0 0011.77-4.51c3.61-4.07 3.6-11.07-1.4-14.07z"
      />
      <path
        fill="#073931"
        d="M360.11 415.84a8.23 8.23 0 00-3.46-2.48 1.71 1.71 0 00-.5-.1 2 2 0 00-2.28-.43 17.24 17.24 0 01-5.29 1.19H347.44c-.48 0-1 0-1.44-.09s-1-.12-1.42-.2l-.37-.08c-.24-.05-.47-.11-.71-.18a2 2 0 00-2.57 1.19 2.22 2.22 0 00.39 2 5.46 5.46 0 00-2.69 4.9 7.59 7.59 0 00.12 1.08 6.74 6.74 0 000 3.34 6.14 6.14 0 002.11 3.23c1.55 2.31 4.24 3 6.92 2.88a17.41 17.41 0 008.61-2.75l.21-.08a5.82 5.82 0 001.34-.49 11 11 0 004.1-6.11 8.87 8.87 0 00-1.93-6.82z"
      />
    </g>
    <path
      fill="#18b8a1"
      stroke="#183934"
      strokeMiterlimit="10"
      strokeWidth="4"
      d="M328.62 416c-6.14-31.88-68-98.69-101.5-89.71-10.78 5-22.35 3.54-33.29-.08-36.77-7.21-57.54 30.79-73.34 57.57-32.23 47.89-11.72 96.85 48.74 94.4 37.51-3.19 74.63-17.37 112.41-7.33 41.13 14.46 58.2-18.73 46.98-54.85z"
    />
    <path
      fill="#fbe5d5"
      stroke="#e4cfb6"
      strokeMiterlimit="10"
      strokeWidth="3"
      d="M398.68 192.11c-.78-8.15-4.63-17.73-11-18.1-5.9-.34-11.59 8.17-9.28 16.62a4.53 4.53 0 001.12 2.06v1.22a32.83 32.83 0 01-.85 5.11 2.68 2.68 0 01-.07.27c-.17.65-.36 1.29-.57 1.93a6.15 6.15 0 000 3.7 5.67 5.67 0 00-.64 5.18c2.56 7.41 9.19 9.77 14.22 6.17 5.98-4.33 7.95-15.15 7.07-24.16zM42.37 170.87c-.87-4.45-2.71-9.3-7.78-10.1-.18 0-.35 0-.52-.05-2.67-2.49-6.85-1.72-9.74.51-8.08 6.22-9 19.34-4.51 27.83 2.07 3.9 5.84 7.71 10.66 6.53a7.36 7.36 0 002.73-1.31 12.78 12.78 0 008.81-7.2c2.29-5.08 1.39-10.96.35-16.21z"
    />
    <path
      fill="#fbe5d5"
      stroke="#e4cfb6"
      strokeMiterlimit="10"
      strokeWidth="4"
      d="M386.94 185.83c-1.71-23-10.49-43.35-24.94-61.18-26.92-33.21-69.85-48.37-110.26-57.23-18.9-4.14-38.6-6.93-58.16-7-28.17-2.49-57.88-.85-84.65 8.82-27.51 10-51.73 27.7-66.22 53.53-10.45 18.6-14.71 39.56-11.79 60.09a129.76 129.76 0 0025.13 77.44c5.44 10.12 12 19.53 21.13 26.82.12.1.24.18.37.27 19.19 20.39 45.28 32.26 73 37.82a359.56 359.56 0 0041.18 5.54c68.67 12.16 146-17.85 180.17-80.31 10.63-19.51 16.7-42.28 15.04-64.61z"
    />
    <path
      fill="#f6a7a5"
      d="M125.21 190c-.69-.48-1.43-.94-2.2-1.39a26.78 26.78 0 00-12.09-6.91c-5.42-2.11-11.4-2.36-16.47.24-12 .37-20.41 12.92-22.23 24.53-2.48 15.89 8.81 28 22.83 33.61 13.32 5.34 30.32 2.49 37.35-11.18 6.6-12.9 5.26-30.34-7.19-38.9zm-10 44.73c.22-.19.42-.39.63-.58.38 0 .76-.07 1.13-.12a17.9 17.9 0 01-1.81.68zM347.37 202.38c-6.27-6.29-14.59-8.95-23.36-8.91a29 29 0 00-11.13 2 26.25 26.25 0 00-18.47 15.33c-6.36 14.84 1.45 29.79 14.32 37.91 13.25 8.36 32.64 11.85 43.42-2.06 10.11-13 6.4-33.06-4.78-44.27z"
    />
    {/** Mouth Happy */}
    {expression === "happy" ? (
      <path d="M229.39 267.49c-3.54-3.74-8.87-5.66-13.87-4-3.42 1.14-5.93 3.95-9.41 5a15.14 15.14 0 01-10.52-.71c-5.4-2.45-10.08-8.44-16.48-4.46-5.35 3.31-5.47 9.43-4.23 14.92a3.4 3.4 0 000 1.7 38.76 38.76 0 0022.26 25.43c10 4.27 23.84 4.56 31.94-3.86 7.6-7.88 7.86-26.06.31-34.02z" />
    ) : null}

    {/** Mouth Sad */}
    {expression === "sad" ? (
      <path d="M227.63 259c-8.35-8.18-22.14-7.49-32-2.91a38.74 38.74 0 00-21.49 26.07 3.36 3.36 0 000 1.7c-1.08 5.52-.77 11.63 4.66 14.79 6.52 3.79 11-2.34 16.35-4.95a15.17 15.17 0 0110.5-1c3.5.92 6.1 3.65 9.55 4.69 5 1.52 10.31-.56 13.74-4.4 7.27-8.16 6.47-26.32-1.31-33.99z" />
    ) : null}

    {/** Mouth Surprised */}
    {expression === "surprised" ? (
      <path d="M207.56 277.1a6.76 6.76 0 00-.69-.29 7.07 7.07 0 00-6.66-.07 20.72 20.72 0 00-11.16 17.64c-.07.49-.14 1-.17 1.48-.62 9.11 7 17.66 16.09 18.22s17.06-6.76 18-15.6c1.03-10.07-7.07-17.48-15.41-21.38z" />
    ) : null}

    <path
      fill="#f66b67"
      stroke="#f62f2a"
      strokeMiterlimit="10"
      strokeWidth="4"
      d="M353.29 238.29c-3.43-9.43-15.92-13.16-25.68-13.63-5.79-.28-5.78 8.72 0 9 5.45.26 13.8 1.32 16.75 6.75a3.91 3.91 0 00.87 2.44c1.19 6.66-6.8 13-12.2 15.17-15.38 6.14-31-2.19-43.37-11.09-5.76-4.17-11.36-8.78-17.15-13-1.4-1.09-2.83-2.1-4.31-3-6.43-4.4-13.22-8.17-20.85-10.3-13.26-3.69-28.51-1.62-38.34 8.59a5.56 5.56 0 00-.62.8 39.89 39.89 0 00-15.92-9.16 7.72 7.72 0 00-6.47-1.62 89.4 89.4 0 00-17.89-1.42 111.67 111.67 0 00-50.7 12.9c-13.57 7.17-28 20.63-44.46 18.92a22.84 22.84 0 01-7-1.92 12.53 12.53 0 00-2.31-1.82 6.47 6.47 0 00-2.25-.87 24.21 24.21 0 01-6.14-6.73c-1.91-3.14-3.43-7-3-10.79.34-3.11 3.86-8.62 7.52-5.36 4.31 3.85 10.7-2.5 6.36-6.36a13 13 0 00-15.57-1.48c-5.62 3.28-7.76 10-7.23 16.19 0 .21.06.41.08.61a4.54 4.54 0 00-.54 3.1c2.57 15.15 6.61 29.34 18.87 39.51 10.58 8.77 23.89 13.58 37.18 16.43 30 6.42 64.44 6.48 89.45-13.67a61.72 61.72 0 0017.82-22.83 88.72 88.72 0 0055.31 51.62c30.14 9.71 68.66 4.28 88.08-22.87 8.33-11.83 14.42-32.01 3.71-44.11zm-264.07 40c2.49.6 5.37 1.23 8.37 1.69a7 7 0 00.39.83c-2.98-.72-5.89-1.56-8.76-2.52z"
    />
    <path
      fill="#f62f2a"
      d="M348.47 235.91c-4.17-5.43-10.86-9.21-17.81-9a18 18 0 00-4.94.8c-1.84.56-1.06 3.46.8 2.89 6.13-1.87 12.68.37 17.27 4.65-1.08.24-1.87 1.56-.8 2.44 4.41 3.6 3.55 10.16 1.75 14.9a26.79 26.79 0 01-10.45 12.78c-11.25 7.25-25.4 4-36.23-2.4-11.66-6.9-20.94-17.06-31.84-25-9.86-7.19-21.53-13.22-34-13.11-10.73.1-22 4.64-28 13.79-6.5-7-16.18-10.13-25.67-10.29-12.8-.23-24.84 5.13-36.25 10.32a263.84 263.84 0 01-39.72 14.75c-12 3.28-26.36 6.52-38.16.63a24.45 24.45 0 01-12.49-15.72c-.16-1-.29-2-.4-3a14.83 14.83 0 012.13-8.47 1.49 1.49 0 00-1.37-2.23 10.66 10.66 0 012.76-3c1.53-1.13 0-3.74-1.52-2.59-10.44 7.73-6.33 23.61-.67 33 7 11.58 18.65 19.31 31.24 23.71a107.67 107.67 0 0021.42 4.84 118.3 118.3 0 0022.17 1 77.06 77.06 0 0021.58-4.17 87 87 0 0017.78-9.16c11.95-7.74 23.14-17.3 36.83-21.81a1.3 1.3 0 00.74.36c13.17 2.13 23.88 10.41 33.7 18.92 10 8.69 19.85 18.3 32.06 23.92 15.6 7.19 33.39 5.8 49.14-.24 14.6-5.6 29.44-15.58 33-31.84 1.61-7.51.63-15.58-4.05-21.67zm-116.62-8.09c12.84-.23 24.62 6.44 34.56 14 11 8.3 20.5 18.78 32.82 25.23 11.34 5.94 25.67 8.14 36.88.71a30.24 30.24 0 002.85-2.18 37.92 37.92 0 01-2.69 3 37.33 37.33 0 01-32.74 10.11 38.87 38.87 0 01-16.29-7.14c-4.88-3.6-9.06-8.06-13.29-12.39a96.43 96.43 0 00-13.42-11.95 63.59 63.59 0 00-17-8.37c-11.28-3.61-25.21-4.8-36.2.57 5.54-7.67 15.21-11.41 24.52-11.59zm-60.35 33.7a135.16 135.16 0 01-15.87 9.77 67.74 67.74 0 01-19.79 6.29c-13.81 2.2-28.5.93-42.06-2.29a72.88 72.88 0 01-23.93-10.08c6.83 2.21 14.45 2.64 21.42 3 13.12.73 26.57.4 39.29-3.25a73.6 73.6 0 0017.87-7.91c5.61-3.4 10.92-7.27 16.63-10.5 9.93-5.63 24.34-9.71 34.12-1.75-10.01 4.11-18.82 10.6-27.68 16.72zm30.87-17.87c-8.19-7.69-20.68-7.37-30.6-3.59-12 4.57-21.6 13.75-33.34 18.95-11.91 5.28-25.16 6.67-38.07 6.55a184.39 184.39 0 01-19.23-1.11c-5.83-.66-11.82-1.89-16.87-5a23.29 23.29 0 01-6.93-6.68c9.43 8.41 23.13 8.36 34.89 6.18a171.67 171.67 0 0020.3-5.33q10.32-3.26 20.3-7.47c12.55-5.29 24.75-12.21 38.37-14.32 11-1.71 24 .75 31.49 9.57a1.49 1.49 0 00.07 1.14 1.62 1.62 0 000 1zm147.56 11.41c-2.58 15.76-16.67 25.61-30.58 31.07-15 5.87-32.16 7.72-47.15.92-11.65-5.29-21-14.27-30.58-22.58-9.37-8.18-19.42-16.42-31.66-19.73-1.4-.38-2.83-.68-4.27-.92v-.06c10.52-6.82 24.78-5.87 36.29-2.35a60.88 60.88 0 0117.38 8.59c5 3.56 9.33 8 13.61 12.4s8.66 8.84 13.73 12.39a40.58 40.58 0 0050.75-3.23A41.65 41.65 0 00348 255.8a40 40 0 002.13-7.72 25.15 25.15 0 01-.2 6.98z"
    />
    <g>
      <path
        fill="#e4cfb6"
        d="M224 209.41c.64 8.17-9.14 12.61-16 12.78a15.69 15.69 0 01-16-12.26c-1.18-5-8.73-2.33-7.55 2.65 2.72 11.51 14.17 18.66 25.73 17.49C221 229 232.94 221 232 208.87c-.41-5.13-8.39-4.6-8 .54z"
      />
    </g>

    {/** Eye Happy */}
    {expression === "happy" || expression === "surprised" ? (
      <g>
        <path d="M177.11 191c-1.61-19.76-18.91-37.43-39.57-35.6-14.54 1.23-31.54 13.74-34.25 28.78a4.1 4.1 0 01-.54-.79c-2.06-4-8.11-.47-6 3.53a10.5 10.5 0 006.57 5.33c.11.62.25 1.23.41 1.84a10 10 0 01-2.9-.33c-4.37-1.12-6.23 5.63-1.87 6.75a17.12 17.12 0 009-.08 9.39 9.39 0 008.52-.12c4.37-2.56 4.85-7.39 3-11.63.86 2 .68-.88 1-1.8a18.35 18.35 0 011.59-3.67 21.57 21.57 0 014.77-5.78 20.49 20.49 0 0113.54-5.21c9.88.23 19 8.86 19.8 18.73.82 10.83 17.82 10.93 16.93.05zM321 196.62a11.15 11.15 0 01-5.11 1.67 10.26 10.26 0 00.67-2 9.8 9.8 0 008.17-4.67c2.31-3.88-3.74-7.4-6-3.53a2.38 2.38 0 01-1.82 1.19c-1.35-16.57-16-29.86-32.83-30.35-18.52-.54-39.34 15.27-34.33 35.41 2.64 10.61 19 6.11 16.39-4.52-2.36-9.49 12.26-14.67 19.4-13.81 9.4 1.13 15.21 9.67 14.33 18.72-.37 3.91 3 7.33 6.62 8.25a17.75 17.75 0 0018.08-.33c3.77-2.34.26-8.4-3.57-6.03z" />
      </g>
    ) : null}

    {/** Eye Sad */}
    {expression === "sad" ? (
      <g>
        <path d="M314.67 186.45c-2.55-4.35-7.39-4.87-11.63-3-13.83 6-29.37 5.46-43.26.09-4.28-1.65-9.32 1.83-10.45 5.94-1.32 4.8 1.63 8.8 5.93 10.46 18.41 7.11 38.4 5.93 56.36-1.81 4.22-1.86 5.17-8.06 3.05-11.68zM164.5 179.83c-6.37 5.34-14.68 5.77-22.64 5.15-4.27-.34-8.52-1-12.73-1.71a23.4 23.4 0 01-4.67-1.21c-1.26-.51-2.51-2.13-2.06-.61-1.31-4.4-5-7.72-9.9-6.83-4.14.76-8.14 5.48-6.82 9.9 4.14 13.92 19.13 15.74 31.67 17.11 13.42 1.46 27.37.21 38.08-8.77 8.39-7.04-2.53-20.07-10.93-13.03z" />
      </g>
    ) : null}

    <g>
      <path
        fill="#559fc1"
        stroke="#3f758e"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M297.83 43.52a104.73 104.73 0 00-11.09-11.4 50.76 50.76 0 00-19.39-13.84 116.21 116.21 0 00-19.11-8.68 111.19 111.19 0 00-39.65-6.24 95 95 0 00-37 8.56A71.34 71.34 0 00143 35.24c-.5.71-1 1.43-1.44 2.16a10.73 10.73 0 00-1.9 1.79 13.73 13.73 0 00-3.1 7.55c-.34 2.87 2.77 5.62 5.5 5.5a1.81 1.81 0 00.23 0 4.52 4.52 0 006.5-2.24c0-.1.1-.19.14-.29a417.87 417.87 0 01148 21.69 4.67 4.67 0 005-1 5 5 0 003.18-2.55 9.39 9.39 0 001.26-4.78 1.43 1.43 0 00.25-.88c-.4-7.19-4.33-13.31-8.79-18.67z"
      />
      <path
        fill="#559fc1"
        stroke="#3f758e"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M328.05 76.87c-8.77-12.22-27.41-13.71-40.89-16.51-17.72-3.67-35.52-7-53.42-9.72-19.86-3-39.84-5.36-59.89-6.65q-15.45-1-30.95-1.12h-2.33a4.38 4.38 0 00-1.93-.22c-10.07 1-24.36 7.73-21.55 20.15a15.18 15.18 0 008.59 10.83 14.14 14.14 0 009.08 4c7.79.59 16-.79 23.82-1.07q12.3-.45 24.63-.3c33 .47 66.19 4.76 97.12 16.66 7.61 2.92 14.75 6.73 22.19 10 6.08 2.67 13.06 4.86 19.57 2.35 11.62-4.43 12.53-19.27 5.96-28.4zm-29.43 14.3l.39-.11c.59.41 1.19.8 1.8 1.16-.73-.35-1.46-.71-2.19-1.05z"
      />
      <path
        fill="#559fc1"
        d="M307.61 88.87a8.43 8.43 0 01-3.57-.61 10.77 10.77 0 00-2.51-1.59 1.51 1.51 0 00-1.93.38l-.05.09c-.44-.35-.87-.71-1.28-1.09a1.54 1.54 0 00-2.12 0 1.62 1.62 0 00-.29.43l-7-5.83a1.55 1.55 0 00-2.12 0 1.5 1.5 0 000 2.12l2.73 2.28a1.4 1.4 0 00-.45 2.11 1.32 1.32 0 00-.51.51 1.53 1.53 0 00.54 2.06c.46.32.95.61 1.44.9a1.46 1.46 0 001.08 1.43l3.44.77 1.08.47 1.15.53a2 2 0 00.33.16 1.67 1.67 0 002 .37c.65.31 1.3.61 2 .89a1 1 0 00.57.07 1.51 1.51 0 001.8-2.28c.33.13.66.26 1 .37a1.49 1.49 0 001.87-1.55h.86a1.5 1.5 0 000-3z"
      />
      <path
        fill="#3f758e"
        d="M125.84 46.31a34.39 34.39 0 00-.51 27.38 1.55 1.55 0 001.84 1 1.51 1.51 0 001-1.85 31.53 31.53 0 01.21-25.07c.84-1.7-1.75-3.22-2.54-1.46zM146.62 74a66.94 66.94 0 01-2.51-29.49 1.57 1.57 0 00-1.05-1.85 1.51 1.51 0 00-1.84 1.05A70.34 70.34 0 00144.45 77a1.51 1.51 0 003-.4c0-.4.09-.81.13-1.22a1.19 1.19 0 00-.96-1.38zM166.33 72.24a70.59 70.59 0 01-3.51-26.81c.13-1.93-2.87-1.92-3 0a72.59 72.59 0 004.72 30.7 1.51 1.51 0 003-.4v-2.07a1.37 1.37 0 00-1.21-1.42zM187.74 73.82a1.7 1.7 0 00-.24-.09c-.1-.32-.32-.74-.37-.87-.22-.58-.43-1.17-.64-1.75q-.62-1.76-1.14-3.54-1-3.46-1.72-7a74.82 74.82 0 01-1.37-14.63A1.38 1.38 0 00181 44.5a1.48 1.48 0 00-.65-.14 1.52 1.52 0 00-1.07 2.55 77.55 77.55 0 002.49 19 64.75 64.75 0 003.15 9.49c.54 1.23 1.92 2.38 3.2 1.26a1.77 1.77 0 00-.38-2.84zM203.74 73.11A46 46 0 01202.3 47c.45-1.87-2.44-2.67-2.89-.79a49.32 49.32 0 002.59 30.7c.62 1.47 2.75.58 2.8-.76l.06-1.62a1.32 1.32 0 00-1.12-1.42zM223.59 75.7A119.06 119.06 0 00220 48.61c-.47-1.87-3.36-1.08-2.89.8a116.67 116.67 0 013.5 29.36c0 1.66 2.57 2.08 2.94.4.16-.69.31-1.37.46-2a1.42 1.42 0 00-.42-1.47zM239.66 66.89a46.56 46.56 0 00-1.16-7c-.31-1.23-.68-2.45-1.1-3.65-.2-.57-.41-1.13-.63-1.69-.11-.27-.67-1.22-.51-1.51a1.5 1.5 0 00-2.59-1.52c-1.11 2 .42 4.23 1.06 6.15a41.7 41.7 0 011.66 7 40.41 40.41 0 01.41 7.21 28.48 28.48 0 01-.59 6.08 1.25 1.25 0 00-.6.82 1.73 1.73 0 00.48 1.73 1.53 1.53 0 001.81.23c1-.64 1.08-1.57 1.27-2.66s.37-2.48.49-3.74a43.42 43.42 0 000-7.45zM254.68 53.28c-.79-1.76-3.38-.24-2.59 1.51a43.24 43.24 0 013.08 26.37 2.61 2.61 0 00-.27.19 2.56 2.56 0 00.36 4.08 1.52 1.52 0 002.21-.9 46.39 46.39 0 00-2.79-31.25zM275.65 57.61c-.54-1.85-3.44-1.06-2.89.8A71.85 71.85 0 01275 89a1.38 1.38 0 00-.25.19 2.16 2.16 0 001 3.66 1.51 1.51 0 001.84-1 75.17 75.17 0 00-1.94-34.24zM295.16 96.24c1.4-4.66 1.19-9.77 1-14.56A120.37 120.37 0 00294 63.33c-.37-1.9-3.26-1.1-2.89.79a115.34 115.34 0 012 17.08c.19 4.71.62 10.15-1 14.73a4.31 4.31 0 00-.63 1.56c-.29 1.55 2 2.82 2.74 1.16l.15-.36c.14-.32.27-.65.39-1a1.55 1.55 0 00.4-1.05zM311.75 86a70.92 70.92 0 00-4.28-20.39c-.64-1.81-3.54-1-2.9.79a69.43 69.43 0 014.13 18.7 41.92 41.92 0 01-.38 9.23 36 36 0 01-1 4.6c-.11.38-.23.77-.35 1.15a1.23 1.23 0 00-1.56 1l-.4 2.5a1.51 1.51 0 002.5 1.46c2.22-2.26 3-5.85 3.55-8.85a44.49 44.49 0 00.69-10.19zM324.19 73.15c-.08-1.93-3.08-1.94-3 0 .4 9.88 3.92 21.19-2 30.14-1.07 1.62 1.53 3.12 2.59 1.51 6.3-9.52 2.84-21.14 2.41-31.65z"
      />
    </g>
  </Svg>
);

export default Character;
