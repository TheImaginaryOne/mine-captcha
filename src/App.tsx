import { useRef, useState } from 'react';
import { Captcha, CaptchaHandle } from './Captcha';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Link from "@material-ui/core/Link";


function App() {
  const [inputValue, setInputValue] = useState(4);
  const ref = useRef<CaptchaHandle | null>(null);
  const onInputChange = (e: any, newValue: number | number[]) => {
    setInputValue(newValue as number);
  }
  const onClick = () => {
    if (ref !== null && ref.current != null) {
      ref.current.reset();
    }
  }
  return (
    <Container maxWidth="md">
      <Card variant="outlined">
      <CardContent>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h1" gutterBottom>
            Mine Captcha
          </Typography>
          <Typography variant="body1">
            This was inspired by <Link href="https://xkcd.com/2496/">xkcd 2496</Link>.
            Click on the Captcha button to solve a "Minesweeper" puzzle
            (which is not really a Minesweeper problem, but more like a 
            "tentaizu" puzzle.)
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography id="discrete-slider" gutterBottom>
            Size of grid (number of columns and rows)
          </Typography>
          <Slider 
            valueLabelDisplay="auto"
            min={4}
            max={10}
            step={1}
            onChange={onInputChange}
            value={inputValue}
            marks={[{value: 4, label: "4"},{value: 10, label: "10"}]}
            />
          <Button 
            color="primary"
            variant="outlined"
            onClick={onClick}>
            Reset CAPTCHA
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Captcha gridSize={inputValue} ref={ref}/>
        </Grid>
      </Grid>
      </CardContent>
      </Card>
    </Container>
  );
}

export default App;
