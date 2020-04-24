import React, { Component } from 'react';
import BlogComponents from './blog';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { post : [],
        allPost: [],
        currentPage: ""
        }
    }
    componentDidMount() {
    

     this.setState({currentPage:  window.location.pathname });

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({allPost: res.data });
                this.setState({ post: res.data.slice(0,8) });
                console.log(this.state.post);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    allPost(){

        this.setState({ post: this.state.allPost }); 
    }
    render() { 
        return ( 
            <div>
                {this.state.currentPage}

        <div className="blog-list w-dyn-list">
            <div className="w-dyn-items">

                {this.state.post.map((item,key) =>{
                    return <BlogComponents key={item.id} title={item.title} description={item.body} ></BlogComponents>
                })}
            </div> 
        </div>
        <div className="button-wrapper">
            <button className="button w-button" onClick={this.allPost.bind(this)} >More posts→</button>
                        
            </div>
        </div>
        );
    }
}
 
export default Home;