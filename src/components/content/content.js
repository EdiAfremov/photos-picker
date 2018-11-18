import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData, storeLazyData } from '../../store/actions';
import CardModal from './modal/modal';
import { GalleryContainer, TotalHints, Loader, GalleryGrid, NodataMarkup } from './style';
import Item from './item/item';
import InfiniteScroll from 'react-infinite-scroller';
import _ from 'lodash';
import { Icon } from 'antd';
import RequestBuilder from '../../store/request-builder';
class Content extends Component {
  state = {
    page: 1,
    hasMore: false,
    queryString: '',
    items: [],
    totalHits: 0,
    isLoading: false,
    isModalOpen: false,
    modalData: []
  };

  componentDidMount() {
    const { contentData } = this.props;
    const queryString = contentData.queryString;

    this.setState({ queryString }, () => {
      this.getDataHandler();
    });
  }
  componentDidUpdate() {
    if (this.props.contentData.queryString !== this.state.queryString) {
      const queryString = this.props.contentData.queryString;
      this.setState({ queryString, items: [], page: 1, totalHits: 0, hasMore: true }, () => {
        this.getDataHandler();
      });
    }
  }

  getLazyData() {
    const { page, queryString, items } = this.state;

    if (!items || !items.length) {
      return this.setState({ hasMore: false });
    }

    const queryParmasOptions = { query: queryString, imageType: 'photo', safeSearch: true, page, perPage: 20 };
    return RequestBuilder.sendRequest(queryParmasOptions)
      .then((res) => {
        const updatedItems = _.uniqBy([...items, ...res.hits], 'id');
        if (updatedItems.length === res.totalHits) {
          this.setState({ hasMore: false });
        }

        this.setState((prevState) => {
          return { ...prevState, items: updatedItems, page: (prevState.page += 1), totalHits: res.totalHits };
        });
      })
      .catch((err) => console.log(err));
  }

  getDataHandler() {
    const { queryString } = this.state;

    const queryParmasOptions = { query: queryString, imageType: 'photo', safeSearch: true, page: 1, perPage: 20 };
    this.setState({ isLoading: true }, () => {
      return this.props
        .getData(queryParmasOptions, true)
        .then((res) => {
          this.setState({
            items: res.payload.hits,
            page: 2,
            hasMore: true,
            totalHits: res.payload.totalHits,
            isLoading: false
          });
        })
        .catch((err) => console.log(err));
    });
  }
  closeModalHandler() {
    this.setState((prev) => {
      return { isModalOpen: !prev.isModalOpen, modalData: [] };
    });
  }

  openModalHandler(data) {
    this.setState((prev) => {
      return { isModalOpen: !prev.isModalOpen, modalData: [data] };
    });
  }

  createGallery() {
    const { items } = this.state;

    if (!items || !items.length) {
      return <NodataMarkup>Sorry, we couldn't find any matches... </NodataMarkup>;
    }

    const images = items.map((row, i) => {
      return <Item {...row} key={i} modalHandlder={() => this.openModalHandler(row)} />;
    });

    return <GalleryGrid>{images}</GalleryGrid>;
  }

  loader(fontSize, primary) {
    return (
      <Loader primary={primary} key={0}>
        <Icon type='loading' style={{ fontSize: fontSize }} />
      </Loader>
    );
  }

  render() {
    const { items, totalHits, isModalOpen, modalData, isLoading } = this.state;

    return (
      <GalleryContainer className='container'>
        <InfiniteScroll
          pageStart={0}
          loadMore={() => this.getLazyData()}
          hasMore={this.state.hasMore}
          loader={this.loader(12)}>
          <TotalHints>{items.length ? `${items.length}/${totalHits}` : ''}</TotalHints>
          {isLoading ? this.loader(40, true) : this.createGallery()}
        </InfiniteScroll>
        <CardModal modalState={isModalOpen} cardData={modalData} closeModal={() => this.closeModalHandler()} />
      </GalleryContainer>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps,
  { getData, storeLazyData }
)(Content);
