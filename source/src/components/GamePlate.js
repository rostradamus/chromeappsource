import React, { Component } from 'react';
import './GamePlate.css';
import { connect } from 'react-redux';
import CurrBlock from './CurrBlock';

class GamePlate extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="game_plate">
              This is GamePlate!
              <br />
              <CurrBlock />
            </div>
        );
    }
}

export default GamePlate;
