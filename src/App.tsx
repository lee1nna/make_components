import React from 'react';
import Tooltip from './components/Tooltip'
import Tooltip2 from './components/Tooltip2'
import TooltipImg from './assets/image/ico_tooltip.png'
import './App.css';

function App() {
  //  Tooltip2
  return (
      <div className="title">
        <h1>
          〰️ Make Component 〰️
        </h1>
        <div className="component_title">
          1. Tooltip
        </div>
        <Tooltip></Tooltip>
          <div className="component_title">
              2. Tooltip2 (User Custom)
          </div>
          <Tooltip2 TooltipImg={TooltipImg} TooltipWidth='50px' TooltipHeight='50px' TooltipMsg='툴팁 메시지 입니다.' TooltipBorder='1px solid #333333' TooltipBorderRadius='4px'></Tooltip2>
      </div>
  );
}

export default App;