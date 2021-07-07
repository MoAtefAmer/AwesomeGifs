// Reducer object for gifs

import { gifsConstants } from '../constants';
const initialState = {
  gifs: [],
  pagination: {},
  error: '',
  isLoaded: false,
};

export default function gifs(state = initialState, action) {
  switch (action.type) {
    case gifsConstants.GET_TRENDING_REQUEST:
      return {
        ...state,
      };

    case gifsConstants.GET_TRENDING_SUCCESS:
      return {
        ...state,
        isLoaded: action.isLoaded,
        gifs: state.gifs.concat(action.gifs),
        pagination: action.pag,
      };

    case gifsConstants.GET_TRENDING_FAILURE:
      return {
        ...state,
        isLoaded: action.isLoaded,
        error: action.error,
      };

    case gifsConstants.SEARCH_REQUEST:
      return {
        ...state,
      };

    case gifsConstants.SEARCH_SUCCESS:
      return {
        ...state,
        isLoaded: action.isLoaded,
        gifs: state.gifs.concat(action.gifs),
        pagination: action.pag,
      };

    case gifsConstants.SEARCH_FAILURE:
      return {
        ...state,
        isLoaded: action.isLoaded,
        error: action.error,
      };

    case gifsConstants.CLEAR_STORE_REQUEST:
      return {
        ...state,
      };

    case gifsConstants.CLEAR_STORE_SUCCESS:
      return {
        ...state,
        gifs: [],
        pagination: {},
        isLoaded: action.isLoaded,
      };

    case gifsConstants.CLEAR_STORE_FAILURE:
      return {
        ...state,
        isLoaded: action.isLoaded,
        error: action.error,
      };


      case gifsConstants.STATIC_SEARCH_REQUEST:
        return {
          ...state,
         
        };

        case gifsConstants.STATIC_SEARCH_SUCCESS:
            return {
              ...state,
              isLoaded: action.isLoaded,
              gifs: action.gifs,
              pagination: action.pag,
            };
  
      case gifsConstants.STATIC_SEARCH_FAILURE:
        return {
          ...state,
          isLoaded: action.isLoaded,
          error: action.error,
        };

      
    default:
      return { ...state };
  }
}
