import styled, { ThemeProvider } from 'styled-components';
import { useState, useImperativeHandle, forwardRef, useEffect } from 'react';
import { animated, Transition } from 'react-spring';
import { verifyAnswer, generateBoard }  from './generator';
import Grid from './grid';
import GameInterface from './GameInterface';
import CaptchaButton from './CaptchaButton';

const theme = {
  primaryColor: "#4A91DA",
  fontFamily: "\"Roboto\", arial, san-serif",
  gameColors: ["#444444", "#4A91DA", "#579C6E", "#D6614D"]
}

const DialogWrapper = styled(animated.div)`
position: relative;
top: -100px;
left: 200px;
display: inline-block;
z-index: 999;
`

const DismissFrame = styled.div`
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
width: 100%;
`

const AbsDiv = styled.div`
position: absolute;
width: 0;
height: 0;
`

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
  const [selection, setSelection] = useState(
    Grid.fill(board.width, board.height, false)
  );
  useEffect(() => {
    setSelection(Grid.fill(board.width, board.height, false))
  }, [board.width, board.height]);
  const onSquareClick = (x: number, y: number) => {
    const newArray = Grid.from(selection);
    newArray.set(x, y, !newArray.get(x, y));
    setSelection(newArray);
  };
  return (
    <FrameWrapper>
      <Header />
      <GameInterface
        selection={selection}
        content={board}
        onSquareClick={onSquareClick}
        onVerifyClick={() => onVerifyClick(selection)}/>
    </FrameWrapper>
  );
}

enum CaptchaState {
  NOT_DONE,
  IN_PROGRESS,
  DONE
}

interface CaptchaProps {
  gridSize: number;
}

export interface CaptchaHandle {
  reset: () => void;
}

export const Captcha = forwardRef<CaptchaHandle, CaptchaProps>((props, ref) => {
  const [board, setBoard] = useState<Grid<number> | null>(null);
  const [captchaState, setCaptchaState] = useState(CaptchaState.NOT_DONE);

  const onClick = () => {
    setBoard(generateBoard(props.gridSize));
    setCaptchaState(CaptchaState.IN_PROGRESS);
  }

  const reset = () => {
    setCaptchaState(CaptchaState.NOT_DONE);
  }
  const obj = { reset };
  // expose callback
  useImperativeHandle(ref, () => obj);

  function onVerifyClick(selection: Grid<boolean>) {
    if (verifyAnswer(selection, board!)) {
      setCaptchaState(CaptchaState.DONE);
    }
  }

  const showDialog = captchaState === CaptchaState.IN_PROGRESS;

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CaptchaButton isDone={captchaState === CaptchaState.DONE} onClick={onClick} />
        { showDialog && <DismissFrame onClick={reset}/> }
        <Transition
          items={showDialog}
          config={{ mass: 0.1, tension: 200 }}
          from = {{ opacity: 0 }}
          enter = {{ opacity: 1 }}
          leave = {{ opacity: 0 }}>
          { (styles, show) =>
            show &&
            <>
            <AbsDiv>
              <DialogWrapper style={styles}>
                <MainScreen board={board!} onVerifyClick={onVerifyClick}/>
              </DialogWrapper>
            </AbsDiv>
            </>
          }
        </Transition>
      </ThemeProvider>
    </div>
  );
})

