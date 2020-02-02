import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  background-color: red;
  height: 20px;
  width: 350px;
`;

const Filler = styled.div`
  height: 100%;
  transition: width 0.2s ease-in;
  background-color: black;
  ${({ progress }) => `
    width: ${progress}%;
  `};
`;

type ProgressBarProps = {
    progress: number;
    style?: any;
};

const ProgressBar = ({ progress, style }: ProgressBarProps) => {
    let fixedProgress = progress;

    if (fixedProgress <= 0) {
        fixedProgress = 0;
    } else if (fixedProgress >= 100) {
        fixedProgress = 100;
    } else {
        fixedProgress = progress;
    }
    return (
        <Bar style={style}>
            <Filler progress={fixedProgress} />
        </Bar>
    );
};


export default ProgressBar;
