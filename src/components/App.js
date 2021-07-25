
import SignUp from "./Login/SignUp"
import Login from "./Login/Login"
import NavbarTop from "./NavbarTop";
import NavbarSearch from "./NavbarSearch";
import NavbarMenu from "./NavbarMenu";
import ShopList from "./ShopList";
import ProductSlider from "./ProductSlider";
import NextDayDelivery from "./NextDayDelivery";
import Footer from "./Footer";
import { AuthProvider } from "../components/Contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../css/osahan.css";
import "../css/common.css";
import "select2/dist/css/select2.min.css";
import "owl-carousel/owl-carousel/owl.carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables/media/css/jquery.dataTables.min.css";


function App() {
  return (
    <>
      <AuthProvider>
        <NavbarTop />
        <NavbarSearch />
        <NavbarMenu />
        <ShopList />
        <ProductSlider />
        <NextDayDelivery />
        <Footer />
      </AuthProvider>
      {/* <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={SignUp} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />

          </Switch>
        </AuthProvider>
      </Router> */}


    </>
  );
}

export default App;
