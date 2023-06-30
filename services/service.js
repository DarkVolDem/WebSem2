import { ObjectId } from "mongodb";
import { connectToMongoDB } from "../configs/config.js";

let db;

connectToMongoDB()
  .then((result) => {
    db = result;
  })
  .catch((err) => console.log(err));

console.log("db:", db);

async function insertItem(collectionName, data) { 
    try {
        const collection = db.collection(collectionName);
        const result = await collection.insertOne(data);
        return result;
        } catch (error) {
        return error;
        }
}

async function getSortedItems(collectionName) {
    const collection = db.collection(collectionName);
    const comments = await collection.find().sort({_id: -1}).limit(3);
    return comments.toArray();
    }

  export {
    insertItem,
    getSortedItems,
  }