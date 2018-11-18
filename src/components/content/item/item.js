import React, { Component } from 'react';
import { ItemCard, Image, Overlay } from './style';
import { Skeleton } from 'antd';

class Item extends Component {
  state = {
    isLoading: true
  };

  randomWidth() {
    return Math.floor(Math.random() * 260) + 150;
  }
  shouldComponentUpdate() {
    if (!this.state.isLoading) {
      return false;
    }
    return true;
  }
  onLoadHandler() {
    this.setState({ isLoading: false });
  }

  render() {
    const { largeImageURL, modalHandlder } = this.props;
    const { isLoading } = this.state;

    return (
      <ItemCard className='item-card' width={this.randomWidth()} onClick={() => modalHandlder()}>
        <Overlay />
        <Image
          style={{ display: isLoading ? 'none' : 'block' }}
          src={largeImageURL}
          onLoad={() => this.onLoadHandler()}
        />
      </ItemCard>
    );
  }
}

export default Item;
