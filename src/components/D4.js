import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function D4() {

  //DEFININDO VALOR INICIAL DO SWITCH
  const [Quantidade, setQuantidade] = useState(0)

  //DEFININDO VALOR INICIAL DOS DADOS
  const [ResultadoD4, setResultadoD4] = useState(0)

  const [Resultado2D4, setResultado2D4] = useState(0)
  const [Resultado3D4, setResultado3D4] = useState(0)
  const [Resultado4D4, setResultado4D4] = useState(0)

  //AQUI ARMAZENAREMOS O RESULTADO DE TODOS OS DADOS ROLADOS
  const [ResultadoTotal, setResultadoTotal] = useState(0)

  //ROLANDO UM DADO, SETA O VALOR INICIAL PARA UM NUMERO ALEATORIO ENTRE 0 E 19, POR ISSO ACRESCENTAMOS +1
  function Rolard4() {
    setResultadoD4(Math.floor(Math.random() * 4 + 1));
  }

  //ROLANDO 2 DADOS
  function Rolar2d4() {
    setResultadoD4(Math.floor(Math.random() * 4 + 1));
    setResultado2D4(Math.floor(Math.random() * 4 + 1));
  }

  //ROLANDO 3 DADOS
  function Rolar3d4() {
    setResultadoD4(Math.floor(Math.random() * 4 + 1));
    setResultado2D4(Math.floor(Math.random() * 4 + 1));
    setResultado3D4(Math.floor(Math.random() * 4 + 1));
  }

  //ROLANDO 4 DADOS  
  function Rolar4d4() {
    setResultadoD4(Math.floor(Math.random() * 4 + 1));
    setResultado2D4(Math.floor(Math.random() * 4 + 1));
    setResultado3D4(Math.floor(Math.random() * 4 + 1));
    setResultado4D4(Math.floor(Math.random() * 4 + 1));

  }

  //ESTILIZAÇÃO
  const Main = styled.div`
margin-top: 2vh;
display: flex;
justify-content: flex-start;
align-items: center;
height: 20vh;
width: 20vw;
border: 1px solid black;
background: gray;
`

  const Butaum = styled.div`
height: 100%;
width: 25%;
background: gray;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid black;
  :hover {
    cursor: pointer;
    transform: scale(1.1,1.1);
    border: solid 1px red;
  }
`
  const Name = styled.p`
color: #fff;
text-align: center;
`
  const Result = styled.p`
font-size: 20px;
margin-left: 1vw;
color: #fff;
`
  const SomarDiminuir = styled.div`
height: 50%;
width: 100%;
background: gray;
display: flex;
justify-content: center;
align-items: center;
:hover {
  cursor: pointer;
  transform: scale(1.1,1.1);
  border: solid 1px red;
}
p{
  color: #fff;
}
`
  const AdcionarDs = styled.div`
display: flex;
flex-direction: row:
justify-content: center;
align-items: center;
height: 3vh;
width: 6vw;
justify-content: space-between;
`
  const ADD = styled.div`
height: 100%;
width: 10%;
display: flex;
flex-direction: column;
`
  const Numero = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: #fff;
width: 10%;
height: 100%;
border-left: 1px solid black;
`
const Wrapper = styled.div`
margin-left: 1vw;
`
  //SWITCH PARA PODERMOS DECIDIR QUANTOS DADOS SERÃO ROLADOS
  const Dices = () => {
    switch (Quantidade) {

      case 0: return <Main>
        <ADD>
          <SomarDiminuir onClick={() =>  setQuantidade(Quantidade + 1)}><p>+</p></SomarDiminuir>
          <SomarDiminuir onClick={() => Quantidade=== 0 ? setQuantidade(Quantidade + 0) : setQuantidade(Quantidade - 1)}><p>-</p></SomarDiminuir>
        </ADD>
        <Numero>{Quantidade +1}</Numero>
        <Butaum onClick={Rolard4}>
          <Name>Rolar<br/> d4</Name>
        </Butaum>
        <Result>Resultado: {ResultadoD4}</Result>
      </Main>

      case 1: return <Main>
        <ADD>
          <SomarDiminuir onClick={() => setQuantidade(Quantidade + 1)}><p>+</p></SomarDiminuir>
          <SomarDiminuir onClick={() => setQuantidade(Quantidade - 1)}><p>-</p></SomarDiminuir>
        </ADD>
        <Numero>{Quantidade+1}</Numero>
        <Butaum onClick={Rolar2d4}>
          <Name>Rolar<br/> 2d4</Name>
        </Butaum>
        <Result>Primeiro: {ResultadoD4}<br />
          Segundo: {Resultado2D4} <br />
          Total {ResultadoD4 + Resultado2D4}</Result>
      </Main>

      case 2: return <Main>
        <ADD>
          <SomarDiminuir onClick={() => setQuantidade(Quantidade + 1)}><p>+</p></SomarDiminuir>
          <SomarDiminuir onClick={() => setQuantidade(Quantidade - 1)}><p>-</p></SomarDiminuir>
        </ADD>
        <Numero>{Quantidade+1}</Numero>
        <Butaum onClick={Rolar3d4}>
          <Name>Rolar<br/> 3d4</Name>
        </Butaum>
        <Result>Primeiro: {ResultadoD4}<br />
          Segundo: {Resultado2D4} <br />
          Terceiro : {Resultado3D4}<br />
          Total {ResultadoD4 + Resultado2D4 + Resultado3D4}</Result>
      </Main>

      case 3: return <Main>
        <ADD>
          <SomarDiminuir onClick={() => Quantidade=== 3 ? setQuantidade(Quantidade + 0) : setQuantidade(Quantidade + 1)}><p>+</p></SomarDiminuir>
          <SomarDiminuir onClick={() =>  setQuantidade(Quantidade - 1)}><p>-</p></SomarDiminuir>
        </ADD>
        <Numero>{Quantidade+1}</Numero>
        <Butaum onClick={Rolar4d4}>
          <Name>Rolar<br/> 4d4</Name>
        </Butaum>
        <Result>Primeiro: {ResultadoD4}<br />
          Segundo: {Resultado2D4} <br />
          Terceiro : {Resultado3D4}<br />
          Quarto: {Resultado4D4} <br />
          Total {ResultadoD4 + Resultado2D4 + Resultado3D4 + Resultado4D4}</Result>
      </Main>

      default: return <Main>
        <ADD>
          <SomarDiminuir onClick={() => setQuantidade(Quantidade + 1)}><p>+</p></SomarDiminuir>
          <SomarDiminuir onClick={() => setQuantidade(Quantidade - 1)}><p>-</p></SomarDiminuir>
        </ADD>
        <Numero>{Quantidade+1}</Numero>
        <Butaum onClick={Rolard4}>
          <Name>Rolar<br/> d4</Name>
        </Butaum>
        <Result>{ResultadoD4}</Result>
      </Main>
    }
  }

  return (
    <Wrapper>
      {Dices()}
    </Wrapper>

  )
}
