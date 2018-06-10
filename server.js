const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const ctrl = require('./userCtrl.js')

const app = express();

app.use(bodyParser.json());


app.get('/api/users', ctrl.getAllUsers)
app.get('/api/users/:userId')
app.get('/api/admins')
app.get('/api/nonadmins')
app.get('/api/user_type/:userType')
app.put('/api/user/:userId')
app.post('/api/users')
app.delete('/api/users/:userId')






app.listen(port, () => console.log(`Server hanging out on Port ${port}...`));