function NavbarTop() {
    return (
        <div class="navbar-top pt-2 pb-2">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <a href="#" class="mb-0 text-white">
                            20% cashback for all users | Code: <strong><span class="text-light">OGOFERS13 <span
                                class="mdi mdi-tag-faces"></span></span> </strong> </a>
                    </div>
                    <div class="col-md-6 text-right">
                        <a href="#" class="text-white"><i aria-hidden="true" class="mdi mdi-map-marker-circle"></i> New York</a>
                        <a href="#" data-target="#bd-example-modal" data-toggle="modal" class="text-white ml-3 mr-3"><i
                            class="mdi mdi-lock"></i> Sign In</a>
                        <a href="#" data-target="#bd-example-modal" data-toggle="modal" class="text-white"><i
                            class="mdi mdi-account-circle"></i> Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarTop;