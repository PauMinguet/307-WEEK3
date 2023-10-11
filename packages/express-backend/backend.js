import express from "express";
import cors from "cors";


const users = { 
    users_list : [
       { 
          id : 'xyz789',
          name : 'Charlie',
          job: 'Janitor',
       },
       {
          id : 'abc123', 
          name: 'Mac',
          job: 'Bouncer',
       },
       {
          id : 'ppp222', 
          name: 'Mac',
          job: 'Professor',
       }, 
       {
          id: 'yat999', 
          name: 'Dee',
          job: 'Aspring actress',
       },
       {
          id: 'zap555', 
          name: 'Dennis',
          job: 'Bartender',
       }
    ]
}

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

const generateRandomId = () => {return Math.floor(Math.random()*1000)}

const findUserByName = (users, name) => { return users.filter( (user) => user['name'] === name); }

const findUserByJob = (users, job) => { return users.filter( (user) => user['job'] === job); }

const findUserById = (id) => users['users_list'].find( (user) => user['id'] === id);
    

const addUser = (user) => {users['users_list'].push(user);
    return user;
}


const findIndexById = (id) => {
    users['users_list'].find( (user) => user['id'] === id);
    for (let i = 0; i < users.users_list.length; i++) {
        if (users.users_list[i]['id'] === id) {
            return i;
        }
    } 
    return -1;
}


app.delete('/users/:id', (req, res) => {
    const userToDelete = req.params['id'];
    let result = findIndexById(userToDelete);

    users.users_list.splice(result, 1);   
    res.status(404).send("User deleted successfully");
    
});



app.post('/users', (req, res) => {
    const userToAdd = req.body;
    userToAdd.id = generateRandomId()
    addUser(userToAdd);
    res.status(201).json({
        message : "User created successfully", 
        user: userToAdd,
    });

});


app.get('/users', (req, res) => {
    const name = req.query.name;
    if (name != undefined){
        let result = findUserByName(users.users_list, name);
        result = {users_list: result};
        res.send(result);
    }
    else{
        res.send(users);
    }
});


app.get('/users/:id', (req, res) => {
    const id = req.params['id']; //or req.params.id
    let result = findUserById(id);
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

    let result = findUserByName(users.users_list, name);
    let result2 = findUserByJob(result, job);

    if (result2 === undefined) {
        res.status(404).send('Resource not found.');
    } else {
        res.send(job);
    }
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});      