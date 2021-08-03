import { useRef, useState, ChangeEvent } from 'react';
import { Captcha, CaptchaHandle } from './Captcha';
import styled from 'styled-components';

const Wrapper = styled.div`
font-family: arial, sans-serif;
`

const FormRow = styled.div`
padding: 8px 0;
`

const FormLabel = styled.label`
padding-right: 8px;
`

function App() {
  const [inputValue, setInputValue] = useState(4);
  const ref = useRef<CaptchaHandle | null>(null);
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setInputValue(parseInt(value));
  }
  const onClick = () => {
    if (ref !== null && ref.current != null) {
      ref.current.reset();
    }
  }
  return (
    <Wrapper>
      <FormRow>
        <FormLabel>Width of column</FormLabel>
        <input 
          type="range"
          min={4}
          max={10}
          onChange={onInputChange}
          value={inputValue}
          />
      </FormRow>
      <FormRow>
        <span>{ inputValue }</span>
      </FormRow>
      <FormRow>
        <button 
          onClick={onClick}>
          Reset CAPTCHA
        </button>
      </FormRow>
      <Captcha gridSize={inputValue} ref={ref}/>
    </Wrapper>
  );
}

export default App;
