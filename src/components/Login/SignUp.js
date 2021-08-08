import React, { useRef, useState, useEffect } from "react"
import { Modal, Alert, Form } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom"
import { useAuth } from '../Contexts/AuthContext'
import './LoginStyle.css'
import Login from './Login'


export default function SignUp(props) {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const fullNameRef = useRef()
    const { signup, currentUser, updateProfile } = useAuth()
    const [infoMessage, setInfoMessage] = useState("")
    const [infoMessageVariant, setInfoMessageVariant] = useState("")
    const [loading, setLoading] = useState(false)
    const [showLogin, setShowLogin] = useState(false);


    useEffect(() => {
        console.log(
            "This only happens ONCE.  But it happens AFTER the initial render."
        );

        setInfoMessage("")
    }, []);


    function showSignUpFields(show) {
        const display = show ? "block" : "none"
        document.querySelector(".sign-up-fields").style.display = display
    }

    function showSignUpSuccessful(show) {
        const display = show ? "block" : "none"
        document.querySelector(".sign-up-successful").style.display = display
    }


    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setInfoMessage("Password do not match")
        }

        try {
            setInfoMessage("")
            setLoading(true)

            await signup(emailRef.current.value, passwordRef.current.value)
            const profile = updateProfile(fullNameRef.current.value)
            console.log(JSON.stringify(profile))

            setInfoMessage("Sign up successful!")
            setInfoMessageVariant("success")

            showSignUpFields(false)
            showSignUpSuccessful(true)


        } catch (e) {
            if (e.code !== undefined) {
                setInfoMessage(`Code: ${e.code} | Message: ${e.message}`)
                setInfoMessageVariant("danger")
            }
        }
        setLoading(false)
    }


    return (
        <>
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <div class="row">
                    <div class="col-lg-6 pad-right-0">
                        <div class="login-modal-left">
                        </div>
                    </div>
                    <div class="col-lg-6 pad-left-0">
                        <form>
                            <div class="login-modal-right">
                                <div class="tab-content">
                                    <div class="tab-pane active" id="register" role="tabpanel">
                                        <h5 class="heading-design-h5">Register Now!</h5>
                                        {currentUser && currentUser.email}
                                        {currentUser && currentUser.displayName}
                                        {infoMessage && <Alert variant={infoMessageVariant}>{infoMessage}</Alert>}

                                        <div class="sign-up-fields" disabled={loading}>
                                            <fieldset class="form-group">
                                                <label>Enter Email</label>
                                                <input type="text" class="form-control" placeholder="email@domain.com" ref={emailRef} />
                                            </fieldset>
                                            <fieldset class="form-group">
                                                <label>Enter Full Name</label>
                                                <input type="text" class="form-control" placeholder="John Smith" ref={fullNameRef} />
                                            </fieldset>
                                            <fieldset class="form-group">
                                                <label>Enter Password</label>
                                                <input type="password" class="form-control" placeholder="********" ref={passwordRef} />
                                            </fieldset>
                                            <fieldset class="form-group">
                                                <label>Enter Confirm Password </label>
                                                <input type="password" class="form-control" placeholder="********" ref={passwordConfirmRef} />
                                            </fieldset>

                                            <fieldset class="form-group">
                                                <button type="submit" onClick={handleSubmit} class="btn btn-lg btn-secondary btn-block">
                                                    Create Your Account
                                                </button>
                                            </fieldset>
                                        </div>

                                        <div class="sign-up-successful">
                                            <fieldset class="form-group">
                                                <button type="submit" onClick={() => setShowLogin(true)} class="btn btn-lg btn-secondary btn-block">
                                                    Login to your account
                                                </button>
                                            </fieldset>
                                        </div>



                                    </div>
                                </div>
                                <div class="clearfix"></div>
                                <div class="clearfix"></div>
                            </div>
                        </form>
                    </div>
                </div>

            </Modal>

            <Login
                show={showLogin}
                onHide={() => setShowLogin(false)}
            />
        </>


    );
}
