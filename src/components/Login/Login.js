import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import "./Login.css"
import ForgotPassword from './ForgotPassword/ForgotPassword';
import { Checkbox, TextField, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import { useAuth } from '../../auth';

const Login = () => {

    const { user, googleSignIn, logOut } = useAuth()

    const GreenCheckbox = withStyles({
        root: {
            color: green[400],
            '&$checked': {
                color: green[600],
            },
        },
        checked: {},
    })((props) => <Checkbox color="default" {...props} />);


    const GreenTextField = withStyles({
        root: {
            '& label.Mui-focused': {
                color: '#589743',
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: '#589743',
            }
        },
    })(TextField);

    const [forgotPass, setForgotPass] = useState(false)
    const [login, setLogin] = useState(true)

    return (
        <div className="loginComp">
            <nav class="navbar navbar-expand-lg navbar-light py-4">
                <div class="container">
                    <Link class="h2 text-dark" style={{ textDecoration: "none" }} to="/">FRESH VALLEY</Link>
                </div>
            </nav>
            {
                user ?
                    <div className="text-center">
                        <div className="col-5" style={{ margin: "0 auto" }}>
                            <h3>{user?.name} is already login</h3>
                            <br />
                            <br />
                            <Button variant="outlined" color="primary" onClick={logOut}>Log Out</Button>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                    :
                    <>
                        <div style={{ margin: "0 auto" }} className="col-5 mt-3">
                            <div className="loginOption">
                                {
                                    forgotPass ?
                                        <ForgotPassword TextField={GreenTextField} />
                                        :
                                        <>
                                            {
                                                login ?
                                                    <SignIn Checkbox={GreenCheckbox} TextField={GreenTextField} changeOp={setLogin} fp={setForgotPass} />
                                                    :
                                                    <SignUp TextField={GreenTextField} changeOp={setLogin} />
                                            }
                                        </>
                                }
                            </div>
                            {
                                forgotPass ?
                                    ""
                                    :
                                    <>
                                        <div className="anotherLoginOption col-8 mb-5" style={{ margin: "0 auto" }}>
                                            <div className="orText text-center">
                                                <hr />
                                                <div className="bg-light">Or</div>
                                            </div>
                                            <br />
                                            <button className="fbLoginBtn btn anotherLoginBtn w-100" style={{ borderRadius: "30px", border: "1px solid #aaa" }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{ color: "#3076FF" }} class="bi bi-facebook me-3" viewBox="0 0 16 16">
                                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>
                                                <span>Continue With Facebook</span>
                                            </button>
                                            <button onClick={googleSignIn} className="gLoginBtn btn anotherLoginBtn w-100 mt-3" style={{ borderRadius: "30px", border: "1px solid #aaa" }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{ color: "#EA4335" }} class="bi bi-google me-3" viewBox="0 0 16 16">
                                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                                </svg>
                                                <span>Continue With Google</span>
                                            </button>
                                        </div>
                                    </>
                            }
                        </div>
                    </>
            }
        </div>
    );
};

export default Login;