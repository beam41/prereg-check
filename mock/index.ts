import express, { json } from 'express'
import { Data } from './model/data'

const app = express()
app.use(json())

const user: Record<string, Data> = {
  '1': {
    user: { year: 4 },
    courseList: [{ id: '123234' }, { id: '123245' }, { id: '123232' }],
  },
  '2': {
    user: { year: 4 },
    courseList: [{ id: '123234' }, { id: '123232' }],
  },
  '3': {
    user: { year: 1 },
    courseList: [{ id: '123234' }, { id: '123245' }],
  },
}

app.get('/userdata/:id', (req, res) => {
  res.send(user[req.params.id])
})

app.listen(8888, () => {
  console.log(`[Express] Server listening on port 8888`)
})
