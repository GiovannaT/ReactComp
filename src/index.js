import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Dados from './components/Dados'
ReactDOM.render(
  <div>
    <Header/>
    <Dados 
    name='Fernanda' 
    age='24' 
    course='Nutrição'
    extraActivity='Monitoria'
    />
    <Dados 
    name='Maria' 
    age='15' 
    course='Computação'
    extraActivity='Extensão'
    />
  </div>,
  document.getElementById('root')
);
