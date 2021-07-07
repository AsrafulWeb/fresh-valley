import Button from '@material-ui/core/Button';
import React from 'react';

const SignUp = ({ changeOp, Checkbox, TextField  }) => {
    return (
        <div className="card w-100 px-5 py-5 mb-5">
            <form action="" className="signInForm">
                <h3>Create Account</h3>
                <br />
                <TextField id="standard-basic" label="Name" type="name" name="name" className="w-100" />
                <br /><br />
                <TextField id="standard-basic" label="Username or Email" type="email" name="email" className="w-100" />
                <br /><br />
                <TextField id="standard-basic" label="Password" type="password" name="password" className="w-100" />
                <br /><br />
                <TextField id="standard-basic" label="Confirm Password" type="password" name="confirmPassword" className="w-100" />
                <div className="mt-4 loginFormSubmit">
                    <Button variant="contained" type="submit" color="primary">Sign Up</Button>
                </div>
                <div className="mt-3 text-center">
                    <span>Already have an account <span style={{ cursor: "pointer" }} className="color" onClick={() => changeOp(true)} >Sign In</span></span>
                </div>
            </form>
        </div>
    );
};

export default SignUp;