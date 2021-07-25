import React, { useRef, useState } from "react";
import { Modal, ModalTitle, ModalBody, ModalFooter, ModalDialog, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";


export default function Login(props) {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")

    async function handleSubmit(e) {

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
                                    <h5 class="heading-design-h5">Login Page!</h5>
                                    <fieldset class="form-group">
                                        <label>Enter Email/Mobile number</label>
                                        <input type="text" class="form-control" placeholder="+93 123 456 7890" />
                                    </fieldset>
                                    <fieldset class="form-group">
                                        <label>Enter Password</label>
                                        <input type="password" class="form-control" placeholder="********" />
                                    </fieldset>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                        <label class="custom-control-label" for="customCheck2">Keep me signed-in</label>
                                    </div>
                                    <fieldset class="form-group">
                                        <button type="submit" class="btn btn-lg btn-secondary btn-block">
                                            Login
                                        </button>
                                    </fieldset>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </form>
                </div>
            </div>

        </Modal>





    );
}