import { app } from "./app"
import { getTaskById } from './endpoints(antiga)/getTaskById'
import { login } from './endpoints(antiga)/login'
import { createTaskController } from "./controller/tasks/createTaskController"
import { sidnupController } from "./controller/users/signupController"

app.post('/user/signup', sidnupController)
app.post('/user/login', login)

app.put('/task',createTaskController )
app.get('/task/:id', getTaskById)

