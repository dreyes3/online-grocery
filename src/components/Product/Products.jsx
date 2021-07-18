import React from 'react'
import Product from './Product';

const products = [
    { id: 1, name: 'product1', description: 'prod1 desc', offerPrice: '30', discountPrice: '20' },
    { id: 2, name: 'product2', description: 'prod2 desc', offerPrice: '20', discountPrice: '10' },
    { id: 3, name: 'product3', description: 'prod3 desc', offerPrice: '10', discountPrice: '5' },
    { id: 4, name: 'product4', description: 'prod4 desc', offerPrice: '90', discountPrice: '80' },
    { id: 5, name: 'product5', description: 'prod5 desc', offerPrice: '30', discountPrice: '20' },
    { id: 6, name: 'product6', description: 'prod6 desc', offerPrice: '20', discountPrice: '10' },
    { id: 7, name: 'product7', description: 'prod7 desc', offerPrice: '30', discountPrice: '20' },
    { id: 8, name: 'product8', description: 'prod8 desc', offerPrice: '20', discountPrice: '10' },
    { id: 9, name: 'product9', description: 'prod9 desc', offerPrice: '10', discountPrice: '5' }
];

const Products = () => {

    return (
        <div class="row">
            {products.map((product) => (
                <div class="col-md-4 pmb-3">

                    <div class="product">
                        <a href="single.html">
                            <div class="product-header">
                                <span class="badge badge-success">50% OFF</span>
                                <img class="img-fluid" src="img/item/1.jpg" alt="" />
                                <span class="veg text-success mdi mdi-circle"></span>
                            </div>
                            <div class="product-body">
                                <h5>{product.name}</h5>
                                <h6><strong><span class="mdi mdi-approval"></span>{product.description}</strong> - 500 gm</h6>
                            </div>
                            <div class="product-footer">
                                <p class="offer-price mb-0">{product.offerPrice}
                                    <i class="mdi mdi-tag-outline"></i>
                                    <span class="regular-price">{product.discountPrice}</span>
                                </p>
                                <button type="button" class="btn btn-secondary btn-sm">
                                    <i class="mdi mdi-cart-outline"></i> Add To Cart
                                </button>
                            </div>
                        </a>
                    </div>

                </div>
            ))}
        </div>
    );

}

export default Products
