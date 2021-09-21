import { User} from "./types"

export const serasa=(user: User, value: number): User | undefined => {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}