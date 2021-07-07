import Button from '@material-ui/core/Button';
import React from 'react';

const SignIn = ({ changeOp, fp, Checkbox, TextField }) => {

    return (
        <div className="card w-100 px-5 py-5 mb-5">
            <form action="" className="signInForm">
                <h3>Login</h3>
                <br />
                <TextField id="standard-basic" label="Username or Email" type="email" name="email" className="w-100" required />
                <br /><br />
                <TextField color="green" id="standard-basic" label="Password" type="password" name="password" className="w-100" required />
                <div className="d-flex mt-4">
                    <div className="rememberCheckBox me-auto">
                        <Checkbox id="rememberCheck" />
                        <label htmlFor="rememberCheck"> Remember Me</label>
                    </div>
                    <div className="">
                        <button type="button" onClick={() => fp(true)} className="btn">Forgot Password</button>
                    </div>
                </div>
                <div className="mt-4 loginFormSubmit">
                    <Button variant="contained" type="submit" color="primary">Sign In</Button>
                </div>
                <div className="mt-3 text-center">
                    <span>Already have an account <span style={{ cursor: "pointer" }} className="color" onClick={() => changeOp(false)} >Create Account</span></span>
                </div>
            </form>
        </div>
    );
};

export default SignIn;