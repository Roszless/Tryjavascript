import React, { Component } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const NotFound =() => {
return (
        <div>
            <Header />
            <div className="container col-md-8 text-center">
                <h1 className="tle mb-3 text-danger" style={{fontSize: 120}}>404</h1>
                <h2 className="mb-4">Not Found</h2>
                <p className="title mb-5">ขออภัยไม่พบหน้าที่คุณค้นหา</p>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound;