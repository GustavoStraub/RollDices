import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

export default function D20() {

const [ResultadoD20, setResultadoD20] = useState(0)
function Rolard20 () {
  setResultadoD20(Math.floor(Math.random()* 20 + 1));
}
const Main = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
`

const Butaum = styled.div`
height: 5vh;
width: 8vw;
background: gray;
display: flex;
align-items: center;
justify-content: center;
  :hover {
    cursor: pointer;
    transform: scale(1.1,1.1);
  }
`
const Name = styled.p`
color: #fff;
`
const Result = styled.p`
font-size: 20px;
margin-left: 1vw;
`
  return (
    <Main> 
      <Butaum onClick={Rolard20}>
        <Name>Rolar um d20</Name>
        </Butaum>
      <Result>{ResultadoD20}</Result>
    </Main>
  )
}