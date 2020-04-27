import React, { Component } from 'react';
import BlogComponents from './blog';
import axios from 'axios';
import { Link } from "react-router-dom";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { post : [],
        allPost: []
        }
    }

    getData(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({allPost: res.data });
                if(this.props.match.path ==="/allpost"){
                    this.setState({ post: res.data });
                }else{
                    this.setState({ post: res.data.slice(0,8) });
                }
               
                console.log(this.state.post);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    componentDidMount() {   
this.getData();

    }

    allPost(){

        this.setState({ post: this.state.allPost }); 
    }
    render() { 
        return ( 
            <div>   
        <div className="blog-list w-dyn-list">
            <div className="w-dyn-items">

{this.props.match.path==="/allpost" ? 

                this.state.allPost.map((item,key) =>{
                    return <BlogComponents key={item.id} title={item.title} description={item.body} ></BlogComponents>
                })
                :
                this.state.post.map((item,key) =>{
                    return <BlogComponents key={item.id} title={item.title} description={item.body} ></BlogComponents>
                })

 }
            </div> 
        </div>
        <div className="button-wrapper">

                                      <Link className="button w-button" to={"/allpost"}>More posts→</Link>
  
            </div>
        </div>
        );
    }
}
 
export default Home;