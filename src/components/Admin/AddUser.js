import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './../../actions/index'

const mapStateToProps = (state) => {
    return {
        // data: state.data,
        itemEditing : state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSubmit: (user) => {
            dispatch(actions.submit(user));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        },
        onClearInput : () =>{
            dispatch(actions.editUser({
                username:"",
                password:"",
                permission:""
            }))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(class AddUser extends Component {
    constructor(props){
      super(props);
      this.state = {
          id: "",
          username:"",
          password:"",
          permission:""
      }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    clearInput(){
        this.setState({
            // id : "",
            username:"",
            password:"",
            permission:""
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.props.onCloseForm();
        this.clearInput();
    }

    closeForm = () =>{
        this.props.onCloseForm();
        this.clearInput();
    }

    componentWillMount(){
        // console.log(this.props)
        if(this.props.itemEditing && this.props.itemEditing != null){
            this.setState({
                id : this.props.itemEditing.id,
                username : this.props.itemEditing.username,
                password : this.props.itemEditing.password,
                permission : this.props.itemEditing.permission,
            })
        }
        else{
            console.log('null')
            this.clearInput();
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.itemEditing) {
            this.setState({
                id : nextProps.itemEditing.id,
                username : nextProps.itemEditing.username,
                password : nextProps.itemEditing.password,
                permission : nextProps.itemEditing.permission,
            })
        }
        else{
            this.clearInput();
        }
    }
    render() {
        return (
            <div>
                <div className='col'>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title ">{!this.state.id ? "Add User" : "Edit User"}
                                        <span className="fa fa-times-circle float-right" onClick={() => this.props.onCloseForm()}></span>
                            </h4>
                            <form onSubmit={(event) => this.onSubmit(event)}>
                                <div className="fosrm-group">
                                    <div className="form-group">
                                        <label>Username:</label>
                                        <input type="text" onChange={(event) => this.isChange(event)} value={this.state.username} className="form-control" name="username" />
                                    </div>
                                    <div className="form-group">
                                        <label >Password:</label>
                                        <input onChange={(event) => this.isChange(event)} type="password" value={this.state.password} className="form-control" name="password" />
                                    </div>
                                    <div className="form-group">
                                        <div className="form-group">
                                            <label >Permission:</label>
                                            <select className="form-control" name="permission" value={this.state.permission} onChange={(event) => this.isChange(event)}>
                                                <option>Choose permission</option>
                                                <option value="1">Admin</option>
                                                <option value="2">Moderable</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <input type="submit" className="btn btn-primary" value='Save' />
                                        <button type='button' className = "btn btn-danger" onClick={() => this.clearInput()} >Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
)