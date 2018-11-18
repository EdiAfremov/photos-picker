import React, { Component } from 'react';
import { Modal, Icon } from 'antd';
import { ModalContent, ModalBody, Summary, Image, ImageContainer, SocialCell } from './style';
import _ from 'lodash';

class CardModal extends Component {
  state = { visible: false, cardData: [] };

  componentDidUpdate() {
    if (this.props.modalState !== this.state.visible) {
      this.setState({ visible: this.props.modalState });
    }

    if (!_.isEqual(this.props.cardData, this.state.cardData)) {
      this.setState({ cardData: this.props.cardData });
    }
  }
  createModalContent() {
    const { cardData } = this.state;

    if (!cardData.length) {
      return <Icon type='loading' style={{ fontSize: 40 }} />;
    }
    const { comments, favorites, largeImageURL, tags, likes } = cardData[0];

    return (
      <ModalContent>
        <ImageContainer>
          <Image src={largeImageURL} />
        </ImageContainer>
        <Summary>
          <div className='tag'>{tags}</div>
          <SocialCell className='socialCell'>
            <Icon type='like' style={{ marginRight: 5 }} />
            {likes}
          </SocialCell>
          <SocialCell className='social-cell'>
            <Icon type='star' style={{ marginRight: 5 }} />
            {favorites}
          </SocialCell>
          <SocialCell className='social-cell'>
            <Icon type='message' style={{ marginRight: 5 }} />
            {comments}
          </SocialCell>
        </Summary>
      </ModalContent>
    );
  }
  render() {
    const { visible } = this.state;

    return (
      <div>
        <Modal
          destroyOnClose
          footer={null}
          bodyStyle={{ padding: 0 }}
          title=''
          visible={visible}
          onCancel={() => this.props.closeModal()}>
          <ModalBody>{this.createModalContent()}</ModalBody>
        </Modal>
      </div>
    );
  }
}

export default CardModal;
