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
					/>
				</div>
				<div className={`form-group ${this.errorClass(this.state.formErrors.last_name)}`}>
					<input type="text"
						required
						className={`form-control ${this.state.fieldErrorClasses.last_name}`}
						name="last_name"
						placeholder="Last Name"
					/>
				</div>
				<div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
					<input type="email"
						required
						className={`form-control ${this.state.fieldErrorClasses.email}`}
						name="email"
						placeholder="Email Address"
					/>
				</div>
				<div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
					<input type="password"
						required
						className={`form-control ${this.state.fieldErrorClasses.password}`}
						name="password"
						placeholder="password"
					/>
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
