import * as React from 'react';
import { styled } from '@mui/system';

const MyComponent = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,
});

export const Test=()=> {
  return <MyComponent>Styled div</MyComponent>;
}