import express, { json } from 'express'

const app = express()
app.use(json())

app.get('/hi', (req, res) => {
  res.send('Hello')
})

const port = 3000

app.listen(port, () => {
  console.log(`[Express] Server listening on port ${port}`)
})
