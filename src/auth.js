import firebase from "firebase/app";
import "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import firebaseConfig from "./firebase.config";

firebase.initializeApp(firebaseConfig)

// Context create, use and export 
const AuthContext = createContext()
export const AuthContextProvider = (props) => {
    const auth = Auth()
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

// Privet route create and export
export const PrivateRouteForLogin = ({ children, ...rest }) => {
    let auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

// Privet route create and export
export const PrivateRouteForAdmin = ({ children, ...rest }) => {
    let auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth?.user?
                // .email === "mxasraful1@gmail.com" ? 
                (
                    children
                ) : auth?.user ? 
                    (
                        <Redirect
                            to={{
                                pathname: "/not-admin",
                                state: { from: location }
                            }}
                        />
                    )
                    :
                    (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}


const Auth = () => {

    const [user, setUser] = useState(null)

    const [error, setError] = useState(false)

    const [errMsg, setErrMsg] = useState(null)

    // Filter Users Data
    const getUser = user => {
        const { displayName, email, photoURL } = user;
        return { name: displayName, email, photo: photoURL }
    }

    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(data => {
                setError(false)
                console.log(data)
                setUser(getUser(data))
            })
            .catch(err => {
                setError(true)
                setErrMsg(err.message)
            })
    }


    // LogOut
    const logOut = () => {
        firebase.auth().signOut()
            .then(res => {
                setUser(null)
                setError(false)
                setErrMsg(null)
            })
            .catch(err => {
                setError(true)
                setErrMsg(err.message)
            });
    }

    // Menage Users Account Data
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (usr) {
            if (usr) {
                const currentUser = getUser(usr)
                setUser(currentUser)
            } else {

            }
        });
    }, [])

    return {
        user,
        error,
        errMsg,
        googleSignIn,
        logOut
    }
}