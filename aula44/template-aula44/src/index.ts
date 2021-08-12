import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())


app.get("/", (req: Request, res: Response) => {
  res.status(200).send("pronto")

})
// GET
// USER
app.get("/user", (req: Request, res: Response) => {
  res.send(users)
})

app.get("/type", (req: Request, res: Response) => {
  let codeError:number = 400
  try {
    const type:string = req.query.type as string
    const user: User | undefined = users.find((user) => user.type === type)
    if(!user) {
      codeError = 400
      throw new Error("user not found")
    }
    res.status(200).send(user)
    
    }catch(error) {
      res.status(codeError).send({message: error.message})
    }
  
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
