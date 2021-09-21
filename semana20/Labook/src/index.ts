import { request, response } from "express"
import { app } from "./app"
import { UserController } from "./controllers/userController"



const userController = new UserController

app.post('/user/signup', (request, response)=> {
    console.log("chegou na rota")
    userController.signup(request,response) 
})
app.post('/user/login', 
)

app.put('/task', )
app.get('/task/:id', )
