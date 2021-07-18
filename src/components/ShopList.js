import shopImage from '../img/shop.jpg';
import ShopFilter from '../components/ShopFilter';

function ShopList() {
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
                        <div class="row">
                            <div class="col-md-4 pmb-3">
                                <div class="product">
                                    <a href="single.html">
                                        <div class="product-header">
                                            <span class="badge badge-success">50% OFF</span>
                                            <img class="img-fluid" src="img/item/1.jpg" alt="" />
                                            <span class="veg text-success mdi mdi-circle"></span>
                                        </div>
                                        <div class="product-body">
                                            <h5>Product Title Here</h5>
                                            <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                                        </div>
                                        <div class="product-footer">
                                            <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i> <span class="regular-price">$800.99</span></p>
                                            <button type="button" class="btn btn-secondary btn-sm"><i class="mdi mdi-cart-outline"></i> Add To Cart</button>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-4 pmb-3">
                                <div class="product">
                                    <a href="single.html">
                                        <div class="product-header">
                                            <span class="badge badge-success">50% OFF</span>
                                            <img class="img-fluid" src="img/item/2.jpg" alt="" />
                                            <span class="veg text-success mdi mdi-circle"></span>
                                        </div>
                                        <div class="product-body">
                                            <h5>Product Title Here</h5>
                                            <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                                        </div>
                                        <div class="product-footer">
                                            <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i> <span class="regular-price">$800.99</span></p>
                                            <button type="button" class="btn btn-secondary btn-sm"><i class="mdi mdi-cart-outline"></i> Add To Cart</button>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-4 pmb-3">
                                <div class="product">
                                    <a href="single.html">
                                        <div class="product-header">
                                            <span class="badge badge-success">50% OFF</span>
                                            <img class="img-fluid" src="img/item/3.jpg" alt="" />
                                            <span class="veg text-success mdi mdi-circle"></span>
                                        </div>
                                        <div class="product-body">
                                            <h5>Product Title Here</h5>
                                            <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                                        </div>
                                        <div class="product-footer">
                                            <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i> <span class="regular-price">$800.99</span></p>
                                            <button type="button" class="btn btn-secondary btn-sm"><i class="mdi mdi-cart-outline"></i> Add To Cart</button>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 pmb-3">
                                <div class="product">
                                    <a href="single.html">
                                        <div class="product-header">
                                            <span class="badge badge-success">50% OFF</span>
                                            <img class="img-fluid" src="img/item/4.jpg" alt="" />
                                            <span class="veg text-success mdi mdi-circle"></span>
                                        </div>
                                        <div class="product-body">
                                            <h5>Product Title Here</h5>
                                            <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                                        </div>
                                        <div class="product-footer">
                                            <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i> <span class="regular-price">$800.99</span></p>
                                            <button type="button" class="btn btn-secondary btn-sm"><i class="mdi mdi-cart-outline"></i> Add To Cart</button>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-4 pmb-3">
                                <div class="product">
                                    <a href="single.html">
                                        <div class="product-header">
                                            <span class="badge badge-success">50% OFF</span>
                                            <img class="img-fluid" src="img/item/5.jpg" alt="" />
                                            <span class="veg text-success mdi mdi-circle"></span>
                                        </div>
                                        <div class="product-body">
                                            <h5>Product Title Here</h5>
                                            <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                                        </div>
                                        <div class="product-footer">
                                            <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i> <span class="regular-price">$800.99</span></p>
                                            <button type="button" class="btn btn-secondary btn-sm"><i class="mdi mdi-cart-outline"></i> Add To Cart</button>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-4 pmb-3">
                                <div class="product">
                                    <a href="single.html">
                                        <div class="product-header">
                                            <span class="badge badge-success">50% OFF</span>
                                            <img class="img-fluid" src="img/item/6.jpg" alt="" />
                                            <span class="veg text-success mdi mdi-circle"></span>
                                        </div>
                                        <div class="product-body">
                                            <h5>Product Title Here</h5>
                                            <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                                        </div>
                                        <div class="product-footer">
                                            <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i> <span class="regular-price">$800.99</span></p>
                                            <button type="button" class="btn btn-secondary btn-sm"><i class="mdi mdi-cart-outline"></i> Add To Cart</button>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 pmb-3">
                                <div class="product">
                                    <a href="single.html">
                                        <div class="product-header">
                                            <span class="badge badge-success">50% OFF</span>
                                            <img class="img-fluid" src="img/item/7.jpg" alt="" />
                                            <span class="veg text-success mdi mdi-circle"></span>
                                        </div>
                                        <div class="product-body">
                                            <h5>Product Title Here</h5>
                                            <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                                        </div>
                                        <div class="product-footer">
                                            <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i> <span class="regular-price">$800.99</span></p>
                                            <button type="button" class="btn btn-secondary btn-sm"><i class="mdi mdi-cart-outline"></i> Add To Cart</button>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-4 pmb-3">
                                <div class="product">
                                    <a href="single.html">
                                        <div class="product-header">
                                            <span class="badge badge-success">50% OFF</span>
                                            <img class="img-fluid" src="img/item/8.jpg" alt="" />
                                            <span class="veg text-success mdi mdi-circle"></span>
                                        </div>
                                        <div class="product-body">
                                            <h5>Product Title Here</h5>
                                            <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                                        </div>
                                        <div class="product-footer">
                                            <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i> <span class="regular-price">$800.99</span></p>
                                            <button type="button" class="btn btn-secondary btn-sm"><i class="mdi mdi-cart-outline"></i> Add To Cart</button>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-4 pmb-3">
                                <div class="product">
                                    <a href="single.html">
                                        <div class="product-header">
                                            <span class="badge badge-success">50% OFF</span>
                                            <img class="img-fluid" src="img/item/9.jpg" alt="" />
                                            <span class="veg text-success mdi mdi-circle"></span>
                                        </div>
                                        <div class="product-body">
                                            <h5>Product Title Here</h5>
                                            <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                                        </div>
                                        <div class="product-footer">
                                            <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i> <span class="regular-price">$800.99</span></p>
                                            <button type="button" class="btn btn-secondary btn-sm"><i class="mdi mdi-cart-outline"></i> Add To Cart</button>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
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