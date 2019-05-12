import React from 'react';
import styled, {keyframes} from 'styled-components';
import Bar from './bar';
import In from './in';
import Out from './out';

const Container_ = styled.div`
  position: relative;
`;

export const HyperspaceIn = ({children}) => <Container_>
    <In>{children}</In>
    <Bar />
  </Container_>

export const HyperspaceOut = ({children}) => <Container_>
    <Out>{children}</Out>
    <Bar />
  </Container_>
