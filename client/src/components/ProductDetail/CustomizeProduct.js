import React, { useState, useEffect, useMemo  } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function CustomizeProduct( ) {
    const { productId } = useParams();
    const { register } = useForm();
    const navigate  = useNavigate();
  
    const [productData, setProductData] = useState({})
    const [nameInputValue, setNameInputValue] = useState('');
    const [categoryInputValue, setCategoryInputValue] = useState('');
    const [priceInputValue, setPriceInputValue] = useState('');
    const [descriptionInputValue, setDescriptionInputValue] = useState('')
    const [imageInputValue, setImageInputValue] = useState('')
   
    useEffect(() => {
        axios(`http://localhost:4000/products/${productId}`)
            .then(res => {
                let productData = res.data;
                setProductData(productData);
                setNameInputValue(productData.name);
                setCategoryInputValue(productData.category);
                setPriceInputValue(productData.price);
                setDescriptionInputValue(productData.description);
                setImageInputValue(productData.image);
            })
    }, productId);

    const handleSubmit = (e) => {
       e.preventDefault();
        const product = { 
                      productId: productId,
                      name: nameInputValue,
                      category: categoryInputValue,
                      price:priceInputValue,
                      description: descriptionInputValue,
                      image: imageInputValue
                      };
        axios.put(`http://localhost:4000/products/${productId}`, product)
            .then(response => 
                 console.log(response)
                  );

                navigate('/')
    }
   
    return (
        <div>
            <h3> Product Details </h3>
            <div className="product-details">
                <form onSubmit={handleSubmit}>
                    <div className="product-details-data">
                        <input {...register("productId")} value={productId} hidden/>
                    <div className="input-rows">
                         <label> Product Name : </label> 

                        <input 
                           {...register("name")} 
                          type="text" 
                          value={nameInputValue}
                         onChange={(e) => setNameInputValue(e.target.value)}
                           placeholder={productData.name}
                           />
                    </div>
                        <div className="input-rows">
                        <label> Product category : </label>
                        
                        <input 
                         {...register("category")}
                         type="text" 
                         value={categoryInputValue}
                         onChange={(e) => setCategoryInputValue(e.target.value)}
                         placeholder={productData.category}
                            />
                    </div>

                        <div className="input-rows">
                        <label> Product Price : </label>

                        <input
                            {...register("price")}
                            type="text"
                            value={priceInputValue}
                            onChange={(e) => setPriceInputValue(e.target.value)}
                            placeholder={productData.price}
                          />
                    </div>

                        <div className="input-rows">
                        <label> Product description : </label>
                        
                        <textarea  
                           {...register("description")} 
                            value={descriptionInputValue}
                            onChange={(e) => setDescriptionInputValue(e.target.value)}
                            placeholder={productData.description}
                        />
                    </div>
                        <div className="input-rows" style={{ marginRight: '200px'}}>
                            <label> Product Image : </label>
                            <input
                                {...register("image")}
                                type="text"
                                value={imageInputValue}
                                onChange={(e) => setImageInputValue(e.target.value)}
                                placeholder={productData.image}
                             />
                           
                        </div>
                        <div className="input-rows" >
                      <div> <img src={imageInputValue} style={{width:'200px', heigth:'200px'}} /> </div> 
                            </div>
                    <div className="product-details-data-btn">
                        {/* <Link
                            to={`/product/${productId}/customize`}
                        > */}
                      <input type="submit" className="btn btn-block btn-dark" value="Customize" /> 
                        {/* </Link> */}
                 </div>

                </div>
            </form>
                </div>
        </div>
    )
}
