import React from 'react';
import styled, {keyframes} from 'styled-components';

const kf = keyframes`
  0% {
    opacity: 0;
    height: 10%;
    top: 45%;
    left: 100%;
  }
  5% {
    opacity: 1;
    height: 10%;
    top: 45%;
    left: 100%;
    
  }
  10% {
    height: 150%;
    top: -25%;
    left: 100%;
    //width: inherit;
  }
  30% {
    height: 150%;
    top: -25%;
    left: 100%;
    //width: inherit;
  }
  70% {
    height: 150%;
    top: -25%;
    left: 0%;
  }
  90% {
    height: 150%;
    top: -25%;
    left: 0%;
  }
  95% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    height: 10%;
    top: 45%;
  }
`;
const Over = styled.div`
  animation: ${kf} 5s linear infinite;
  background-color: #0FF;
  box-shadow: 0px 0px 3px 1px  #00F;
  width: 100%;
  height: 150%;
  position: absolute;
  width: 3px;
  margin-left: -1.5px;
`;

export default Over;
