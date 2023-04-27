import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

const tabelaIMC=()=>{
  return(
    <table className="table">
      <thead>
        <tr>
          <th>Classificação</th>
          <th>IMC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Abaixo do Peso</td>
          <td>Abaixo de 18,5</td>
        </tr>
        <tr>
          <td>Peso Normal</td>
          <td>Entre 18,5 e 24,9</td>
        </tr>
        <tr>
          <td>Sobrepeso</td>
          <td>Entre 25 e 29,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau I</td>
          <td>Entre 30 e 34,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau II</td>
          <td>Entre 35 e 39,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau III ou Mórbida</td>
          <td>Maior que 40</td>
        </tr>
        
      </tbody>
    </table>
  )
}

const fPeso=(p,sp)=>{
  return(
    <div>
      <label className="form-label">Peso:</label>
      <input className="form-control" type="text" value={p} onChange={(e)=>{sp(e.target.value)}}></input>
    </div>
  )
}
const fAltura=(a,sa)=>{
  return(
    <div>
      <label className="form-label">Altura:</label>
      <input className="form-control" type="text" value={a} onChange={(e)=>{sa(e.target.value)}}></input>
    </div>
  )
}
const fCalcular=(p,a,sr)=>{
    const calc =()=>{
      sr(p/(a*a))
  }
  return (
    <div>
      <button onClick={calc}>Calcular</button>
    </div>
  )
}
const fResultado=(r)=>{
  return(
    <div>
      <p>Resultado: {r.toFixed(2)}</p>
    </div>
  )
}
function App() {
  const [peso,setPeso]=useState()
  const [altura,setAltura]=useState()
  const [resultado,setResultado]=useState(0)
  return(
    <div className="container" >
      {fPeso(peso,setPeso)}
      {fAltura(altura,setAltura)}
      {fCalcular(peso,altura,setResultado)}
      {fResultado(resultado)}
      {tabelaIMC()}
    </div>
  );
}

export default App;
