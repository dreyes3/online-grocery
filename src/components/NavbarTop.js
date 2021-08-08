import SignUp from '../components/Login/SignUp';
import Login from '../components/Login/Login';

import React, { useRef, useState } from "react"
import { Modal, Alert, Form } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom"
import { useAuth } from '../components/Contexts/AuthContext'


function NavbarTop() {
    const [showSignUp, setShowSignUp] = useState(false);
    const [showLogin, setShowLogin] = useState(false);


    return (
        <>
            <div class="navbar-top pt-2 pb-2">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="#" class="mb-0 text-white">
                                20% cashback for all users | Code: <strong><span class="text-light">OGOFERS13 <span
                                    class="mdi mdi-tag-faces"></span></span> </strong> </a>
                        </div>
                        <div class="col-md-6 text-right">
                            <a href="#" class="text-white ml-3 mr-3" onClick={() => setShowLogin(true)}>
                                <i class="mdi mdi-lock"></i> Sign In</a>
                            <a href="#" class="text-white" onClick={() => setShowSignUp(true)} >
                                <i class="mdi mdi-account-circle"></i> Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>

            <SignUp
                show={showSignUp}
                onHide={() => setShowSignUp(false)}
            />


            <Login
                show={showLogin}
                onHide={() => setShowLogin(false)}
            />

        </>

    );
}

export default NavbarTop;