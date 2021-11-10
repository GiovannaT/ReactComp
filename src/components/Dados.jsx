import React from 'react';
import './style.css';
export default function Dados(props){
  return(
    <div className='person'>
      <h3>Nome:{props.name} </h3><br/>
      <p>Idade:{props.age} </p><br/>
      <p>Curso:{props.course} </p><br/>
      <p>Atividade Extra:{props.extraActivity} </p><br/>
    </div>
  )
}