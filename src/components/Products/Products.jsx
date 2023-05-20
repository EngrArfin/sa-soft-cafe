import React from 'react';
import './Products.css'

const Products = (props) => {
    const {img, name, id, seller, quantity,ratings, price} = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Id: {id}</p>
          
            
        </div>
    );
};

export default Products;