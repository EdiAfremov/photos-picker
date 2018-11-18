import * as actionTypes from './actionTypes';
import RequestBuilder from './request-builder';

export const storeDataAction = (data, queryString, firstLoad, page) => {
  return { type: actionTypes.STORE_DATA, payload: data, queryString, loading: true, firstLoad, page };
};

export const setSearchQueryAction = (queryString, firstLoad) => {
  return { type: actionTypes.SET_QUERY, payload: queryString, loading: true, firstLoad };
};

export const isLoadingAction = () => {
  return { type: actionTypes.LOADING, loading: true };
};

export const getLazyDataAction = (queryString, firstLoading) => {
  return { type: actionTypes.LAZY_LOAD_DATA, payload: queryString, firstLoading, loading: true };
};

export const error = (data) => {
  return { type: actionTypes.DATA_EROR, payload: data };
};

export const setSearchQuery = (query, firstLoading) => {
  return (dispatch) => {
    return dispatch(setSearchQueryAction(query, firstLoading));
  };
};

export const storeLazyData = (res) => {
  return (dispatch) => {
    return dispatch(getLazyDataAction(res));
  };
};

export const getData = (queryParams, firstLoad, lazyLoading) => {
  return (dispatch) => {
    dispatch(isLoadingAction());
    return RequestBuilder.sendRequest(queryParams)
      .then((res) => {
        const queryString = (queryParams && queryParams.query) || '';
        const page = queryParams && queryParams.page;
        if (lazyLoading) {
          return dispatch(getLazyDataAction(res, queryString, page));
        } else {
          return dispatch(storeDataAction(res, queryString, firstLoad, page));
        }
      })
      .catch((err) => err);
  };
};
