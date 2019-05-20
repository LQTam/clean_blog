import * as types from './../constances/ActionTypes'

export const listAll = () =>{
    return {
        type : types.LIST_ALL
    }
}

export const submit = (user) =>{
    return {
        type : types.SUBMIT,
        data: user
    }
}

export const deleteUser = (id) => {
    return {
        type : types.DELETE_USER,
        data : {
            id
        }
    }
}

export const editUser = (user) => {
    return {
        type: types.EDIT_USER,
        data : user
    }
}

export const toggleForm = () =>{
    return {
        type: types.TOGGLE_FORM
    }
}
export const openForm = () =>{
    return {
        type: types.OPEN_FORM
    }
}
export const closeForm = () =>{
    return {
        type: types.CLOSE_FORM
    }
}

export const updateStatus = (id) => {
    return {
        type: types.UPDATE_STATUS_USER_PERMISSION,
        id : id
    }
}