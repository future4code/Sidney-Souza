import app from "./app"
import getUserById from "./endpoints/getUserById"
import myProfile from "./endpoints/profile"
import createUser from './endpoints/createUser'
//import editUser from './endpoints/editUser'
import { login } from "./endpoints/login"

app.post('/users/signup',createUser )
app.post('/users/login',login )
app.put('/users', )
app.get("/user/profile",myProfile)
app . get ( "/ user / feed",)
app.get("/user/:id",getUserById)
app.post("/user/follow",)