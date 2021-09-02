import app from "./app";
import createProduct from "./endpoints/createProduct";
import getUser from "./endpoints/getUserById";
import createUser from "./endpoints/users";


app.post("/users",createUser )
app.post("/product",createProduct)
app.get("/lista",getUser)