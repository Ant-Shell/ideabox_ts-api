import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port = process.env.PORT
const server = app.locals.title = "IdeaBoxTS-API"
let ideas = app.locals.ideas = [
  {id: 1, title: "Learn TypeScript", description: "Typechecking helps prevent bugs."},
  {id: 2, title: "Learn Redux", description: "No more prop drilling - wow!"},
  {id: 3, title: "Learn Express.js", description: "Become a Full Stack Developer."},
  {id: 4, title: "Take POMs", description: "Breaks are important, take care of yourself."},
]

app.use(express.json())
app.use(cors())

app.get('/', (req:Request, res:Response) => {
  res.send('Express Server for IdeaBoxTS')
})

app.get('/api/v1/ideas', (req:Request, res:Response) => {
  res.status(200).json(ideas)
})

app.get('/api/v1/ideas/:id', (req:Request, res:Response) => {
  const { id } = req.params
  const match = ideas.find((idea: { id: number }) => idea.id === parseInt(id))

  match ? res.status(200).json(match) : 
  res.status(404).json({message: `No idea found with an id of ${id}`})
})

app.post('/api/v1/ideas', (req:Request, res:Response) => {
  const newIdea = req.body

  for (let requiredParameter of ['id', 'title', 'description']) {
    if (!newIdea[requiredParameter]) {
      return res.status(422).json({message: `You are missing a required parameter of ${requiredParameter}`})
    } 
  }

  ideas = [...ideas, newIdea]
  return res.status(201).json(newIdea)
})

app.delete('/api/v1/ideas/:id', (req:Request, res:Response) => {
  const { id } = req.params
  const match = ideas.find((idea: { id: number }) => idea.id === parseInt(id))

  if (!match) {
    return res.status(404).json({message: `No idea found with an id of ${id}`})
  } 

  const filteredIdeas = ideas.filter((idea: { id: number }) => idea.id !== parseInt(id))
  ideas = filteredIdeas
  return res.sendStatus(204)
})

app.listen(port, () => {
  console.log(`[server]: ${server} is running at http://localhost:${port}`)
})