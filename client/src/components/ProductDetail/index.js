import React from 'react'
import { useParams, useLocation, Link  } from "react-router-dom"
import productDefaultImage from '../../images/productDefaultImage.jpg'
import './style.scss'

export default function ProductDetail() {
    const { productId } = useParams();
    const location = useLocation()
    const { name, price, description, category, image} = location.state
      
    return (
        <div>
            <h3> Product Details </h3>
             <div className="product-details">
                    <div className="product-details-image">
                    <img src={(image !== undefined || image !== '' ? productDefaultImage : image)} alt='' className="u-image u-image-default u-product-control u-image-1"
                            data-image-width="750" data-image-height="750" />
                      </div>
                    <div className="product-details-data" >
                            <h2>
                               <span> {name} </span>
                            </h2>

                            <div>
                                <h5>  - {category} - </h5>
                            </div>
                               
                            <div> 
                                <div style={{ fontSize: '4.5rem', fontWeight: '700'}}>
                                    {price} $
                                    </div>
                            </div>

                            <div>
                                    <p> {description} </p>
                            </div>
                         
                         <div className="product-details-data-btn">
                                 <span className="btn btn-block btn-dark">Buy Product </span >
                      <Link 
                        to={`/product/${productId}/customize`}
                        >
                                 <span className="btn btn-block btn-dark">Customize Product </span >
                           </Link>
                            </div>
                           
                       </div>
                      
                     </div>
            </div >
    )
}
