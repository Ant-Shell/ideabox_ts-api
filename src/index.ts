const express:Function = require('express')
const app:any = express()
const port:number = 3001

type Express = {
  express: () => void 
}

app.get('/', (request:string, response:any) => {
  response.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})