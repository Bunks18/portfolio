import React, { Component } from 'react';
import Item from './Item';
import { Button, Modal } from 'react-bootstrap';
import '../App.css';

class Container extends Component {
  state = {
    showModal: false
  };

  open = () => {
    this.setState({ showModal: true });
  };

  close = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="container">
        <Item header="Challenge 1" desc="Registration Form" onClick={this.open}/>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>something here</p>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Container;
