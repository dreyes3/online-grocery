import React from 'react'
import Product from './Product';

const products = [
    { id: 1, name: 'milo', description: 'prod1 desc', offerPrice: '30', discountPrice: '20', discountMessage: '10% OFF' },
    { id: 2, name: 'nescafe', description: 'prod2 desc', offerPrice: '20', discountPrice: '10', discountMessage: '20% OFF' },
    { id: 3, name: 'coke', description: 'prod3 desc', offerPrice: '10', discountPrice: '5', discountMessage: '30% OFF' },
    { id: 4, name: 'glass', description: 'prod4 desc', offerPrice: '90', discountPrice: '80', discountMessage: '40% OFF' },
    { id: 5, name: 'piatos', description: 'prod5 desc', offerPrice: '30', discountPrice: '20', discountMessage: '50% OFF' },
    { id: 6, name: 'piatos big', description: 'prod6 desc', offerPrice: '20', discountPrice: '10', discountMessage: '60% OFF' },
    { id: 7, name: 'nova', description: 'prod7 desc', offerPrice: '30', discountPrice: '20', discountMessage: '70% OFF' },
    { id: 8, name: 'small nova', description: 'prod8 desc', offerPrice: '20', discountPrice: '10', discountMessage: '80% OFF' },
    { id: 9, name: 'chips ahoy', description: 'prod9 desc', offerPrice: '10', discountPrice: '5', discountMessage: '90% OFF' }
];

const Products = (props) => {

    const searchText = props.searchText
    const filteredProducts = []

    products.forEach((prod) => {
        if (prod.name.indexOf(searchText) === -1) {
            return
        }

        filteredProducts.push(prod)
    })



    return (
        <div class="row">
            {filteredProducts.map((product) => (
                <Product product={product} key={product.id} />
            ))}
        </div>
    );

}

export default Products
