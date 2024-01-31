

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors=require('cors')

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cors());

const secretKey = 'sat';


let users = [
];


app.post('/signup', (req, res) => {
  const { PHONENUMBER, password } = req.body;

  console.log("inside Auth  signup",password);
  const existingUser = users.find(user => user.PHONENUMBER === PHONENUMBER);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  
  const newUser = { PHONENUMBER, password };
  users.push(newUser);

  const token = jwt.sign({ PHONENUMBER }, secretKey, { expiresIn: '1h' });

  res.status(201).json({ message: 'User registered successfully', token });
});


app.post('/login', (req, res) => {
  const { PHONENUMBER, password } = req.body;

  
  const user = users.find(user => user.PHONENUMBER === PHONENUMBER && user.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

 
  const token = jwt.sign({ PHONENUMBER }, secretKey, { expiresIn: '1h' });

  res.status(200).json({ message: 'Login successful', token });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
