import express, {Express, Request, Response} from "express"
import cors from "cors"
import {countries} from "./data"



const app: Express = express()

app.use(express.json())
app.use(cors())


app.get("/countries/:id", (req:Request, res: Response) =>{ 
    const result = countries.map(
        
        (country)=>{return country.id === Number(req.params.id)}
    )
    res.status(207).send(result)
})

app.get("/coutries/all",(req:Request, res: Response)=>{
    res.send(countries)
})


app.delete("/countries/:id", (req:Request, res: Response)=>{
    
})
app.listen(3003, ()=>{
    console.log("Servidor pronto")
})