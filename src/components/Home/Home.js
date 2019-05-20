import React, { Component } from 'react'
import Header from '../Header';
import MainHome from './MainHome';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Header title='Clean Blog' desc='A Blog Theme by Start Bootstrap'/>
        <MainHome />
      </div>
    )
  }
}
