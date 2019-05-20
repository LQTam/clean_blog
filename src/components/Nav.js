import React, { Component } from 'react'
import {  NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
              <div className="navbar-brand">
                <NavLink exact to='/'>Start Bootstrap</NavLink>
              </div>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                  <i className="fas fa-bars" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink exact to='/'>Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink  to='/about'>About</NavLink>
                  </li>
                  {/* <li className="nav-item">
                    <NavLink  to='/sample-post'>Sample Post</NavLink>
                  </li> */}
                  <li className="nav-item">
                    <NavLink  to='/contact'>Contact</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to='/users'>Users</NavLink>
                  </li>
                </ul>
              </div>
              {/* <div className='navbar-brand'>
              <NavLink to='/login'>Login</NavLink>
              </div> */}
            </div>
          </nav>
      </div>
    )
  }
}
