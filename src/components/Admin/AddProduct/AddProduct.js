import React, { useEffect } from 'react';
import { useState } from 'react';
import './addProduct.css'

const AddProduct = () => {

    const [addPdTitle, setAddPdTitle] = useState('')
    const [addPdWeight, setAddPdWeight] = useState('')
    const [addPdPrice, setAddPdPrice] = useState('')

    const [pdAdded, setPdAdded] = useState(false)

    const addPdUrl = (title) => {
        return (title.replace(" ", "-"))
    }

    const uniqueIdForAddProduct = () => {
        return Math.floor((100 + Math.random()) * 0X9000000000000)
            .toString(16)
            .substring(1);
    }

    const addProduct = (e) => {
        if (addPdTitle.length > 5 && addPdWeight.length > 1 && addPdPrice.length > 0) {
            fetch("https://fresh-valley-by-asraful.herokuapp.com/add-product", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    {
                        name: addPdTitle,
                        img: "https://chaldn.com/_mpimage/ispahani-mirzapore-best-leaf-tea-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D69906&q=low&v=1&m=400&webp=1",
                        seller: "",
                        sellerUrl: "",
                        pdUrl: `${addPdUrl(addPdTitle)}`,
                        id: `${uniqueIdForAddProduct()}`,
                        weight: addPdWeight,
                        price: addPdPrice,
                        pdDetails: [
                            "'Ispahani Mirzapore Best Leaf' is produced by blending the BEST tea leaves of the finest tea gardens in Bangladesh. It comes to you in the most modern packing, designed to protect its excellent aroma and taste."
                        ],
                        item: "",
                        category: "",
                        subCategory: ""
                    }
                )
            })
                .then(res => {
                    if (res.status === 200) {
                        setPdAdded(true)
                    } else {

                    }
                })
                .catch(err => console.log(err.message))
        } else {
            console.log("Not Eligible")
        }
        e.preventDefault()
        e.target.reset()
    }
    
    useEffect(() => {
        setTimeout(() => setPdAdded(false), 3000)
    }, [pdAdded])

    return (
        <form onSubmit={addProduct}>
            <div className="addProducts">
                {
                    pdAdded ?
                        <div className="alert bg-success text-dark mt-3 mb-3">
                            <span className="text-light">Product Added</span> 
                        </div>
                        :
                        ""
                }
                <div action="" className="addProductsForm">
                    <div className="d-flex">
                        <div className="col-6 pe-2">
                            <div className="form-control-name pb-3">
                                <label htmlFor="add-name">Product Title</label>
                                <input onChange={(e) => setAddPdTitle(e.target.value)} id="add-name" type="text" className="form-control" />
                            </div>
                            <div className="form-control-price pb-3">
                                <label htmlFor="add-price">Product Price</label>
                                <input onChange={(e) => setAddPdPrice(e.target.value)} id="add-price" type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="col-6 ps-2">
                            <div className="form-control-weight pb-3">
                                <label htmlFor="add-weight">Product Weight</label>
                                <input onChange={(e) => setAddPdWeight(e.target.value)} id="add-weight" type="text" className="form-control" />
                            </div>
                            <div className="form-control-photo pb-3">
                                <label htmlFor="add-photo">Product Photo</label>
                                <br />
                                <button id="add-photo" type="text" className="btn btn-outline-success" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-upload" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                                        <path fill-rule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z" />
                                    </svg>
                                    <span className="ms-2">Upload Photo</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="add-product-save-btn text-right">
                <button className="btn btn-success mt-4 px-4" style={{ width: '100px', float: "right" }}>Save</button>
            </div>
        </form>
    );
};

export default AddProduct;