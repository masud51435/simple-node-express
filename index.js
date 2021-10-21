const { response } = require('express');
const cors = require('cors');
const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const port = 5000;

//middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('hello world how r uyhggjhcbfghjgjg huihuafhfgh');
});

const users = [
  { id: 0, name: "abul", village: 'here', mail: '...@mail.com' },
  { id: 1, name: "thbv", village: 'there', mail: '...@mail.com' },
  { id: 2, name: "moh", village: 'theree', mail: '...@mail.com' },
  { id: 3, name: "nokj", village: 'theres', mail: '...@mail.com' },
  { id: 4, name: "tabij", village: 'free', mail: '...@mail.com' },
  { id: 5, name: "trh", village: 'there', mail: '...@mail.com' }
];

/* req ase r res pathai mane kono react file theke data pathaile seta akhne req diye collect krte hoy r akhn theke data res diye pathano hoy  */

//how to get data and how get search data, search quarey
app.get('/users', (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
    res.send(searchResult);
  }
  else {
    res.send(users)
  }
});

//app.METHOD
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  res.json(newUser);
  console.log('post got hitted', newUser)
})


//how to get data with search id / dynamic api
app.get('/users/:id', (req, res) => {
  const index = req.params.id;
  const user = users[index];
  res.send(user);
})


//how to get varius food
app.get('/fruits', (req, res) => {
  res.send('kola alu begun')
});

app.get('/fruits/mangoes', (req, res) => {
  res.send('deshi, lengra, holudjldfhds');
})


app.get("/fruits/mangoes/apple", (req, res) => {
  res.send('apple apple apple');
})

app.listen(port, () => {
  console.log('listen to port', port)
});
