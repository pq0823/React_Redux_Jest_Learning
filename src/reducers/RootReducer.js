import { combineReducers } from 'redux';
import handReducer from './handReducer';

/**
 * Using the combineReducers utility from redux, you can combine all reducers in the app into a single index reducer.
 */
export default combineReducers({
    handReducer
});
