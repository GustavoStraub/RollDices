import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import D20 from '../components/D20'
import D6 from '../components/D6'
import D4 from '../components/D4'
import D8 from '../components/D8'
import D10 from '../components/D10'
import D12 from '../components/D12'

const Wrapper = styled.div`
height: 100vh;
width: 100%;

`
const Main = styled.div`

width: 100%;
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-evenly;

@media only screen and (max-width: 768px){
  flex-direction: column;


}
`
const LogoWrapper = styled.div`
display: flex;
justify-content: center;
padding-top: 2vh;
img{
  height: 30vh;
}
@media only screen and (max-width: 768px){
 img{
   height: 20vh;
 }

}
`
const Center = styled.div`
width:33,33%;
`
const FotoWrapper1 = styled.div`
img{
  height: 20vh;
  position: absolute;
  bottom: 0;
}
@media only screen and (max-width: 768px){
  img{
    
  }
}
`

// var myArray = ['alo' , 'opa', 'oi'];
// var rand = myArray[Math.floor(Math.random() * myArray.length)];
// console.log(rand)
export default function index() {

  return (
    <Wrapper>
      <head>
      <link href="https://fonts.googleapis.com/css?family=UnifrakturCook:700&display=swap" rel="stylesheet"/>
      </head>
      <LogoWrapper>
        <img src='../static/logo.png'></img>
      </LogoWrapper>
    <Main > 
      
      <Center>
        <D20 />
        <D6 />
        </Center>
        <Center>
        <D10 />
        <D12 />
        </Center>
        <Center>
          <D8 />
          <D4 />
        </Center>

        <style global jsx>{`
        body {
          margin: 0;
          pading: 0;
          background: #2d2d2d;
        }
      `}</style>
    </Main>
    <FotoWrapper1>
      <img src='../static/cantocortato1.png'></img>
    </FotoWrapper1>
    </Wrapper>
  )
}
