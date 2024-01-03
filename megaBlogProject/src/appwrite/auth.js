import config from "../config/config";
import { Client, Account, ID} from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }
    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                return this.login;
            }else{
                return userAccount;
            }
        }catch(err){
            throw err;
        }     
    }

    async login({email, password}){
        try {
            return this.account.createEmailSession(email,password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();        
        } catch (error) {
            console.log(error);
        }
        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log(error);
        }
    }
}

const authService  = new AuthService();

export default authService;
