import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import D20 from '../components/D20'
import D6 from '../components/D6'
import D4 from '../components/D4'
import D8 from '../components/D8'
import D10 from '../components/D10'

const Main = styled.div`
height: 100%;
width: 100%;
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-evenly;
`
const Center = styled.div`
width:33,33%;
`
export default function index() {

  return (
    <Main > 
      <Center>
        <D20 />
        <D6 />
        </Center>
        <Center>
        <D8 />
        <D4 />
        </Center>
        <Center>
          <D10 />
        </Center>
        <style global jsx>{`
        body {
          margin: 0;
          pading: 0;
          background: #b5b5b5
        }
      `}</style>
    </Main>
  )
}
