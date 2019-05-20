import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from './../../actions/index'

const mapStateToProps = (state) =>{
    return {
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return ({
        onDeleteUser : (id) => {
            dispatch(actions.deleteUser(id));
        },
        onEditUser : (user) => {
            dispatch(actions.editUser(user))
        },
        onToggleForm: () => {
            dispatch(actions.toggleForm());
        },
        onUpdatePermission : (id) =>{
            dispatch(actions.updateStatus(id))
        },
        onCloseForm : () => {
            dispatch(actions.closeForm());
        },
        onOpenForm : () => {
            dispatch(actions.openForm());
        },
    })
}

export default connect(mapStateToProps,mapDispatchToProps) (class TableRow extends Component {
        showPermission = () =>{
            if(this.props.permission === "1") return "Admin";
            else if(this.props.permission ==="2") return "Moderable";
        }

        onDeleteUser = (id) =>{
            this.props.onDeleteUser(id);
            this.props.onCloseForm();
        }

        onEditUser = () => {
            this.props.onOpenForm();
            this.props.onEditUser(this.props);
        }

        render() {
            return (
                    <tr>
                        <td>{this.props.id}</td>
                        <td>{this.props.username}</td>
                        <td>{this.props.password}</td>
                        <td>
                            { this.showPermission()}
                        </td>
                        <td>
                            <div className="button-group">
                                <button className="btn btn-outline-primary" onClick = {() => this.onEditUser()} type="button" name="edit" value ><i className="fas fa-edit"></i> Edit</button>
                                <button className="btn btn-danger" type="button" onClick={() => this.onDeleteUser(this.props.id)} name="delete" value >Delete</button>
                            </div>
                        </td>
                    </tr>
            )
        }
    }
)