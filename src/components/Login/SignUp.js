import React, { useRef, useState } from "react"
import { Modal, Alert, Form } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom"
import { useAuth } from '../Contexts/AuthContext'

export default function SignUp(props) {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const createAccount = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Password do not match")
        }

        try {
            setError("")
            setLoading(true)
            console.log('await')

            await createAccount(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch (e) {
            if (e.code !== undefined) {
                setError(`Code: ${e.code} | Message: ${e.message}`)
            }
        }
        setLoading(false)
    }


    return (
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
                                    {error && <Alert variant="danger">{error}</Alert>}
                                    <fieldset class="form-group">
                                        <label>Enter Email</label>
                                        <input type="text" class="form-control" placeholder="email@domain.com" ref={emailRef} />
                                    </fieldset>
                                    <fieldset class="form-group">
                                        <label>Enter Password</label>
                                        <input type="password" class="form-control" placeholder="********" ref={passwordRef} />
                                    </fieldset>
                                    <fieldset class="form-group">
                                        <label>Enter Confirm Password </label>
                                        <input type="password" class="form-control" placeholder="********" ref={passwordConfirmRef} />
                                    </fieldset>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                        <label class="custom-control-label" for="customCheck2">I Agree with <a
                                            href="#">Term and Conditions</a></label>
                                    </div>
                                    <fieldset class="form-group">
                                        <button disabled={loading} type="submit" onClick={handleSubmit} class="btn btn-lg btn-secondary btn-block">
                                            Create YourAccount
                                        </button>
                                    </fieldset>

                                </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="clearfix"></div>
                        </div>
                    </form>
                </div>
            </div>

        </Modal>


    );
}
