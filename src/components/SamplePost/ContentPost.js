import React, { Component } from 'react'

export default class ContentPost extends Component {
  render() {
    return (
      <div>
        <div>
            <article>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            {this.props.content}
                        </div>
                    </div>
                </div>
            </article>
            <hr />
        </div>
      </div>
    )
  }
}
