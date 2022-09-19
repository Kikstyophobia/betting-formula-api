const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const PORT = 8080;


app.use(cors());
// app.use(express.json());

app.listen(PORT, () => {
  console.log(`Betting Formula API is running on PORT ${PORT}`);
});

// Routes
app.use(`/api`, require(`./routes/index`))

app.get(`/`, (req, res) => {
  res.json({success: "true"})
})

// app.post(`/test/:id`, (req, res) => {
//   const { id } = req.params;
//   const { post } = req.body

//   res.send({
//     test: `id is: ${id}, POST is: ${post}`
//   })

// })

// app.post(`/test/:id`, (req, res) => {
//   const { id } = req.params;
//   const { post } = req.body

//   res.send({
//     test: `id is: ${id}, POST is: ${post}`
//   })

// })