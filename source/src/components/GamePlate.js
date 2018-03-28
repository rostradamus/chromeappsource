import React, { Component } from 'react';
import './GamePlate.css';
import { connect } from 'react-redux';
import { gamePlateActions } from '../actions';
import CurrBlock from './CurrBlock';
import PrevBlock from './PrevBlock';

class GamePlate extends Component {
  constructor(props) {
    super(props);
    this.state={
      width: 400,
      height: 400
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.blockHistory.length !== nextProps.blockHistory.length;
  }

  handleKeyPress(event) {
    if(event.key === ' ') {
      if (this.isGameOver()) {
        alert("Game Over!");
        return this.props.clearGame();
      }
      this.props.createNewBlock(this.props.currBlock);
    }
  }

  isGameOver() {
    const currBlock = this.props.currBlock;
    const length = this.props.blockHistory.length - 1;
    const prevBlock = this.props.blockHistory[length];
    if (!prevBlock) return false;

    const prevRightTip = prevBlock.x + prevBlock.width / 2,
          prevLeftTip = prevBlock.x,
          currRightTip = currBlock.x + currBlock.width / 2,
          currLeftTip = currBlock.x;

    return prevRightTip < currLeftTip || prevLeftTip > currRightTip;
  }

  renderBlockHistory() {
    const { width, height } = this.state;
    const prevBlocks = this.props.blockHistory;
    return prevBlocks.map((block, index) =>
      <PrevBlock width= { width } height={ height } key={ index } block={ block } />);
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
        { this.renderBlockHistory() }
      </svg>
    );
  }
}

const mapStateToProps = state => ({
  currBlock: state.currBlock,
  blockHistory: state.blockHistory
});

export default connect(mapStateToProps, gamePlateActions)(GamePlate);
