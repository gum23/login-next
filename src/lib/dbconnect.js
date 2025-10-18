'use server'
import mongoose from "mongoose";
import config from "@/utils/config";


const URI = `mongodb+srv://${config.mongodb_user}:${config.mongodb_password}@${config.mongodb_cluster}/${config.mongodb_name}?retryWrites=true&w=majority&appName=${config.mongodb_app}`;

const db = async () => { 
  
  try {
    const db = await mongoose.connect(URI);
    console.log("Database is conected to: ", db.connection.name)
  } catch (error) {
    console.log("The connection to database is broken ", error)
  }

}

export default db;