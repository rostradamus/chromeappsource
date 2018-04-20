import React, { Component } from 'react';
import './PrevBlock.css';

class PrevBlock extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    const tWidth = this.props.width, tHeight = this.props.height;
    const { width, height, x, y } = this.props.block;
    return (
      <rect
        className="block prev_block"
        width={ width }
        height={ height }
        x={ x * 2 }
        y={ tHeight - height - y } />
    );
  }
}

export default PrevBlock;