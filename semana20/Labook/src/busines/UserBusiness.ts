export interface SignupDTO{
    name: string,
    email: string,
    password: string
}

export class UserBusiness{
    signup(signupDTO:SignupDTO){

        console.log("chegou no UserBusiness",signupDTO )
        
    }
}