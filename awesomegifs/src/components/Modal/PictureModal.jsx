import React, { Component } from 'react';
import { Image, Modal } from 'semantic-ui-react';

import './PictureModal.css';

export default class PictureModal extends Component {
  state = { trigger: false };
  render() {
    return (
      <Modal
        
        basic
        closeOnDimmerClick
        closeOnDocumentClick
        onOpen={() => this.props.openModal}
        open={this.props.trigger}
        // trigger={this.props.trigger}
        size="large"
        dimmer="blurring"
      >
       

        <Modal.Header image>
          <Image src={this.props.imageUrl} size="large" />
        </Modal.Header>

      
      </Modal>
    );
  }
}
