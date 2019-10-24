import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

export default function D4() {

const [ResultadoD4, setResultadoD4] = useState(0)
function Rolard4 () {
  setResultadoD4(Math.floor(Math.random()* 4 + 1));
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
      <Butaum onClick={Rolard4}>
        <Name>Rolar um d4</Name>
        </Butaum>
      <Result>{ResultadoD4}</Result>
    </Main>
  )
}