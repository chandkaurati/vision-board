import { Account, Client } from "appwrite"


class Authservice {
   client = new Client()
   account;
   constructor(){
    this.client.setEndpoint(import.meta.env.APPWRITE_API_URI)
    .setProject(import.meta.env.APPWRITE_PROJECT_ID)
    this.account = new Account(this.client)
   }

   registerUser({name, email, passowrd}){
    console.log("user registred successfully ")
   }
}


const authservice = new Authservice()
export default authservice

 