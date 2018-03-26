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
    this.animateBlock();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.block.x !== nextProps.block.x;
  }

  animateBlock() {
    let duration    = 1000 //in ms
    let fps         = 100 //frames per second
    let scrollStep  = 1 / ((duration / 1000) * fps)
    let takeStep    = scrollStep
    let idx         = 1

    let animationStep = function() {
      const { block, move, turn, width } = this.props;
      setTimeout(() => {
        if (block.x <= 0) {
            turn("R");
          }
        else if (block.x >= (width - block.width) / 2 ) {
          turn("L");
        }
        let rate = 1;
        (block.dir === "L") ? move(-rate) : move(rate); 
        idx += 1
        takeStep = scrollStep * idx
        window.requestAnimationFrame(animationStep.bind(this));
      }, 1000 / fps);
    }
    // kick off animation
    window.requestAnimationFrame(animationStep.bind(this));
  }

  render() {
    const tWidth = this.props.width, tHeight = this.props.height;
    const { width, height, x, y } = this.props.block;
    const blockStyle = {
      transform: `translateX(${this.props.block.x}px)`
    }
    return (
      <rect 
        className="curr_rect" 
        width={ width } 
        height={ height } 
        x={ x } 
        y={ tHeight - height - y } 
        style={ blockStyle } />
    );
  }
}

const mapStateToProps = state => ({
  block: state.currBlock
});

export default connect(mapStateToProps, currBlockActions)(CurrBlock);
