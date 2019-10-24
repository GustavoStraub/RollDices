import React, {useState, useEffect} from 'react'

export default function index() {

const [ResultadoD20, setResultadoD20] = useState(1)
 
function Rolard20 () {
  setResultadoD20(Math.floor(Math.random()* 20 + 1));
 }

 console.log(ResultadoD20)
  return (
    <div> 
      <button onClick={Rolard20}>Rolar D20</button>
      <p>{ResultadoD20}</p>
    </div>
  )
}
