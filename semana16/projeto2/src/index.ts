import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import createUser from './endpoints/createUser';
import selectUserById from './data/selectUserById';
import editUser from './endpoints/editUser';


const app: Express = express();

app.use(express.json());
app.use(cors());

app.put("/user", createUser)

app.get("/user/:id", selectUserById)

app.post("/user/edit/:id",editUser )


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});