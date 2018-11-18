import * as actionTypes from './actionTypes';

const initState = {
  items: [],
  firstLoad: false
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_QUERY:
      const queryString = action.payload;
      const firstLoad = action.firstLoad;
      return { ...state, queryString, firstLoad };
    case actionTypes.STORE_DATA:
      const data = action.payload && action.payload.hits;

      if (data && data.length) {
        // const queryString = action.queryString;
        const totalHits = action.payload.totalHits;
        const firstLoad = action.firstLoad;
        const totalHitsSummry = `${data.length}/${totalHits}`;
        const page = action.page;
        return {
          ...state,
          items: data,
          loading: false,
          queryString: action.queryString,
          totalHits,
          firstLoad,
          totalHitsSummry,
          page
        };
      }
      return { ...state };

    case actionTypes.LAZY_LOAD_DATA:
      const newData = action.payload && action.payload.hits;

      if (newData && newData.length) {
        const newQueryString = action.queryString;
        const itemsArr = [...state.items, ...newData];
        const updateTotalHits = `${itemsArr.length}/${state.totalHits}`;
        const newtotalHits = action.payload.totalHits;
        const page = action.page;

        return {
          ...state,
          items: itemsArr,
          loading: false,
          totalHitsSummry: updateTotalHits,
          totalHits: newtotalHits,
          newQueryString,
          page
        };
      }

      return { ...state };

    case actionTypes.LOADING:
      return { ...state, loading: true };
  }

  return state;
};

export default reducer;
