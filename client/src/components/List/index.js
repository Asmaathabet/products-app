import React , { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTh } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

import Pagination from '../Pagination'
import Product from '../Product'

export default function List() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios('http://localhost:4000/products')
         .then(res => {
             setProducts(res.data);
          })
    }, []);

    return (
        <div>
            <div className="form-inline">
                <span className="mr-md-auto"> <b>{products.length}</b> Items found </span>
                <select className="mr-2 form-control">
                    <option>Latest items</option>
                    <option>Trending</option>
                    <option>Most Popular</option>
                    <option>Cheapest</option>
                </select>
                <div className="btn-group">
                    <a href="#" className="btn btn-outline-secondary" data-toggle="tooltip" title="List view">
                        <FontAwesomeIcon icon={faBars}  /> </a>
                    <a href="#" className="btn  btn-outline-secondary active" data-toggle="tooltip" title="Grid view">
                        <FontAwesomeIcon icon={faTh} /></a>
                </div>
            </div>
            <br />
            {products.length > 0 ? (
                    <div className="row">
                        <Pagination 
                            data={products}
                            RenderComponent={Product}
                            title="Products"
                            pageLimit={5}
                            dataLimit={9}
                        />
                    </div>
            ) : (
                <h1>No Products to display</h1>
            )}
            <br />
        </div>
    )
}




