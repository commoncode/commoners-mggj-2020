import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  background-color: white;
  height: 2.5rem;
  width: ${({ progress }) => progress === 100 ? 416 : 420}px;
  position: absolute;
  margin: auto;
  left: 50px;
  bottom: 40px;
  z-index: 900001;
  border-radius: 32px;
`;

const Filler = styled.div`
  height: 100%;
  transition: width 0.5s ease-in;
  background-color: pink;
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
        <Bar style={style} progress={progress}>
            <Filler progress={fixedProgress} />
        </Bar>
    );
};


export default ProgressBar;
