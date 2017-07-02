import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';
import search              from './search';
import searchTerms         from './search-terms';

const rootReducer = combineReducers({search, searchTerms, routing : routerReducer});

export default rootReducer;

