import { createStore } from 'redux';

const initialState = {
  loggedIn: false,
  username: '',
  searchQuery: '',
  minPrice: '',
  maxPrice: '',
  category: '',
  advancedSearch: false,
  items: [],
  sellers: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, loggedIn: true, username: action.username };
    case 'LOGOUT':
      return { ...state, loggedIn: false, username: '' };
    case 'QUERY':
      return { ...state, searchQuery: action.q };

    case 'MINIMUM-PRICE':
      return { ...state, minPrice: action.price };

    case 'MAXIMUM-PRICE':
      return { ...state, maxPrice: action.price };

    case 'CLEAR':
      return { ...state, searchQuery: '', maxPrice: '' };

    case 'ADVANCED-SEARCH':
      return { ...state, advancedSearch: !state.advancedSearch };

    case 'SET_ITEMS':
      return { ...state, items: action.items };

    case 'ADD_ITEM':
      return { ...state, items: state.items.concat(action.item) };

    case 'SET_SELLERS':
      return { ...state, sellers: action.sellers };

    case 'SET_CATEGORY':
      return { ...state, category: action.category };

    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;