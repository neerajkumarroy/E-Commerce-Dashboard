import React, { useState } from "react";

const UpdateProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");


    const UpdateProduct = async () => {


    }
    return (
        <div className="product">
            <h1>Add Products</h1>
            <input type="text" placeholder="Enter Product Name" className="inputbox"
                value={name} onChange={(e) => setName(e.target.value)}
            />


            <input type="text" placeholder="Enter Product Price" className="inputbox"
                value={price} onChange={(e) => setPrice(e.target.value)}
            />


            <input type="text" placeholder="Enter Product Category" className="inputbox"
                value={category} onChange={(e) => setCategory(e.target.value)}
            />


            <input type="text" placeholder="Enter Company Name" className="inputbox"
                value={company} onChange={(e) => setCompany(e.target.value)}
            />


            <button onClick={UpdateProduct} className="AppButton"> Update Product</button>
        </div>
    )
}


export default UpdateProduct;