import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import "./css/osahan.css";
import "./css/common.css";
import "select2/dist/css/select2.min.css";
import "owl-carousel/owl-carousel/owl.carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables/media/css/jquery.dataTables.min.css";

import "bootstrap/dist/js/bootstrap.js";

// import "./js/contact_me.js";
// import "./js/custom.js";
// import "./js/jqBootstrapValidation.js";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
)
