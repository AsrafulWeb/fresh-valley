import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth';

const Header = () => {

    const { user, logOut } = useAuth()

    return (
        <div className="headerComp">
            <nav class="navbar navbar-expand-lg navbar-light py-4">
                <div class="container">
                    <Link class="h2" style={{ textDecoration: "none", color: "#363958" }} to="/">FRESH VALLEY</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="ms-auto"></div>
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/">Home</Link>
                            </li>
                            <li class="nav-item ms-4">
                                <Link class="nav-link" to="/orders">Orders</Link>
                            </li>
                            <li class="nav-item ms-4">
                                <Link to="/admin" class="nav-link" >Admin</Link>
                            </li>
                            <li class="nav-item ms-4">
                                <Link to="/deals" class="nav-link" >Deals</Link>
                            </li>
                            <li class="nav-item ms-5">
                                {
                                    user ?
                                        <>
                                            <div class="dropdown">
                                                <button style={{width: "50px", maxHeight: "50px"}} class="btn" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <img style={{ borderRadius: "50px" }} src={user?.photo} alt="" className="img-fluid" />
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <li><Link onClick={logOut} class="dropdown-item">Log Out</Link></li>
                                                </ul>
                                            </div>
                                        </>
                                        :
                                        <Link to="login" class="btn text-light bg-color px-4" >Login</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;