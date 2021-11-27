import React from 'react'
import { Link } from "react-router-dom"
import productDefaultImage from '../../images/productDefaultImage.jpg'
import './style.scss'

export default function Product({ data}) {
    return (
    <div className="product-box col-md-4">
        <figure className="card card-product-grid">
            <div className="img-wrap" style={{ minHeight : '464px'}}>
                    <span className="badge"> {data.category ? data.category : 'New' } </span>
                    <Link 
                        to={`/product/${data.productId}`}
                        state={{ name: `${data.name}`,
                                 price: `${data.price}`,
                                 description: `${data.description}`,
                                 category: `${data.category}`,
                                 image: `${data.image}`
                              }}
                       className="link-style">
                        <span className="title">{data.name ? data.name : 'Product Name'}</span >
                    </Link>
                    <div className="price-wrap mt-2">
                        <strong> <span className="price">{data.price ? data.price : '0' } $ </span> </strong>
                    </div>
                    <img src={data.image === undefined || data.image == '' ? productDefaultImage : data.image}
                         style ={{ maxHeight: '100%', maxWidth: '100%'}}
                     />
            </div>
            <figcaption className="info-wrap">
                <div className="fix-height">
                        <span className="price">{data.description}</span>
                </div>
                    <Link 
                        to={`/product/${data.productId}`}
                        state={{
                            name: `${data.name}`,
                            price: `${data.price}`,
                            description: `${data.description}`,
                            category: `${data.category}`,
                             image: `${data.image}`}} >
                     <span className="btn btn-block btn-dark">Buy Product </span >
                     </Link>
            </figcaption>
        </figure>
    </div>

    )
}
