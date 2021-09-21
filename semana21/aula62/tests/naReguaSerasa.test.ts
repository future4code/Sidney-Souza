import {serasa} from "../src/index"
import { User } from "../src/types"

describe("testando a função serasa", ()=>{
    test("Compara se o valor do saldo é que o valor da compra", ()=>{
        const user: User = {
            name: "Sidney",
            balance: 500
        }
        
	
        expect(user.balance).toBeGreaterThanOrEqual(500)
    })
})
