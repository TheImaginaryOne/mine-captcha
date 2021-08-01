import styled, { ThemeProvider } from 'styled-components';
import GameInterface from './GameInterface';
import { useState } from 'react';
import { verifyAnswer, generateBoard }  from './generator';
import Grid from './grid';

const theme = {
  primaryColor: "#4A91DA",
  fontFamily: "arial, san-serif",
  gameColors: ["#444444", "#4A91DA", "#579C6E", "#D6614D"]
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

interface MainScreenProps {
  board: Grid<number>;
  onVerifyClick: (grid: Grid<boolean>) => void;
}

function MainScreen({ board, onVerifyClick }: MainScreenProps) {
  const [selection, setSelection] = useState(Grid.fill(4, 4, false));
  const onSquareClick = (x: number, y: number) => {
    const newArray = Grid.from(selection);
    newArray.set(x, y, !newArray.get(x, y));
    setSelection(newArray);
  };
  return (
    <ThemeProvider theme={theme}>
      <FrameWrapper>
        <Header />
        <GameInterface
          selection={selection}
          content={board}
          onSquareClick={onSquareClick}
          onVerifyClick={() => onVerifyClick(selection)}/>
      </FrameWrapper>
    </ThemeProvider>
  );
}

enum CaptchaState {
  NOT_DONE,
  IN_PROGRESS,
  DONE
}

export default function Captcha() {
  const [board, setBoard] = useState<Grid<number> | null>(null);
  const [captchaState, setCaptchaState] = useState(CaptchaState.NOT_DONE);

  const onClick = () => {
    setBoard(generateBoard(4));
    setCaptchaState(CaptchaState.IN_PROGRESS);
  }

  function onVerifyClick(selection: Grid<boolean>) {
    if (verifyAnswer(selection, board!)) {
      setCaptchaState(CaptchaState.DONE);
    }
  }

  return (
  <div>
    <button onClick={onClick}>Mine CAPTCHA</button>
    { captchaState === CaptchaState.IN_PROGRESS &&
      <MainScreen board={board!} onVerifyClick={onVerifyClick}/>
    }
  </div>
  );
}
