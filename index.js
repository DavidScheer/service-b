const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/jetzt', (req, res) => {
  const date = new Date()
  res.send({ date })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
