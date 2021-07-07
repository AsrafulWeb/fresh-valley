import Button from '@material-ui/core/Button';
import React from 'react';

const ForgotPassword = ({ TextField }) => {
    return (
        <div className="card w-100 px-5 py-5 mb-5">
            <form action="" className="signInForm">
                <h3>Login</h3>
                <br />
                <TextField id="standard-basic" label="Username or Email" type="email" name="email" className="w-100" />
                <br /><br />
                <div className="mt-4 loginFormSubmit">
                    <Button variant="contained" type="submit" color="primary">Send Email</Button>
                </div>
            </form>
        </div>
    );
};

export default ForgotPassword;