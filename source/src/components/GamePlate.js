import React, { Component } from 'react';
import './GamePlate.css';
import { connect } from 'react-redux';
import CurrBlock from './CurrBlock';

class GamePlate extends Component {
  constructor(props) {
    super(props);
    this.state={
      width: 400,
      height: 400
    }
  }

  render() {
    const { width, height } = this.state;
    return (
      <svg className="game_plate" width={ width } height={ height }>
        <CurrBlock width= { width } height={ height } />
      </svg>
    );
  }
}

export default GamePlate;
