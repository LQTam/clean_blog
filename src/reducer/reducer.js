import {combineReducers} from 'redux'
import data from './data'
import toggleForm from './toggleForm'
import itemEditing from './itemEditing'
const reducer = combineReducers({
    data : data,
    toggleForm,
    itemEditing
});

export default reducer;