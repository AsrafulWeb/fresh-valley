import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import loader from "./../../icons/loading.svg"

const Products = () => {

    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetch("https://fresh-valley-by-asraful.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="productsComp pt-5">
            <div className="container">
                <div className="row">
                    {
                        products ?
                            <>
                                {
                                    products.map(dt => <Product pd={dt} />)
                                }
                            </>
                            :
                            <div className="productsLoader text-center">
                                <div className="test-center mt-5">
                                    <img src={loader} alt="" style={{width: "60px"}} className="img-fluid" />
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;