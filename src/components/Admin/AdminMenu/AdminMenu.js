import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './AdminMenu.css'

const AdminMenu = () => {

    const history = useHistory().location

    return (
        <div className="adminMenu w-100">
            <br />
            <Link class="h2 adminMenuLogo" style={{ textDecoration: "none" }} to="/admin">FRESH VALLEY</Link>
            <div className="adminMenuItems">
                <li>
                    <Link to="/admin/manage-products" className={history.pathname === "/admin/manage-products" ? "adminMenuItem amActive" : "adminMenuItem"}><span className="h6" style={{ marginLeft: "40px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-fill me-2" viewBox="0 0 16 16">
                            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
                        </svg>
                        Manage Products</span></Link>
                </li>
                <li>
                    <Link to="/admin/add-product" className={history.pathname === "/admin/add-product" ? "adminMenuItem amActive" : "adminMenuItem"}><span className="h6" style={{ marginLeft: "40px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg me-2" viewBox="0 0 16 16">
                            <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
                        </svg>
                        Add Product</span></Link>
                </li>
                <li>
                    <Link to="/admin/edit-product" className={history.pathname === "/admin/edit-product" ? "adminMenuItem amActive" : "adminMenuItem"}><span className="h6" style={{ marginLeft: "40px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill me-2" viewBox="0 0 16 16">
                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
                        </svg>
                        Edit Product</span></Link>
                </li>
            </div>
        </div>
    );
};

export default AdminMenu;