import React, { Component } from 'react';
class ContactComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
    <div className="body-copy w-richtext">
        <h1>Get in touch</h1>
        <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
    </div>
    <div className="form-wrapper w-form">
        <form data-name="Email Form" id="email-form" name="email-form">
            <label for="Name">Name</label>
            <input className="text-field w-input" data-name="Name" id="Name" maxlength="256" name="Name" placeholder="Enter your name" type="text" />
            <label for="Email">Email Address</label>
            <input className="text-field w-input" data-name="Email" id="Email" maxlength="256" name="Email" placeholder="Enter your email address" required="required" type="email" />
            <label for="Message">Message</label>
            <textarea className="text-area text-field w-input" data-name="Message" id="Message" maxlength="5000" name="Message" placeholder="Enter your message" required="required"></textarea>
            <input className="button w-button" data-wait="Please wait..." type="submit" value="Submit" />
        </form>
        <div className="success-message w-form-done">
            <p className="success-text">Thank you! Your submission has been received!</p>
        </div>
        <div className="w-form-fail">
            <p>Oops! Something went wrong while submitting the form</p>
        </div>
    </div>
</div>
         );
    }
}
 
export default ContactComponent;