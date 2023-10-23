import express from "express";
import cors from "cors";
import userModel from "./user-services.js";


const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());


app.delete('/users/:id', (req, res) => {
    const id = req.params['id'];
    let result = userModel.findByIdAndDelete(id).then(() => res.status(201).json({ message : "User deleted successfully", }).catch((error) => { message : "Eror when deleting user"}));
    res.status(404).send("User deleted successfully");
    
});



app.post('/users', (req, res) => {
    const userToAdd = req.body;

    userToAdd._id = Math.floor(Math.random()*1000)

    userModel.addUser(userToAdd).then(() => res.status(201).json({ message : "User created successfully", 
        user: userToAdd
    }).catch((error) => { message : "Eror when creating user"}))

});



app.get('/users/:id', (req, res) => {
    const id = req.params['id']; //or req.params.id
    let result = userModel.findUserById(id);
    if (result === undefined) {
        res.status(404).send('Resource not found.');
    } else {
        res.send(result);
    }
});


app.get('/users', (req, res) => {
    const name = req.params['name']; //or req.params.id
    const job = req.params['job']; //or req.params.id
    console.log(job)
    
    result = userModel.getUsers(name, job)
    .then((response) => 
    res.status(200)
    .send(response))
    .catch((error) => { message : "Error when fetching users"})

});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});      