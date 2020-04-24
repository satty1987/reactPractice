import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="navigation-bar w-nav" data-animation="default" data-collapse="medium" data-contain="1" data-duration="400">
        <div className="w-container">
            <a className="logo-link w-nav-brand" href="/index">
            <h1 className="logo-text">Moon</h1></a>
            <nav className="navigation-menu w-nav-menu" role="navigation">
                <p className="main-subheading w-hidden-medium w-hidden-small w-hidden-tiny">I'm a simple responsive blog template. Easily add new blog posts using the Webflow Editor or customize your layout/design using the Webflow Designer.</p>
                <div className="divider w-hidden-medium w-hidden-small w-hidden-tiny"></div>
                
                <Link className="nav-link w-nav-link w--current" to={"/"}>Home</Link>
                <Link className="nav-link w-nav-link w--current" to={"/allpost"}>All Post</Link>
                <Link className="nav-link w-nav-link w--current" to={"/about"}>About</Link>
                <Link className="nav-link w-nav-link w--current" to={"/contact"}>Contact</Link>

                <div className="divider"></div>
                <div className="social-link-group">
                    <a className="social-icon-link w-inline-block" href="/index.html"> <img alt="description" src="http://uploads.webflow.com/56d6955f710a7126338b8b1c/56d6955f710a7126338b8ba7_social-03-white.svg" width="25" /></a>
                    <a className="social-icon-link w-inline-block" href="/index.html"> <img alt="description" src="http://uploads.webflow.com/56d6955f710a7126338b8b1c/56d6955f710a7126338b8b95_social-18-white.svg" width="25" /></a>
                    <a className="social-icon-link w-inline-block" href="/index.html"> <img alt="description" src="http://uploads.webflow.com/56d6955f710a7126338b8b1c/56d6955f710a7126338b8b92_social-15-white.svg" width="25" /></a>
                    <a className="social-icon-link w-inline-block" href="/index.html"> <img alt="description" src="http://uploads.webflow.com/56d6955f710a7126338b8b1c/56d6955f710a7126338b8b9f_social-33-white.svg" width="25" /></a>
                    <a className="social-icon-link w-inline-block" href="/index.html"> <img alt="description" src="http://uploads.webflow.com/56d6955f710a7126338b8b1c/56d6955f710a7126338b8bb3_social-07-white.svg" width="25" /></a>
                    <a className="social-icon-link w-inline-block" href="/index.html"> <img alt="description" src="http://uploads.webflow.com/56d6955f710a7126338b8b1c/56d6955f710a7126338b8b91_social-09-white.svg" width="25" /></a>
                </div>
            </nav>
            <div className="menu-button w-nav-button">
                <div className="w-icon-nav-menu"></div>
            </div>
        </div>
        <div className="w-nav-overlay" data-wf-ignore=""></div>
    </div> );
    }
}
 
export default Navigation;