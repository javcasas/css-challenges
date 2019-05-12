import React from 'react';
import styled, {keyframes} from 'styled-components';

//top-left, top-right, bottom right, bottom left
const HideContent = keyframes`
  0% {
    clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
  }
  30% {
    clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
  }

  70% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
  100% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
`;

const Rect = styled.div`
  animation: ${HideContent} 5s linear infinite;
  :hover {
    background-color: blue;
  }
  text-align: left;
  width: 100%;
`;

const BeforeFrames = keyframes`
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

const Before = styled.div`
  animation: ${BeforeFrames} 5s linear infinite;
  width: 100%;
  background-color: red;
  overflow: hidden;
  display: hidden;
`;

const Container = styled.div`
  display: flex;
`

const Content = ({children}) => <Container>
    <Before />
    <Rect>{children}</Rect>
  </Container>

export default Content;
