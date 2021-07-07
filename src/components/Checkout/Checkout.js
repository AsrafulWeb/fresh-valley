import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../auth';
import loader from "./../../icons/loading.svg"
import './Checkout.css'

const Checkout = () => {

    const { pdId } = useParams()

    const { user } = useAuth()

    const [product, setProduct] = useState(null)
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        fetch(`https://fresh-valley-by-asraful.herokuapp.com/product/${pdId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [pdId])

    const placeOrder = () => {
        fetch('https://fresh-valley-by-asraful.herokuapp.com/placeorder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ name: product.name, id: product.id, userEmail: user?.email, quantity: quantity, orderDate: new Date(), img: product.img, price: quantity * product.price + 50 })
        })
            .then(data => {
                window.history.back()
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="checkoutComp">
            <div className="container">
                <h1 className="mt-5 mb-4">Checkout</h1>
                <div className="checkoutRaf">
                    {
                        product ? <>
                            <div className="row text-secondary">
                                <div className="col-8">Description</div>
                                <div className="col-3">Quantity</div>
                                <div className="col-1">Price</div>
                            </div>
                            <hr />
                            <div className="checkoutItems">
                                <div className="row text-dark mb-2 checkoutItem">
                                    <div className="col-8 h6">{product?.name}</div>
                                    <div className="col-3 h6">{quantity}</div>
                                    <div className="col-1 h6">{product?.price} ৳</div>
                                </div>
                            </div>
                            <hr />
                            <div className="checkoutDelivery">
                                <div className="row text-dark mb-2 checkoutItem">
                                    <div className="col-8 h6">Delivery Charge</div>
                                    <div className="col-3 h6">{quantity}</div>
                                    <div className="col-1 h6">50 ৳</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8 h5"></div>
                                <div className="col-4 h5">
                                    <hr />
                                </div>
                            </div>
                            <div className="row text-dark mb-2 checkoutItem">
                                <div className="col-8 h5"></div>
                                <div className="col-3 h5">Total :</div>
                                <div className="col-1 h5">{product?.price + 50} ৳</div>
                            </div>
                        </>
                            :
                            <div className="text-enter w-100">
                                <img src={loader} alt="" className="" style={{ width: "60px", height: "60", margin: "0 auto" }} />
                            </div>
                    }
                </div>
                <div className="d-flex">
                    <div className="ms-auto"></div><button onClick={placeOrder} className="btn bg-color text-light px-4">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;