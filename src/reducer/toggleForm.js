import * as types from '../constances/ActionTypes'

var initState = false;

var reducer = (state = initState , action ) => {
    switch(action.type){
        case types.TOGGLE_FORM:{
            return !state;
        }
        case types.OPEN_FORM:{
            return state = true;
        }
        
        case types.CLOSE_FORM:{
            return state = false;
        }
        default: return state;
    }
}

export default reducer;