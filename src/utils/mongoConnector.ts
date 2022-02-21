import mongoose  from "mongoose"
import config from "config"
export async function ConnectToMongoDb(){
    try{
        await mongoose.connect(config.get("dbURI"))
        console.log("Connected to the DB :D")

    }catch(e){
        console.log(e)
        process.exit(1)
    }
}