import React, { Component } from 'react'
import TableRow from './TableRow';
import {connect} from 'react-redux'

const mapsStateToProps = (state) =>{
  return {
    data : state.data,
  }
}
export default connect(mapsStateToProps,null)( class TableUser extends Component {
    render() {
      var {data} = this.props;
      return (
          <div className="col">
            <table border='1' className='table'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Permission</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                    {data.map((value,key) => {
                      return <TableRow key={key}
                      id={value.id} 
                      username={value.username}
                      password = {value.password} permission = {value.permission} 
                      />
                    })
                    }
              </tbody>
            </table>
          </div>
      )
    }
  }
)