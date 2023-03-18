// const express:Function = require('express')
// const cors:Function = require('cors')
// const app:any = express()
// const port:number = 3001

import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port = process.env.PORT


app.get('/', (request:string, response:any) => {
  response.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})