import React from 'react'

const Product = (props) => {
    return (
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
                    <p class="offer-price mb-0">$450.99 
                    <i class="mdi mdi-tag-outline"></i> 
                    <span class="regular-price">$800.99</span>
                    </p>
                    <button type="button" class="btn btn-secondary btn-sm">
                    <i class="mdi mdi-cart-outline"></i> Add To Cart
                    </button>
                </div>
            </a>
        </div>
    )
}

export default Product
