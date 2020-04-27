import React, { Component } from "react";
class ContactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      disabled: true,
      displayErrors: false,
      isError: {
        name: false,
        email: false,
        phone: false,
        message: false
      },
    };
  }
  handleUserInput(e) {
     
    console.dir(e.target);

    const name = e.target.name;
    const { form, isError } = this.state;
   
    if( e.target.name ==='phone'){
        e.target.value = e.target.value.replace(/\D/g,'');
    }
    const value = e.target.value;
    form[name] = value;

    const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    switch (name) {
      case "name":
        isError.name = value.length > 4 ? false : true;
        break;
      case "email":
        isError.email = validEmailRegex.test(value) ? false : true;
        break;
      case "phone":

        isError.phone = value.length === 10 ? false : true;
        break;
      case "message":
        isError.message = value.length > 20 ? false : true;
        break;
      default:
        break;
    }
    var disable= Object.values(isError).includes(true);
    this.setState({ isError, form: form ,disabled: disable});
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      // form is invalid! so we do nothing
      console.log("form ibavlid");
      this.setState({ displayErrors: true });
      return;
    }
    this.setState({ displayErrors: false });

    console.log("form valid");

    console.log(JSON.stringify(this.state.form));
  };
  render() {
    const { displayErrors, isError } = this.state;

    return (
      <div>
        <div className="body-copy w-richtext">
          <h1>Get in touch</h1>
          <p>
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam
            porta sem malesuada magna mollis euismod. Etiam porta sem malesuada
            magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem
            lacinia quam venenatis vestibulum.
          </p>
        </div>

        <div className="form-wrapper w-form">
          <form
            noValidate
            id="email-form"
            name="email-form"
            onSubmit={this.mySubmitHandler}
            className={displayErrors ? "displayErrors" : ""}
          >
            <div className={'form-group '+ (isError.name ? "invalid" : "") } >
              <label htmlFor="Name">Name</label>
              <input
                className="text-field w-input"
                onChange={(event) => this.handleUserInput(event)}
                value={this.state.form.name}
                name="name"
                placeholder="Enter your name"
                type="text"
                required
              />
              <p className="hide">
                Name Should be more than 4 character
              </p>
            </div>
            <div className={'form-group '+ (isError.email ? "invalid" : "") } >
              <label htmlFor="Email">Email Address</label>
              <input
               className="text-field w-input"
                name="email"
                value={this.state.form.email}
                onChange={(event) => this.handleUserInput(event)}
                placeholder="Enter your email address"
                type="email"
                required
              />
              <p className="hide">invalid email</p>
            </div>
            <div className={'form-group '+ (isError.phone ? "invalid" : "") } >
              <label htmlFor="phone">Phone Number</label>
              <input
                className="text-field w-input"
                name="phone"
                value={this.state.form.phone}
                onChange={(event) => this.handleUserInput(event)}
                placeholder="Enter your phone number "
                type="text" maxLength="10" 
                required
              />
              <p className="hide">
                mobile Should be 10 digit
              </p>
            </div>
            <div className={'form-group '+ (isError.message ? "invalid" : "") } >
              <label htmlFor="Message">Message</label>

              <textarea
                className="text-field w-input"
                onChange={(event) => this.handleUserInput(event)}
                value={this.state.form.message}
                name="message"
                placeholder="Enter your message"
                required
              ></textarea>
              <p className="hide">
                message Should be more than 20 character
              </p>
            </div>

            <input className="button w-button" type="submit" value="Submit" disabled={this.state.disabled} />
          </form>
          <div className="success-message w-form-done">
            <p className="success-text">
              Thank you! Your submission has been received!
            </p>
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
