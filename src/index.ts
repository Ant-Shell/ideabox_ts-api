const express:Function = require('express')
const cors:Function = require('cors')
const app:any = express()
const port:number = 3001

app.get('/', (request:string, response:any) => {
  response.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})