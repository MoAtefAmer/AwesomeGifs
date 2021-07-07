import { gifsConstants } from '../constants';
import { fetchGifsService } from '../services';

// encapsulated actions to be called in react containers (Redux dispatchers)

export const gifsActions = {
  fetchTrendingGifs,
  searchGifs,
  clearStore,
  staticSearchGifs,
};

function fetchTrendingGifs(limit, offset) {
  return async (dispatch) => {
    await dispatch(request());

    try {
      const gifs = await fetchGifsService.fetchTrendingGifs(limit, offset);

      dispatch(success(gifs.data));
    } catch (ex) {
      dispatch(failure(ex));
    }
  };

  function request() {
    return { type: gifsConstants.GET_TRENDING_REQUEST };
  }

  function success(gifs) {
    return {
      type: gifsConstants.GET_TRENDING_SUCCESS,
      isLoaded: true,
      gifs: gifs.data,
      pag: gifs.pagination,
    };
  }

  function failure(error) {
    return { type: gifsConstants.GET_TRENDING_FAILURE, isLoaded: true, error };
  }
}


function searchGifs(limit, offset,query) {
  return async (dispatch) => {
    await dispatch(request());

    try {
      const gifs = await fetchGifsService.searchGifs(limit, offset,query);

      dispatch(success(gifs.data));
    } catch (ex) {
      dispatch(failure(ex));
    }
  };

  function request() {
    return { type: gifsConstants.SEARCH_REQUEST };
  }

  function success(gifs) {
    return {
      type: gifsConstants.SEARCH_SUCCESS,
      isLoaded: true,
      gifs: gifs.data,
      pag: gifs.pagination,
    };
  }

  function failure(error) {
    return { type: gifsConstants.SEARCH_FAILURE, isLoaded: true, error };
  }
}


function staticSearchGifs(limit, offset,query) {
  return async (dispatch) => {
    await dispatch(request());

    try {
      const gifs = await fetchGifsService.searchGifs(limit, offset,query);

      dispatch(success(gifs.data));
    } catch (ex) {
      dispatch(failure(ex));
    }
  };

  function request() {
    return { type: gifsConstants.STATIC_SEARCH_REQUEST };
  }

  function success(gifs) {
    return {
      type: gifsConstants.STATIC_SEARCH_SUCCESS,
      isLoaded: true,
      gifs: gifs.data,
      pag: gifs.pagination,
    };
  }

  function failure(error) {
    return { type: gifsConstants.STATIC_SEARCH_FAILURE, isLoaded: true, error };
  }
}



function clearStore() {
  return async (dispatch) => {
    await dispatch(request());

    try {
   

      dispatch(success());
    } catch (ex) {
      dispatch(failure(ex));
    }
  };

  function request() {
    return { type: gifsConstants.CLEAR_STORE_REQUEST };
  }

  function success() {
    return {
      type: gifsConstants.CLEAR_STORE_SUCCESS
    
    };
  }

  function failure(error) {
    return { type: gifsConstants.CLEAR_STORE_FAILURE,  error };
  }
}

