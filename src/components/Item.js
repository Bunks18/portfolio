import React, { Component } from 'react';

class Item extends Component {
  render(){
    return(
      <div className="item col-3" onClick={this.props.onClick}>
      <h1>{this.props.header}</h1>
      <h3>{this.props.desc}</h3>
      </div>
    )
  }
}

export default Item;