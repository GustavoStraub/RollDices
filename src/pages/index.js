import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import D20 from '../components/D20'
import D6 from '../components/D6'
import D4 from '../components/D4'
import D8 from '../components/D8'
import D10 from '../components/D10'
import D12 from '../components/D12'

const Main = styled.div`
height: 100vh;
width: 100%;
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
background: url("../static/RollDices.png");
background-size: 100% 100%;
`
const Center = styled.div`
width:33,33%;
`
// var myArray = ['alo' , 'opa', 'oi'];
// var rand = myArray[Math.floor(Math.random() * myArray.length)];
// console.log(rand)
export default function index() {

  return (
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
        }
      `}</style>
    </Main>
  )
}
