require("./DB/config")
const cors = require("cors");
const express = require("express");
const app = express();
const Employee = require("./DB/schema");
const Products = require("./DB/products");
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors());
app.post('/register', async (req, res) => {
    try {
        const data = new Employee(req.body);
        let result = await data.save();
        result = result.toObject();
        delete result.password
        res.send(result)

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post("/login", async (req, resp) => {

    if (req.body.password && req.body.email) {
        let data = await Employee.findOne(req.body).select("-password");
        if (data) {
            resp.send(data);

        } else {
            resp.send({ result: 'User Not Found.....!' })
        }
    } else {
        resp.send({ result: 'User Not Found....!' })
    }
})

app.post('/add-product', async (req, res) => {
    try {
        const product = new Products(req.body);
        let result = await product.save();
        res.send(result)

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get("/products", async (req, resp) => {
    const product = await Products.find();
    if (product.length > 0) {
        resp.send(product)
    }
    else {
        resp.send({ result: "Products Not Found.....!" })
    }
})

app.delete("/product/:id", async (req, resp) => {
    console.log(req.params.id)
    const result = await Products.deleteOne({ _id: req.params.id })
    // console.log(result)
    resp.send(result);
})

//prefill Data
app.get("/product/:id", async (req, resp) => {
    let result = await Products.findOne({ _id: req.params.id })

    if (result) {
        resp.send(result)
    }
    else {
        resp.send({ result: "Result is Not Found" })
    }
})

// Update API

app.put("/product/:id", async (req, resp) => {
    let result = await Products.updateOne(

        { _id: req.params.id },

        {
            $set: req.body
        }
    )
    resp.send(result);
})

//Search Api

app.get("/search/:key", async (req, resp) => {
    let key = req.params.key;
    let data = await Products.find(
        {
            "$or": [
                { "name": { $regex: key } },
                { "company": { $regex: key } }
                // { "_id": key }
                
            ]
        }
    )
    resp.send(data);
})

app.listen(PORT, () => {
    console.log(`app is running the port number ${PORT}`)
})
