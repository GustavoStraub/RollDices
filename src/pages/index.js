import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import D20 from '../components/D20'
import D4 from '../components/D4'

const Main = styled.div`
height: 100vh;
`

export default function index() {

  return (
    <Main > 
        <D20 />
        {/* <D4 /> */}
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
