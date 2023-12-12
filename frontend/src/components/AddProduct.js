import React, { useState } from "react";

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState(false)

    const addProduct = async () => {
        console.warn(!name);
        if (!name || !price || !category || !company) {
            setError(true)
            return false
        }




        const userId = JSON.parse(localStorage.getItem('user'))._id;
        // console.warn(userId._id);

        let result = await fetch('http://localhost:5000/add-product', {
            method: 'post',
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                'Content-type': 'application/json'
            }
        });

        result = await result.json();
        console.warn(result);
    }
    return (
        <div className="product">
            <h1>Add Products</h1>
            <input type="text" placeholder="Enter Product Name" className="inputbox"
                value={name} onChange={(e) => setName(e.target.value)}
            />
            {error && !name && <span className="invalid-input">Please Enter Vailde Name</span>}

            <input type="text" placeholder="Enter Product Price" className="inputbox"
                value={price} onChange={(e) => setPrice(e.target.value)}
            />
            {error && !price && <span className="invalid-input">Please Enter Vailde Price</span>}

            <input type="text" placeholder="Enter Product Category" className="inputbox"
                value={category} onChange={(e) => setCategory(e.target.value)}
            />
            {error && !category && <span className="invalid-input">Please Enter Vailde Category</span>}

            <input type="text" placeholder="Enter Company Name" className="inputbox"
                value={company} onChange={(e) => setCompany(e.target.value)}
            />
            {error && !company && <span className="invalid-input">Please Enter Vailde Company</span>}

            <button onClick={addProduct} className="AppButton">Add Products</button>
        </div>
    )
}


export default AddProduct;