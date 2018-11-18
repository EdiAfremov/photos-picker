import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData, setSearchQuery } from '../../store/actions';
import { SerachBarConatiner, Input, Button } from './style';
import 'antd/dist/antd.css';
import { Icon } from 'antd';

class SerachBar extends Component {
  state = {
    inputVal: '',
    firstLoad: false,
    loading: false
  };

  onChangeHandler(e) {
    const value = e.target.value;
    return this.setState({ inputVal: value });
  }

  sendRequestHandler() {
    const { inputVal } = this.state;

    if (!inputVal) {
      return;
    }

    this.setState({ loading: true, firstLoad: true }, () => {
      this.props.setSearchQuery(inputVal, this.state.firstLoad);
      this.setState({ inputVal: '', loading: false });
    });
  }

  createSearch() {
    const { inputVal, loading } = this.state;

    const spinner = (
      <span>
        <Icon type='loading' />
      </span>
    );

    return (
      <div>
        <Input type='text' onChange={(e) => this.onChangeHandler(e)} value={inputVal} placeholder='Search images' />
        <Button disabled={!inputVal} onClick={() => this.sendRequestHandler()}>
          {loading ? spinner : null}
          Search
        </Button>
      </div>
    );
  }

  render() {
    const { firstLoad } = this.state;
    return (
      <SerachBarConatiner className='search-bar' resize={firstLoad}>
        {this.createSearch()}
      </SerachBarConatiner>
    );
  }
}
export default connect(
  null,
  { getData, setSearchQuery }
)(SerachBar);
