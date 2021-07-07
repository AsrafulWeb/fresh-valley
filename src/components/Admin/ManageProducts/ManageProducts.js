import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import loader from './../../../icons/loading.svg'
import './ManageProducts.css'

const ManageProducts = () => {

    const [products, setProducts] = useState(null)
    const [deleteSuccess, setDeleteSuccess] = useState(false)

    useEffect(() => {
        fetch('https://fresh-valley-by-asraful.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    const deleteProduct = (pdId) => {
        fetch(`https://fresh-valley-by-asraful.herokuapp.com/delete-product/${pdId}`)
            .then(result => {
                console.log(result)
                if (result.status === 200) {
                    setProducts(null)
                    setDeleteSuccess(true)
                }
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        setTimeout(() => setDeleteSuccess(false), 2000)
    }, [deleteSuccess])

    return (
        <div className="manageProducts">
            <div className="d-flex manageProductsColName" style={{ paddingTop: "10px" }}>
                <div className="col-6 ps-3">Name</div>
                <div className="col-3">Weight</div>
                <div className="col-2">Price</div>
                <div className="col-1">Action</div>
            </div>
            <div className="manageProductsItems mt-3">
                {
                    products ?
                        <>
                            {
                                products?.map(dt =>
                                    <div className="d-flex mb-3">
                                        <div className="col-6 ps-3">{dt?.name}</div>
                                        <div className="col-3">{dt?.weight}</div>
                                        <div className="col-2 ps-2">{dt?.price}</div>
                                        <div className="col-1 d-flex">
                                            <Link to="/admin/edit-product" className="btn btn-sm btn-outline-success me-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                                                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
                                                </svg>
                                            </Link>
                                            <button onClick={() => deleteProduct(dt?.id)} className="btn btn-sm btn-outline-danger">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                )
                            }
                        </>
                        :
                        <div className="manageProductItemsLoader">
                            <div className="text-center">
                                <img style={{width: "60px", marginTop: "160px"}} src={loader} alt="" className="img-fluid" />
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default ManageProducts;