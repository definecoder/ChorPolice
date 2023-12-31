const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors({
  origin: ['http://localhost:5173'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // enable credentials (cookies, authorization headers)
}));

app.get('/', (req, res) => {
    res.send('Hello World')
})


const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", () => {
    console.log(`Server is running on port ${port}`);
});