import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Rectangle } from 'react-shapes';
import './CurrBlock.css'

class CurrBlock extends Component {

  constructor(props) {
      super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    const block = this.props.block;
    return (
      <Rectangle className="curr_rect" width={ block.width } height={ block.height } style={{ x: block.x, y: block.y }} />
    );
  }
}


const mapStateToProps = state => ({
  block: state.currBlock
});

export default connect(mapStateToProps)(CurrBlock);
