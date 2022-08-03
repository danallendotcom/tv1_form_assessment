import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
	constructor (props) {
		super(props);
		this.state = {
			first_name: '',
			last_name: '',
			email: '',
			password: '',
			formErrors: {
				first_name: '',
				last_name: '',
				email: '',
				password: ''
			},
			fieldErrorClasses: {
				first_name: '',
				last_name: '',
				email: '',
				password: ''
			},
			first_nameValid: false,
			last_nameValid: false,
			emailValid: false,
			passwordValid: false,
			formValid: false
		}
	}

	handleUserInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({[name]: value},
		() => { this.validateField(name, value) });
	}

	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let fieldErrorClasses = this.state.fieldErrorClasses;
		let first_nameValid = this.state.first_nameValid;
		let last_nameValid = this.state.last_nameValid;
		let emailValid = this.state.emailValid;
		let passwordValid = this.state.passwordValid;

		switch(fieldName) {
			case 'first_name':
				console.log('checking first name');
				first_nameValid = value.length > 0;
				if(first_nameValid) {
					fieldValidationErrors.first_name=true;
					fieldErrorClasses.first_name="";
				} else {
					fieldErrorClasses.first_name="field_error";
				}
				fieldValidationErrors.first_name =first_nameValid ? '' : 'First Name cannot be empty';
			break;
			case 'last_name':
				last_nameValid = value.length > 0;
				fieldValidationErrors.last_name = last_nameValid ? '' : 'Last Name cannot be empty';
			break;
			case 'email':
				emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
				fieldValidationErrors.email = emailValid ? '' : 'Looks like this is not an email';
			break;
			case 'password':
				passwordValid = value.length > 0;
				fieldValidationErrors.password = passwordValid ? '': 'Password cannot be empty';
				break;
			default:
			break;
		}
		this.setState({formErrors: fieldValidationErrors,
			first_nameValid: first_nameValid,
			last_nameValid: last_nameValid,
			emailValid: emailValid,
			passwordValid: passwordValid
		}, this.validateForm);
	}

	validateForm() {
		this.setState({formValid: this.state.first_nameValid && this.state.last_nameValid && this.state.emailValid && this.state.passwordValid});
	}

	errorClass(error) {
		return(error.length === 0 ? '' : 'has-error');
	}

	render () {
		return (
			<form name="contact_form" id="contact_form" class="input_frame" action="#">


				<div className={`form-group shortgap ${this.errorClass(this.state.formErrors.first_name)}`}>
					<input type="text"
						required
						className={`form-control ${this.state.fieldErrorClasses.first_name}`}
						name="first_name"
						placeholder="First Name"
						value={this.state.first_name}
		            onChange={this.handleUserInput}
					/>
					<span className="formfield_error_msg">{this.state.formErrors.first_name}</span>
				</div>
				<div className={`form-group ${this.errorClass(this.state.formErrors.last_name)}`}>
					<input type="text"
						required
						className={`form-control ${this.state.fieldErrorClasses.last_name}`}
						name="last_name"
						placeholder="Last Name"
						value={this.state.last_name}
		            onChange={this.handleUserInput}
					/>
					<span className="formfield_error_msg">{this.state.formErrors.last_name}</span>
				</div>
				<div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
					<input type="email"
						required
						className={`form-control ${this.state.fieldErrorClasses.email}`}
						name="email"
						placeholder="Email Address"
						value={this.state.email}
		            onChange={this.handleUserInput}
					/>
					<span className="formfield_error_msg">{this.state.formErrors.email}</span>
				</div>
				<div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
					<input type="password"
						required
						className={`form-control ${this.state.fieldErrorClasses.password}`}
						name="password"
						placeholder="password"
						value={this.state.password}
		            onChange={this.handleUserInput}
					/>
					<span className="formfield_error_msg">{this.state.formErrors.password}</span>
				</div>



				<button type="submit" className="green_background submit_button">CLAIM YOUR FREE TRAIL</button>



				<div class="caption centertext terms">
				By clicking the button, you are agreeing to our <a href="https://legacy-systems.biz/index.php?help/privacy-policy">Terms of Service</a>
				</div>
			</form>
		)
	}
}

export default Form;
