import React from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    HandleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("The passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });

            this.setState = {
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            };
        } catch (error) {
            console.log(error.message);
        }
    };

    HandleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="signup">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.HandleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.HandleChange}
                        label="Display Name"
                        required
                    ></FormInput>{' '}
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.HandleChange}
                        label="Email"
                        required
                    ></FormInput>{' '}
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.HandleChange}
                        label="Password"
                        required
                    ></FormInput>{' '}
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.HandleChange}
                        label="Confirm Password"
                        required
                    ></FormInput>
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
