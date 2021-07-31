import styled from 'styled-components';

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
  selection: boolean[];
  onSquareClick: (key: number) => void;
}

export default function GameInterface({ selection, onSquareClick } : Props) {
  return (
  <InterfaceWrapper>
    <GridWrapper>
      { selection.map((state, key) => (
        <GridCell key={key} 
          onClick={() => onSquareClick(key)}
          isSelected={selection[key]}>
        </GridCell>
      )) }
    </GridWrapper>
    <div>
      <SubmitButton>Verify</SubmitButton>
    </div>
  </InterfaceWrapper>
  );
}
