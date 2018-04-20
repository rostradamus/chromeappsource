import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import GamePlate from './GamePlate';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>
          Stackit!
        </h1>
        <div className="score">Score: {this.props.gameState.score} </div>
        <GamePlate />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gameState: state.gameState,
  prevBlocks: state.blockHistory,
  currBlock: state.currBlock
});

export default connect(mapStateToProps)(App);
