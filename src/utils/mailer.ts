import nodemailer, { SendMailOptions } from "nodemailer"
import config from "config"
// export async function createTestCreds(){
//     const creds = await nodemailer.createTestAccount()
//     console.log({creds})
// }
const user:string = config.get("user")
const host:string = config.get("host")
const pass:string = config.get("pass")
console.log(user,pass)
const transporter= nodemailer.createTransport({
    service:host,
    auth:{
        user:user,
        pass:pass
    }
})
export default async function SendMail(payload:SendMailOptions){
    transporter.sendMail(payload,(err,info)=>{
        if(err){
            console.log("Error while sending verification mail ",)
        }else{
            console.log(info)
        }

    })
}