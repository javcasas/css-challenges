import React from 'react';
import styled, {keyframes} from 'styled-components';

const HideContent = keyframes`
  30% {
    width: 100%;
  }

  70% {
    width: 0%;
  }
  100% {
    width: 0%;
  }
`;

const Rect = styled.div`
  animation: ${HideContent} 5s linear infinite;
  :hover {
    background-color: blue;
  }
  overflow: hidden;
  text-align: left;
`;

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
    height: 100%;
    top: 0%;
    left: 100%;
    //width: inherit;
  }
  30% {
    height: 100%;
    top: 0%;
    left: 100%;
    //width: inherit;
  }
  70% {
    height: 100%;
    top: 0%;
    left: 0%;
  }
  90% {
    height: 100%;
    top: 0%;
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
  background-color: blue;
  width: 100%;
  height: 100%;
  position: absolute;
  width: 3px;

`;

const Container_ = styled.div`
  position: relative;
`;

const Container = ({children}) => <Container_>
    <Rect>{children}</Rect>
    <Over />
  </Container_>


export default Container;
