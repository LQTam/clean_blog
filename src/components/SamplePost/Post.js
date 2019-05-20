import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
            <div>
                <header className="masthead" style={{ backgroundImage: 'url("img/home-bg.jpg")' }}>
                    <div className="overlay" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <div className="site-heading">
                                    <h1>{this.props.title}</h1>
                                    <span className="subheading">{this.props.desc}</span>
                                    <span className="meta">Posted by 
                                        <a href="/">{this.props.guest}</a>
                                        on {this.props.archieve}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
