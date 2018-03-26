import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Rectangle } from 'react-shapes';
import { currBlockActions } from '../actions';
import './CurrBlock.css';

class CurrBlock extends Component {

  constructor(props) {
      super(props);
  }

  componentDidMount() {
    this.props.moveLeft(this.props.block.x);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.block.x !== nextProps.block.x;
  }

  render() {
    const tWidth = this.props.width, tHeight = this.props.height;
    const { width, height, x, y } = this.props.block;
    return (
      <rect className="curr_rect" width={ width } height={ height } x={ x } y={ tHeight - height - y } />
    );
  }
}


const mapStateToProps = state => ({
  block: state.currBlock
});

export default connect(mapStateToProps, currBlockActions)(CurrBlock);
