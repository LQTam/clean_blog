import * as types from '../constances/ActionTypes'

var initState = {
    id : "",
    username:"",
    password:"",
    permission:""
};

var reducer = (state = initState , action ) => {
    switch(action.type){
        case types.EDIT_USER: {
            return action.data;
        }
        default: return state;
    }
}

export default reducer;