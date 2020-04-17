import React from 'react'

import FormInput from '../../components/form-input/form-input'

import './sign-in.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    HandleSubmit = (event) => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    HandleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.HandleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        HandleChange={this.HandleChange}
                        label="email"
                        required />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        HandleChange={this.HandleChange}
                        label="password"
                        required />

                    <input type="submit" value="Submit the form" />
                </form>
            </div>
        )
    }
}

export default SignIn