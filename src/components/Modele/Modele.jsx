import React, { useEffect, useState } from 'react';
import './Modele.css'
import Products from '../Products/Products';

const Modele = () => {
    const [ products, setProducts]= useState([]);
    //const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Products
                    key={product.id}
                    product ={product}
                    ></Products>)
                }
            </div>
            <div className='cart-container'>
                <p className='col'>Spend time on read: {}177min</p>
                <div >
                    <h3>Bookmarked Blogs: {} 8</h3>
                    <p>Here</p>
                    
                </div>
                
            </div>
            
        </div>
    );
};

export default Modele;