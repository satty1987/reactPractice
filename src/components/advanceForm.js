import React, { Component } from 'react'
class AdvanceForm extends Component {
    constructor (props) {
        super(props);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            isFormValid: false,
            formControls: {

                name: {
                    value: '',
                    placeholder: 'What is your name',
                    valid: false,
                    validationRules: {
                        minLength: 4,
                        isRequired: true
                    },
                    touched: false
                },
                address: {
                    value: '',
                    placeholder: 'What is your address',
                    valid: false,
                    validationRules: {
                        minLength: 4,
                        isRequired: true
                    },
                    touched: false
                },
                email: {
                    value: '',
                    placeholder: 'What is your email',
                    valid: false,
                    validationRules: {
                        isRequired: true,
                        isEmail: true
                    },
                    touched: false
                },
                password: {
                    value: '',
                    placeholder: 'Password',
                    valid: false,
                    validationRules: {
                        isRequired: true,
                        minLength: 8
                    },
                    touched: false
                },
                gender: {
                    value: 'male',
                    placeholder: 'What is your gender',
                    valid: true,
                    touched: false,
                    validationRules: {
                        isRequired: true,
                    },
                    options: [
                        { value: 'male', displayValue: 'Male' },
                        { value: 'female', displayValue: 'Female' }
                    ]
                },
                my_radio: {
                    value: '',
                    placeholder: 'Are you a frontend developer?',
                    valid: false,
                    touched: false,
                    validationRules: {
                        // isRequired: true,
                    },
                    options: [
                        { value: 1, displayValue: 'Yes' },
                        { value: 0, displayValue: 'No' }
                      
                    ]
                }

            }

        };

    }
    handleUserInput(event) {
        const name = event.target.name;
        const value = event.target.value;
        console.log(event.target.value);
        const updatedControls = { ...this.state.formControls };
        const updatedFormElement = { ...updatedControls[name] };
        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = this.validationRules(value, updatedFormElement.validationRules);

        updatedControls[name] = updatedFormElement;
        let isFormValid = true
        for (const key in updatedControls) {

            isFormValid = updatedControls[key].valid && isFormValid;

        }

        this.setState({
            isFormValid: isFormValid,
            formControls: updatedControls
        });

    }
    validationRules(value, rules) {
        let isValid = true;

        for (let rule in rules) {

            switch (rule) {
                case 'minLength': isValid = isValid && this.minLengthValidator(value, rules[rule]); break;
                case 'isRequired': isValid = isValid && this.requiredValidator(value); break;
                case 'isEmail': isValid = isValid && this.emailValidator(value); break;

                default: isValid = true;
            }

        }

        return isValid;
    }
    minLengthValidator(value, minLength) {
        return value.length >= minLength;
    }
    requiredValidator(value) {
        return value.trim() !== '';
    }
    emailValidator(value) {
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

        return re.test(String(value).toLowerCase());
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('A name was submitted: ');

    }
    render() {
        const { formControls } = this.state;
        return (
            <div className="body-copy w-richtext">
                <h1>Sign Up</h1>

                <div className="form-wrapper w-form">
                    <form
                        noValidate
                        id="email-form"
                        name="email-form"
                        onSubmit={this.handleSubmit}
                    >
                        <div className={'form-group '} >
                            <label htmlFor="Name">Name</label>
                            <input
                                className="text-field w-input"
                                onChange={this.handleUserInput}
                                name="name"
                                placeholder={formControls.name.placeholder}
                                type="text"
                                required
                            />
                            <p className={!formControls.name.valid && formControls.name.touched ? 'invalid hide' : 'hide'}>Name Should be more than 4 character </p>
                        </div>

                        <div className={'form-group '} >
                            <label htmlFor="Name">Email</label>
                            <input
                                className="text-field w-input"
                                onChange={this.handleUserInput}
                                name="email"
                                placeholder={formControls.email.placeholder}
                                type="text"
                                required
                            />
                            <p className={!formControls.email.valid && formControls.email.touched ? 'invalid hide' : 'hide'}>Enter Valid email </p>
                        </div>

                        <div className={'form-group '} >
                            <label htmlFor="Name">Password</label>
                            <input
                                className="text-field w-input"
                                onChange={this.handleUserInput}
                                name="password"
                                placeholder={formControls.password.placeholder}
                                type="text"
                                required
                            />
                    <p className={!formControls.password.valid && formControls.password.touched ? 'invalid hide' : 'hide'}>Enter Valid password </p>

                        </div>

                        <div className={'form-group '} >
                            <label htmlFor="Name">Address</label>
                            <input
                                className="text-field w-input"
                                onChange={this.handleUserInput}
                                name="address"
                                placeholder={formControls.address.placeholder}
                                type="text"

                            />
                            <p className="hide">Name Should be more than 4 character </p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Name">Gender</label>
                            <select className="text-field w-input"
                                value={formControls.gender.value}
                                onChange={this.handleUserInput} name="gender">
                                {formControls.gender.options.map(option => (
                                    <option value={option.value} key={option.value}>
                                        {option.displayValue}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className={'form-group '} >
                            <label htmlFor="Name">{formControls.my_radio.placeholder}</label>
                            {formControls.my_radio.options.map((option) => {
                                return (
                                
                                    <div key={option.value}>
                                    <input type="radio"  name="my_radio" id={"id_"+option.value}  value={option.value}   onChange={this.handleUserInput}/>
                                    <label htmlFor={"id_"+option.value}>{option.displayValue}</label>
                                  </div>
                                )
                            }

                            )}
                        </div>
<br/>

                        <input className="button w-button" type="submit" value="Submit" disabled={!this.state.isFormValid} />

                    </form>
                </div>
            </div>
        );
    }
}

export default AdvanceForm;