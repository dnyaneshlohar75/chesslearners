import { MongoClient } from "mongodb";

//Connect to Mongo Client Altas
const client = new MongoClient("mongodb+srv://admin:F8gnQCxXYl4Q29Hj@cluster0.pno5g4a.mongodb.net/");

//Connect to database chesslearners
const db = client.db("chesslearners");

export default db;