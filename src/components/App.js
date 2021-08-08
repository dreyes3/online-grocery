import NavbarTop from "./NavbarTop";
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
import FilterableProductTable from "./Tutorials/FilterableProductTable";
import ProductSearchTable from "./ProductSearch/ProductSearchTable";

const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$899.99', stocked: true, name: 'iPad' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 11' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Galaxy S20' }
];

function App() {
  return (
    <>
      {/* <FilterableProductTable products={PRODUCTS} /> */}
      <AuthProvider>
        <NavbarTop />
        <ProductSearchTable />
        <ProductSlider />
        <NextDayDelivery />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
