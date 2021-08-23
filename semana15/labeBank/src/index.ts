import express, {Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { accounts } from './accouts';


const app = express()
app.use(express.json())
app.use(cors())


app.post("/users/create", (req: Request, res: Response) => {
    let errorCode:number = 400

    try {
        const {name, CPF, dateOfbirthAsString, } = req.body

        const[ day, month, year] = dateOfbirthAsString.split("/")
        const dateOfBirth: Date =new Date(`${year}-${month}-${day}`)

        const ageInMilissecomds:number= Date.now() - dateOfBirth.getTime()

        const ageInYears:number=ageInMilissecomds /1000 /60 /24/ 365
        if(ageInYears < 18){
            res.statusCode =406
            throw new Error("Idade deve ser maior que 18 anos!")
        }
        const verificaCPF:numbe = CPF;

        if(verificaCPF  )
         accounts.push({
             name,
             CPF,
             dateOfBirth,
             balance:0,
             statement:[]
         })

         app

        res.status(201).send({message:"Conta criada com sucesso!"})
    }catch(error){
        console.log(error)
       res.status(400) .send( error.message)
    }
    
})
 
app.get("/users/all", (req: Request, res: Response) => {
   try {

    if(!accounts.length){
        res.statusCode= 404
        throw new Error("Nenhuma conta encontrada!")
    }
       res.status(200).send(accounts)
   } catch (error) {
    res.send(error.message)
   }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});