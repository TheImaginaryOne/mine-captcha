import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

const ButtonContainer = styled.div`
border: 1px solid #cccccc;
background-color: #fafafa;
border-radius: 4px;
padding: 16px;
width: 300px;
display: flex;
flex-direction: row;
align-items: center;
${({ isDone }: { isDone: boolean }) => 
  !isDone && `
  cursor: pointer;
  :hover {
    background-color: #eeeeee;
  }` 
}
`
const Text = styled.span`
font-family: ${({theme}) => theme.fontFamily};
color: #444444;
`

const LeftSection = styled.div`
padding-right: 16px;
`

const Checkbox = styled.div`
border: 2px solid #cccccc;
background-color: #ffffff;
border-radius: 2px;
width: 28px;
height: 28px;
`

interface Props {
  onClick: () => void;
  isDone: boolean;
}

function Tick() {
  let anim = useSpring({
    from: { strokeDashoffset: 15 },
    to: { strokeDashoffset: 0 },
  });
  return (
    <animated.svg
       width="32"
       height="32"
       viewBox="0 0 10.583333 10.583334"
    >
      <animated.path
        style={anim}
        fill="rgb(0,0,0,0)"
        stroke="#2ca02c" // move colour to theme??
        strokeWidth={1}
        strokeDasharray={15}
        d="M 0.52916667,5.8208333 3.96875,9.2604166 9.7895833,0.79375"
      ></animated.path>
    </animated.svg>
  );
}

export default function CaptchaButton({ isDone, onClick }: Props) {
  return (
    <ButtonContainer isDone={isDone} onClick={(e) => !isDone && onClick()}>
      <LeftSection>
      { isDone ?
        <Tick/>
        :
        <Checkbox />
      }
      </LeftSection>
      <Text>
        I am a robot
      </Text>
    </ButtonContainer>
  )
}
