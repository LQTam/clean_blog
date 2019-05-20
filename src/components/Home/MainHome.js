import React, { Component } from 'react'
import PostItem from './PostItem';
import dataPost from '../dataPosts.json';
export default class MainHome extends Component {
  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
        {dataPost.map((value,key) => {
          return (
            <PostItem key = {key}
              id = {value.id}
              title={value.title}
              desc={value.desc}
              guest={value.guest}
              archieve={value.archieve}
            />
          )
        })}
          {/* Pager */}
          <div className="clearfix">
            <a className="btn btn-primary float-right" href="/">Older Posts →</a>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
