import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { storeData, getData } from './store/actions';

import SerachBar from './components/search-bar/search-bar';
import Content from './components/content/content';
import './index.css';
const Body = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  /* padding-bottom: 30px; */
  /* background: #f8f8fa; */
`;

class App extends Component {
  render() {
    const { contentData } = this.props;
    return (
      <Body>
        <SerachBar />
        {contentData.firstLoad ? <Content /> : null}
      </Body>
    );
  }
}
const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps,
  { getData }
)(App);
