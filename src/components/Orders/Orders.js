import Button from '@material-ui/core/Button';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth';

const Orders = () => {

    const [ordersProducts, setOrdersProducts] = useState(null)
    const [deleteItemOk, setDeleteItemOk] = useState(false)
    const [dataForDeleteItem, setDataForDeleteItem] = useState({})

    const { user } = useAuth()

    useEffect(() => {
        fetch(`https://fresh-valley-by-asraful.herokuapp.com/usersOrders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrdersProducts(data))
    }, [user])

    const deleteItem = (id) => {
        fetch("https://fresh-valley-by-asraful.herokuapp.com/delete-order/" + id)
            .then(data => {
                if (data?.status === 200) {
                    setDeleteItemOk(true)
                    fetch(`https://fresh-valley-by-asraful.herokuapp.com/usersOrders?email=${user?.email}`)
                        .then(res => res.json())
                        .then(data => setOrdersProducts(data))
                } else {
                    setDeleteItemOk(false)
                }
            })
            .catch(err => console.log(err))
    }

    if (deleteItemOk) {
        setTimeout(() => setDeleteItemOk(false), 2000)
    }

    return (
        <div className="ordersComp">
            <div className="container">
                {
                    deleteItemOk ?
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>{dataForDeleteItem.name}</strong> Deleted Successfully.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        :
                        ""
                }
                {/* Modal for delete item */}
                <div class="modal fade" id="deleteItemModal" tabindex="-1" aria-labelledby="deleteItemModalLabel" aria-hidden="true">
                    {
                        dataForDeleteItem ?
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="deleteItemModalLabel">Delete Ordered Item</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h5 className="text-danger">Are you sure to delete <span className="text-info text-underline">{dataForDeleteItem?.name}</span> </h5>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-dark btn-sm" data-bs-dismiss="modal">Cancel</button>
                                        <button onClick={() => deleteItem(dataForDeleteItem.id)} type="button" class="btn btn-danger btn-sm" data-bs-dismiss="modal">Delete</button>
                                    </div>
                                </div>
                            </div>
                            :
                            ""
                    }
                </div>
                {
                    ordersProducts?.length > 0 ?
                        <>
                            <br />
                            <h2>Your Orders</h2>
                            <br />
                            <div className="usersOrders">
                                <div className="row">
                                    <div className="col-1 h6">#</div>
                                    <div className="col-7 h6">Name</div>
                                    <div className="col-2 h6">Quantity</div>
                                    <div className="col-1 h6">Price</div>
                                    <div className="col-1 h6">Action</div>
                                </div>
                                <hr />
                                {
                                    ordersProducts?.map(dt =>
                                        <>
                                            <div div className="row pb-2" >
                                                <div className="col-1 text-dark">{ordersProducts.indexOf(dt)}</div>
                                                <div className="col-7 text-dark">{dt.name}</div>
                                                <div className="col-2 text-dark">{dt.quantity}</div>
                                                <div className="col-1 text-dark">$ {dt.price}</div>
                                                <div className="col-1 text-dark">
                                                    <button onClick={() => setDataForDeleteItem(dt)} className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteItemModal">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    )}
                            </div>
                        </>
                        :
                        <div className="ordersError mt-5">
                            <div className="text-center ">
                                <span className="mb-3">Your don't have any ordered item.</span>
                                <br />
                                <br />
                                <Link style={{ textDecoration: "none" }} to="/">
                                    <Button variant="outlined" color="primary">Go To Home</Button>
                                </Link>
                            </div>
                        </div>
                }
            </div>
        </div >
    );
};

export default Orders;