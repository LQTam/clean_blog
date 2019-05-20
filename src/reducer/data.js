import * as types from '../constances/ActionTypes'

var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var randomID = () => {
    return s4() + s4() + '-' + s4() + +'-' + s4() + '-'
        + s4() + '-' + s4() + + s4() + + s4();
}

var findIndex = (state,id) => {
    var result = -1;
    state.forEach((user,index) => {
        if(user.id === id){
            result = index;
        }
    })
    return result;
}

var data = JSON.parse(localStorage.getItem('users'));
var initState = data ? data : [];

var reducer = (state = initState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.SUBMIT: {
            var user = {
                id : action.data.id,
                username : action.data.username,
                password : action.data.password,
                permission : action.data.permission,
            }
            if (action.data.id) {
                var index = findIndex(state,user.id);
                state[index] = user;
            }
            else {
                user.id = randomID();
                state.push(user);
            }
            localStorage.setItem("users", JSON.stringify(state));
            // return state;
            return [...state];
        }
        case types.DELETE_USER: {
            var id = action.data.id;
            var data = state.filter((user) => user.id !== id);
            state = data;
            localStorage.setItem("users", JSON.stringify(state));
            return [...state];
        }

        case types.UPDATE_STATUS_USER_PERMISSION: {
            return [...state];
        }
        default: return state;
    }
}

export default reducer;