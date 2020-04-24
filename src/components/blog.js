import React, { Component } from 'react';
class BlogComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="w-dyn-item">
    <div className="post-wrapper"><a className="blog-title-link w-inline-block" href="/posts/coffee-variety-macchiato-as-organic-ut-variety-caffeine-americano"><h1 className="blog-title">{this.props.title}</h1></a>
        <div className="post-info-wrapper">
            <div className="post-info">March 2, 2016</div>
            <div className="post-info">|</div><a className="post-info when-link" href="/categories/travel">Travel</a></div>
        <p className="post-summary">
            {this.props.description}
          </p>
           <a className="button-round w-button" href="/posts/coffee-variety-macchiato-as-organic-ut-variety-caffeine-americano">Continue reading →</a></div>
</div>
         );
    }
}
 
export default BlogComponents;