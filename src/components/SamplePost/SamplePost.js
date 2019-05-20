import React, { Component } from 'react'
import Post from './Post';
import dataPosts from '../dataPosts.json'
import ContentPost from './ContentPost';
export default class SamplePost extends Component {
    render() {
        return (
            <div>
                {dataPosts.map((value,key) => {
                    if(value.id == this.props.match.params.id){
                        return (
                            <div key = {key}>
                                <Post 
                                    title={value.title}
                                    desc={value.desc}
                                    guest={value.guest}
                                    archieve={value.archieve}
                                />
                                <ContentPost content={value.content}/>
                            </div>
                        )
                    }
                })}
            </div>
        )
        
    }
}
