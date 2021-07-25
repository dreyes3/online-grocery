import React, { useRef, useState } from "react"
import { Modal } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom"
// import { useAuth } from '../Contexts/AuthContext'

import { useAuthContext } from '../Contexts/AuthContext'

export default function SignUp(props) {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    // const { signup } = useAuth()

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()

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
                                    <fieldset class="form-group">
                                        <label>Enter Email/Mobile number</label>
                                        <input type="text" class="form-control" placeholder="+91 123 456 7890" />
                                    </fieldset>
                                    <fieldset class="form-group">
                                        <label>Enter Password</label>
                                        <input type="password" class="form-control" placeholder="********" />
                                    </fieldset>
                                    <fieldset class="form-group">
                                        <label>Enter Confirm Password </label>
                                        <input type="password" class="form-control" placeholder="********" />
                                    </fieldset>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                        <label class="custom-control-label" for="customCheck2">I Agree with <a
                                            href="#">Term and Conditions</a></label>
                                    </div>
                                    <fieldset class="form-group">
                                        <button type="submit" class="btn btn-lg btn-secondary btn-block">Create Your
                                            Account</button>
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
