import { MongoClient } from "mongodb";

const dotenv = require("dotenv")
dotenv.config({ path: '@/.env.local' });

//API
const uri = "mongodb+srv://admin:F8gnQCxXYl4Q29Hj@cluster0.pno5g4a.mongodb.net/";
const client = new MongoClient(process.env.DB_CONNECT_URI || uri);
const db = client.db(process.env.DB_NAME || 'chesslearners')
export default db;