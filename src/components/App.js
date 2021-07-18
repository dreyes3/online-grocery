
import LoginModalMain from "./LoginModalMain";
import NavbarTop from "./NavbarTop";
import NavbarSearch from "./NavbarSearch";
import NavbarMenu from "./NavbarMenu";
import ShopList from "./ShopList";
import ProductSlider from "./ProductSlider";
import NextDayDelivery from "./NextDayDelivery";
import Footer from "./Footer";

import "../css/osahan.css";
import "../css/common.css";
import "select2/dist/css/select2.min.css";
import "owl-carousel/owl-carousel/owl.carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables/media/css/jquery.dataTables.min.css";
import $ from 'jquery';


function App() {
  return (
    <>
      <LoginModalMain />
      <NavbarTop />
      <NavbarSearch />
      <NavbarMenu />
      <ShopList />
      <ProductSlider />
      <NextDayDelivery />
      <Footer />
    </>
  );
}

export default App;
