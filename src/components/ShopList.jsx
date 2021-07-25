import shopImage from '../img/shop.jpg';
import ShopFilter from './ShopFilters/ShopFilter';
import Products from './Product/Products';
import firebase from 'firebase';
import { collection, query, where } from "firebase/firestore";




const ShopList = () => {

    var firebaseConfig = {
        apiKey: "AIzaSyDOJtQFBB10L8pP5RyTuRSGL5dVaFiRSxs",
        authDomain: "online-grocer-f7915.firebaseapp.com",
        projectId: "online-grocer-f7915",
        storageBucket: "online-grocer-f7915.appspot.com",
        messagingSenderId: "14599917625",
        appId: "1:14599917625:web:7f3b3ebd4b215d6cb93de8",
        measurementId: "G-JWCTGNC62Q"
    };

    // if (!firebase.apps.length) {
    //     firebase.initializeApp(firebaseConfig);
    // } else {
    //     firebase.app();
    // }



    // const db = firebase.firestore();

    //     db.collection('User').onSnapshot((snapshot) => {
    //         console.log('snapshot');
    //         console.log(snapshot.forEach({
    //             x => console.log(x.FirstName)
    //         }));
    // console.log(snapshot.data);
    //     });


    // db.collection("User").add({
    //     FirstName: "david",
    //     LastName: "reyes"
    // });

    // const prod = db.collection("Product")
    //     .get()
    //     .then((snapshot) => {
    //         if (snapshot.exists) {
    //             console.log('Snaphost data....');
    //             console.log(snapshot.data);
    //         }
    //     });


    // console.log('firebase....');
    // console.log(prod);


    return (
        <section class="shop-list section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <ShopFilter />
                        <div class="left-ad mt-4">
                            <img class="img-fluid" src="http://via.placeholder.com/254x557" alt="" />
                        </div>
                    </div>
                    <div class="col-md-9">
                        <a href="#"><img class="img-fluid mb-3" src={shopImage} alt="" /></a>
                        <div class="shop-head">
                            <a href="#"><span class="mdi mdi-home"></span> Home</a> <span class="mdi mdi-chevron-right"></span> <a href="#">Fruits & Vegetables</a> <span class="mdi mdi-chevron-right"></span> <a href="#">Fruits</a>
                            <div class="btn-group float-right mt-2">
                                <button type="button" class="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Sort by Products &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#">Relevance</a>
                                    <a class="dropdown-item" href="#">Price (Low to High)</a>
                                    <a class="dropdown-item" href="#">Price (High to Low)</a>
                                    <a class="dropdown-item" href="#">Discount (High to Low)</a>
                                    <a class="dropdown-item" href="#">Name (A to Z)</a>
                                </div>
                            </div>
                            <h5 class="mb-3">Fruits</h5>
                        </div>
                        <Products />

                        <nav>
                            <ul class="pagination justify-content-center">
                                <li class="page-item disabled">
                                    <span class="page-link">Previous</span>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item active">
                                    <span class="page-link">
                                        2
                                        <span class="sr-only">(current)</span>
                                    </span>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShopList;