const express = require('express');
const app = express();
app.use(express.json());
const userRoute = require('./routes/user');
const postRoute = require('./routes/post');

app.use('/users', userRoute);
app.use('/posts', postRoute);

app.listen(3000, console.log('Server is running at Port 3000'));

// let user = [
//   { id: 1, name: 'Khant Kyaw', age: 23 },
//   { id: 2, name: 'Kon', age: 19 },
//   { id: 3, name: 'Gon', age: 9 },
// ];

// app.get('/user', (req, res, next) => {
//   res.status(200).json(user);
// });

// app.get('/user/:id', (req, res, next) => {
//   let id = req.params.id;
//   let userId = user.find((usr) => usr.id == id);
//   if (userId) {
//     res.json(userId);
//   } else {
//     res.json({ msg: `No user with that ${id} found.` });
//   }
// });

// app.post('/user', (req, res, next) => {
//   let id = req.body.id;
//   let name = req.body.name;
//   let age = req.body.age;

//   let newUser = { id, name, age };
//   user.push(newUser);
//   res.json({ user });
// });

// app.patch('/user/:id', (req, res) => {
//   let id = req.params.id;
//   let editUser = user.find((usr) => usr.id == id);
//   if (editUser) {
//     editUser.name = req.body.name;
//     res.json(user);
//   } else {
//     res.json({ msg: 'No user with that id' });
//   }
// });

// app.delete('/user/:id', (req, res, next) => {
//   let id = req.params.id;
//   user = user.filter((usr) => usr.id != id);
//   res.json(user);
// });

// app.get('*', (req, res, next) => {
//   res.json({ msg: 'No Route Found' });
// });
