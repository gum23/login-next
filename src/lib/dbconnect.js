
import mongoose from "mongoose";
import config from "@/utils/config";


const URI = `mongodb+srv://${config.mongodb_user}:${config.mongodb_password}@${config.mongodb_cluster}/${config.mongodb_name}?retryWrites=true&w=majority`;

let isConnected = false;

const db = async () => { 
  if (isConnected) return;

  try {
    const db = await mongoose.connect(URI, {
      serverSelectionTimeoutMS: 5000, // corta más rápido si no se conecta
    });
    isConnected = db.connections[0].readyState;
    console.log("Database is conected to: ", db.connection.name)
  } catch (error) {
    console.log("The connection to database is broken ", error)
  }

}

export default db;