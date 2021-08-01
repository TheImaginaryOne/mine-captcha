import styled from 'styled-components';
import Grid from './grid';

const InterfaceWrapper = styled.div`
padding: 8px;
`

const GridWrapper = styled.div`
background-color: #ffffff;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-auto-rows: 1fr;
aspect-ratio: 1;
gap: 4px;
margin-bottom: 8px;
`

interface GridCellProps {
  isSelected: boolean;
  theme: any;
}

const GridCell = styled.div`
background-color: #dddddd;
transition: border-color 0.1s;
font-size: 48px;
font-weight: bold;
text-align: center;

display: flex;
justify-content: center;
align-content: center;
flex-direction: column;
${({ isSelected, theme }: GridCellProps) => 
  isSelected ? 
    "border: 4px solid " + theme.primaryColor :
    "border: 4px solid rgba(0,0,0,0)"}
;

:hover {
  background-color: #cccccc;
}
`

const SubmitButton = styled.button`
background-color: ${({theme}) => theme.primaryColor};
border: none;
border-radius: 4px;
font-size: 16px;
font-family: ${({theme}) => theme.fontFamily};
padding: 8px 16px;
color: #ffffff;
:hover {
    filter: brightness(90%);
}
`;

interface Props {
  selection: Grid<boolean>;
  content: Grid<number>;
  onSquareClick: (x: number, y: number) => void;
}

export default function GameInterface({ selection, content, onSquareClick } : Props) {
  const cells = new Array(16);
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      cells[i + j * 4] = 
        <GridCell key={`${i}:${j}`} 
          onClick={() => onSquareClick(i, j)}
          isSelected={selection.get(i, j)}>
          { content.get(i, j) }
        </GridCell>
      ;
    }
  }
  return (
  <InterfaceWrapper>
    <GridWrapper>
    { cells }
    </GridWrapper>
    <div>
      <SubmitButton>Verify</SubmitButton>
    </div>
  </InterfaceWrapper>
  );
}
