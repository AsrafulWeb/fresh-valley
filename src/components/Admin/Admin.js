import React from 'react';
import AdminMenu from './AdminMenu/AdminMenu';
import "./Admin.css"
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Admin = ({ AdminContent }) => {

    const [pageTitle, setPageTitle] = useState("")

    const history = useHistory().location

    // Create Title From Url
    useEffect(() => {
        const titleV = history.pathname.replace("/admin/", "")
        const titleValue = titleV.split("-")
        setPageTitle(titleValue[0].substring(0, 1).toUpperCase() + titleValue[0].substring(1, 100).toLowerCase() + " " + titleValue[1].substring(0, 1).toUpperCase() + titleValue[1].substring(1, 100).toLowerCase())
    }, [history])

    return (
        <div className="container-fluid adminContainer">
            <div className="row">
                <div className="col-sm-3">
                    <AdminMenu />
                </div>
                <div className="col-sm-9" style={{ background: "#F4FCFB" }}>
                    <div className="adminContentHeader py-3 w-100" style={{ background: "#ffffff" }}>
                        <h3 className="ms-4">{pageTitle.length > 0 ? pageTitle : "No"}</h3>
                    </div>
                    <div style={{ width: "95%", margin: "30px auto" }} className="adminContentMain">
                        <AdminContent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;