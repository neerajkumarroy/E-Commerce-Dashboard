require("./config")
const cors = require("cors");
const express = require("express");
const app = express();
const Employee = require("./schema");
const PORT = process.env.PORT || 6500;

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
    console.log(req.body)
    if(req.body.password && req.body.email)
    {
        let data = await Employee.findOne(req.body).select("-password");
        if(data)
        {
            resp.send(data);
    
        }else{
            resp.send({result:'User Not Found.....!'})
        }
    }else
    
  {
    resp.send({result:'User Not Found....!'})
  }
})

app.listen(PORT, () => {
    console.log(`app is running the port number ${PORT}`)
})
