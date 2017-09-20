import React, { Component } from 'react';
import '../App.css';
import { Button, Modal } from 'react-bootstrap';

class Test extends Component {
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
      <div>
        <div onClick={this.open}>
        does this work
        </div>
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

export default Test;
