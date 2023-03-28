import React from 'react';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div>  
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">         
                <button class="navbar-toggler" type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
        
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li className="nav-item">
                        <Link className="nav-link" to={'/sign-in'}>
                            Login
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={'/sign-up'}>
                            Sign up
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={'/sign-out'}>
                            Log out
                        </Link>
                        </li>
                    </ul>
                </div>
            </div> 
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <Link className="navbar-brand" to={'/'}>
                    Fruits&Flowers
                </Link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item active">
                            <Link className="navbar-brand" to={'/'}>
                                Home
                            </Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link className="navbar-brand" to={'/'}>
                                Products
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link className="navbar-brand" to={'/'}>
                                Carts
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
};

export default Header;