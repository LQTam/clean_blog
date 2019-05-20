import React, { Component } from 'react'
import SamplePost from './SamplePost/SamplePost';
import {Route} from 'react-router-dom'
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Users from './Admin/Users';
export default class NavRouter extends Component {
    render() {
        return (
            <div>
                    <div>
                        <Route exact path="/"  component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/sample-post/:slug.:id.html" component={SamplePost} />
                        <Route path="/contact" component={Contact} />
                        <Route path='/users' component = {Users}/>
                    </div>
            </div>
        )
    }
}
