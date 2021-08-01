import React, { useRef, useState } from "react"
import { Modal, Alert, Form } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom"
import { useAuth } from '../Contexts/AuthContext'
import './LoginStyle.css'


export default function Login(props) {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            const userCredential = await login(emailRef.current.value, passwordRef.current.value)
            console.log(userCredential.user)
            setSuccessMessage(`Login successful!`)
            document.querySelector(".login-form").style.display = "none"
            document.querySelector(".login-okay").style.display = "block"
        } catch (e) {
            if (e.code !== undefined) {
                setError(`Code: ${e.code} | Message: ${e.message}`)
            }
            setSuccessMessage("")
        }

        setLoading(false)
    }

    function closeLogin() {

    }


    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" id="login-modal" centered>
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
                                    <h5 class="heading-design-h5">Login to your account.</h5>
                                    {error && <Alert variant="danger">{error}</Alert>}
                                    {successMessage && <Alert variant="success">{successMessage}</Alert>}

                                    <div className="login-form">
                                        <fieldset class="form-group">
                                            <label>Enter Email</label>
                                            <input type="email" class="form-control" placeholder="email@domain.com" ref={emailRef} />
                                        </fieldset>
                                        <fieldset class="form-group">
                                            <label>Enter Password</label>
                                            <input type="password" class="form-control" placeholder="********" ref={passwordRef} />
                                        </fieldset>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                            <label class="custom-control-label" for="customCheck2">
                                                Remember me.
                                            </label>
                                        </div>
                                        <fieldset class="form-group">
                                            <button disabled={loading} type="submit" onClick={handleSubmit} class="btn btn-lg btn-secondary btn-block">
                                                Login
                                            </button>
                                        </fieldset>
                                    </div>

                                    <div className="login-okay">
                                        <fieldset class="form-group">
                                            <button type="submit" onClick={closeLogin} class="btn btn-lg btn-secondary btn-block">
                                                Close
                                            </button>
                                        </fieldset>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </Modal>





    );
}