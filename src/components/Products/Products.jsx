import React from 'react';
import './Products.css'

const Products = (props) => {
    
    const {img, user, icon, name, title, button,} = props.product;
    const handelAddToCart = props.handelAddToCart;

    
    return (
        <div className='product'>
            <img src={img} alt=""/>
            <div className='usericon'>
                <div className='user'>
                <img src={user} alt=""/>
                <h3>{name}</h3>
            </div>
            <div className='icon'>
                <p>05minread</p>
                <img src={icon} alt="" />
                
            </div>
        </div>
         <h2 >{title}</h2>
        <p>#beganer #programming</p>
        <h4>{button}</h4>
        </div>
    );
};

export default Products;