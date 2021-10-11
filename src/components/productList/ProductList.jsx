import React from 'react'
import Product from '../product/Product'
import './productList.css'
import {products} from '../../data';

const ProductList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">My Creative skills & experiences</h1>
                <p className="pl-desc">My few years of IT experience has given me a strong foundation for web development and building complex solutions. I have created successful responsive web applications that are fast, easy to use, and built with best practices</p>
            </div>
            <div className="pl-list">
                {
                    products.map(item => (
                        <Product key={item.id} img={item.img} link={item.link} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList
