import React, { Component } from 'react';
import {
  Card,
  Grid,
  Image,
  Modal,
} from 'semantic-ui-react';

import './GifCard.css';

import broken from '../../assets/broken-1.png'

// A reusable Gif card component

export class GifCard extends Component {
  state = { open: false, isLoaded: false };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };


  // Making sure that the gif is fully loaded 
  componentDidMount() {
    const myImg1 = document.getElementById(this.props.id);

    myImg1 &&
      myImg1.addEventListener('load', async () => {
        if (myImg1) this.setState({ isLoaded: true });
      });
  }

  render() {
    return (
      <>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <br />
          <Card>
       
            {!this.state.isLoaded && 'Loading...'}
            <img
              id={this.props.id}
              src={this.props.imageUrl}
              alt={broken}
              onClick={this.handleClick}
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
