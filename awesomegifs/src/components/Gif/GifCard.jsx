import React, { Component } from 'react';
import {
  Card,
  Grid,
  Image,
  Modal,
  
} from 'semantic-ui-react';


import './GifCard.css';

// A reusable Gif card component

export class GifCard extends Component {
  state = { open: false, isLoaded: false };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <br />
          <Card>
            <Image
              onClick={this.handleClick}
              src={this.props.imageUrl  }
              wrapped
              
              ui={false}
          
            />
          </Card>
        </Grid.Column>
        <Modal
          basic
          centered
          size="tiny"
          onClose={() => this.setState({ open: false })}
          onOpen={() => this.setState({ open: false })}
          open={this.state.open}
        >
          <Image centered size="large" src={this.props.imageUrl} />
        </Modal>
      </>
    );
  }
}
