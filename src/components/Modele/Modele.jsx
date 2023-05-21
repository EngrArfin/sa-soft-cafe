import React, { useEffect, useState } from 'react';
import './Modele.css'
import Products from '../Products/Products';

const Modele = () => {
    const [ products, setProducts]= useState([]);
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handelAddToCart = (product) => {
        const newCart =[...cart, product];
        setCart(newCart);    
}

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Products
                    key={product.id}
                    product ={product}
                    handelAddToCart ={handelAddToCart}
                    ></Products>)
                }
            </div>
            <div className='cart-container'>
                <p className='col'>Spend time on read: {}177min</p>
                <div className='summary'>
                    <h3>Bookmarked Blogs: {} 8</h3>
                    <div className='add'>
                        <p>Master Microsoft Power Platform <br/> and Become an In-Demand!</p>
                        <p>How to get your first job self-taught <br /> programmer in top company</p>
                        <p>Master Microsoft Power Platform <br/> and Become an In-Demand!</p>
                        <p>How to get your first job self-taught <br /> programmer in top company</p>
                        <p>Master Microsoft Power Platform <br/> and Become an In-Demand!</p>
                        <p>How to get your first job self-taught <br /> programmer in top company</p>
                        <p>Master Microsoft Power Platform <br/> and Become an In-Demand!</p>
                        <p>Master Microsoft Power Platform <br/> and Become an In-Demand!</p>
                        <p>How to get your first job self-taught <br /> programmer in top company</p>
                        <p>Master Microsoft Power Platform <br/> and Become an In-Demand!</p>
                        <p>Master Microsoft Power Platform <br/> and Become an In-Demand!</p>
                        <p>How to get your first job self-taught <br /> programmer in top company</p>
                        <p>Master Microsoft Power Platform <br/> and Become an In-Demand!</p>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    );
};

export default Modele;