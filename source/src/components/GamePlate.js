import React, { Component } from 'react';
import './GamePlate.css';
import { connect } from 'react-redux';
import { gamePlateActions } from '../actions';
import CurrBlock from './CurrBlock';

class GamePlate extends Component {
  constructor(props) {
    super(props);
    this.state={
      width: 400,
      height: 400
    }
  }

  handleKeyPress(event) {
    if(event.key === ' ') {
      const { width, height, x, y, speed } = this.props.currBlock;
      this.props.createNewBlock({ width, height, x, y, speed });
    }
  }

  render() {
    const { width, height } = this.state;
    return (
      <svg
        className="game_plate"
        width={ width }
        height={ height }
        onKeyDown={ this.handleKeyPress.bind(this) }
        tabIndex="0" >
        <CurrBlock width= { width } height={ height } />
      </svg>
    );
  }
}

const mapStateToProps = state => ({
  currBlock: state.currBlock
});

export default connect(mapStateToProps, gamePlateActions)(GamePlate);
