import styled from 'styled-components';

const FrameWrapper = styled.div`
width: 400px;
font-family: arial, sans-serif;
`

const HeaderWrapper = styled.div`
background-color: #7cb1e2;
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
  return (
    <FrameWrapper>
      <Header />
    </FrameWrapper>
  );
}
