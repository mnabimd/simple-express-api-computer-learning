import express from 'express';

const app = express();
const PORT = 3000;

// DB
let users = [
   { id: 1, name: 'Alice', email: 'alice@example.com' },
   { id: 2, name: 'Bob', email: 'bob@example.com' },
   { id: 3, name: 'Ahmad', email: 'ahmad@example.com' }
];

// Routes, EndPoints, URL
// 1. /api/users   2. /api/tasks

function sendUsers(req, res) {
   res.send(users);
}

app.get('/api/users', sendUsers);
app.get('/', (req, res) => {
   res.send('Welcome user to our REST API Application');
});

// function addUser(req, res) {
//    // 1. userName, 2. emailAddress
//    const username = req.body.username;
//    const email = req.body.email;

//    console.log(username, email);
// }

// app.post('/api/users', addUser);

app.listen(PORT, () => {
   console.log('Express APP is running in PORT 3000');
});
