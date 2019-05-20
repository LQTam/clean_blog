import React, { Component } from 'react'
import Header from './../Header'
import TableUser from './TableUser';
import AddUser from './AddUser';
import DataUser from './dataUsers.json';
import {connect} from 'react-redux'
import * as actions from './../../actions/index'

const mapStateToProps = (state) => {
  return {
    isToggleForm : state.toggleForm,
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onOpenForm : () =>{
      dispatch(actions.openForm());
    },
    onClearInput : () =>{
      dispatch(actions.editUser({
        id:'',
        username:'',
        password:'',
        permission:''
      }))
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(class Users extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data : [],
      }
    }
    componentWillMount(){
      if(localStorage.getItem("users") === null){
        localStorage.setItem("users",JSON.stringify(DataUser));
      }
      else{
        const temp = JSON.parse(localStorage.getItem("users"));
        this.setState({
          data:temp
        })
      }
    }

    // addUser = (user) => {
    //   const temp = {};
    //   temp.username = user.username;
    //   temp.password = user.password;
    //   temp.permission = user.permission;
    //   const datas = this.state.data;
    //   datas.push(temp);
    //   this.setState({
    //     data : datas
    //   })
    //   localStorage.setItem("users",JSON.stringify(datas));
    // }

    // deleteUser  = (id) =>{
    //   const temp = this.state.data.filter((item) => item.id !== id);
    //   this.setState({
    //     data : temp
    //   })
    //   localStorage.setItem("users",JSON.stringify(temp));
    // }
    onOpenForm = () =>{
      this.props.onOpenForm();
      this.props.onClearInput();
    }
    render() {
      var {isToggleForm} = this.props;

      var elemForm = isToggleForm === true ? 
      <AddUser 
      // addUser = { (user) => this.addUser(user)} 
      /> : "";
      return (
        <div >
          <Header title='Manager Account' />
          <div className='container'>
            <div className='row '>
              <div className="col-12">
                <button className="btn btn-primary" onClick = {() => this.onOpenForm()}><i className="fa fa-plus" aria-hidden="true" /> Add User </button>
              </div>
              <TableUser 
              // deleteUser = {(id) =>this.deleteUser(id)} addUser = {(user) => this.addUser(user)} 
              />
              {elemForm}
            </div>
          </div>
        </div>
      )      
    } 
  }
)