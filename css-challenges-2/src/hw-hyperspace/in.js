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

export default Rect;
