import app from "./app";
import createProduct from "./endpoints/createProduct";

import createUser from "./endpoints/users";


app.post("/users",createUser )
app.post("/product",createProduct)
app.get("/lista",)