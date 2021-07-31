import styled, { ThemeProvider } from 'styled-components';
import GameInterface from './GameInterface';
import { useState } from 'react';

const theme = {
  primaryColor: "#1490c9",
  fontFamily: "arial, san-serif"
}

const FrameWrapper = styled.div`
width: 300px;
font-family: ${({theme}) => theme.fontFamily};
box-shadow: 0px 12px 16px rgba(0,0,0,0.2);
`

const HeaderWrapper = styled.div`
background-color: ${({theme}) => theme.primaryColor};
padding: 16px;
`

const LargeHeaderText = styled.div`
color: #ffffff;
font-size: 24px;
font-weight: bold;
`

const HeaderText = styled.div`
color: #ffffff;
`

const Header = () => (
  <HeaderWrapper>
    <HeaderText>Select all squares with</HeaderText>
    <LargeHeaderText>Mines</LargeHeaderText>
  </HeaderWrapper>
);

export default function MainScreen() {
  const [selection, setSelection] = useState<boolean[]>(new Array(16).fill(false));
  const onSquareClick = (key: number) => {
    const newArray = [...selection];
    newArray[key] = !newArray[key];
    setSelection(newArray);
  };
  return (
    <ThemeProvider theme={theme}>
      <FrameWrapper>
        <Header />
        <GameInterface selection={selection} onSquareClick={onSquareClick}/>
      </FrameWrapper>
    </ThemeProvider>
  );
}
