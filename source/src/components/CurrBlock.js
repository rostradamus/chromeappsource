import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Rectangle } from 'react-shapes';
import { currBlockActions } from '../actions';
import './CurrBlock.css';

class CurrBlock extends Component {

  constructor(props) {
      super(props);
      this.state = {
        color: {
          r: 0,
          g: 0,
          b: 0
        }
      }
  }

  componentDidMount() {
    this.animateBlock();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.block.x !== nextProps.block.x;
  }

  animateBlock() {
    const fps = 100 //frames per second
    const animationStep = function() {
      const { block, move, turn, width } = this.props;
      setTimeout(() => {
        if (block.x <= 0) {
            turn(1);
          }
        else if (block.x >= (width - block.width) / 2 ) {
          turn(-1);
        }
        let rate = block.speed;
        move();
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
        className="block curr_block"
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
