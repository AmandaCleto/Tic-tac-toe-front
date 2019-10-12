import React, { PureComponent } from 'react';
import './board.css';

export default class Board extends PureComponent {
    public render() {
        return ( 
        <div id="blocoPai">
            <div id="bloco11"></div>
            <div id="bloco12"></div>
            <div id="bloco13"></div>
            <div id="bloco21"></div>
            <div id="bloco22"></div>
            <div id="bloco23"></div>
            <div id="bloco31"></div>
            <div id="bloco32"></div>
            <div id="bloco33"></div> 
          </div>           
        )
    }
}

