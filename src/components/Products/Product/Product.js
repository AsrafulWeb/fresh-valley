import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({pd}) => {
    return (
        <div className="productItem col-sm-4 mb-4">
            <div className="card" style={{border: "none"}}>
                <div className="card-body text-center">
                    <img src={pd.img} alt="" className="img-fluid" style={{maxHeight: "200px"}} />
                    <br />
                    <br />
                    <h4>{pd.name}</h4>
                    <div className="productPriceAndBuy d-flex mt-4">
                        <h1 className="color productPrice me-auto">৳ {pd.price}</h1>
                        <Link to={"/checkout/"+pd.id} className="btn btn-success btn-lg bg-color px-4 productBuyNowBtn">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;