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

async function getSortedItems(collectionName, Sortf) {
   const sortObject = {};
   sortObject[Sortf]=1;
    const collection = db.collection(collectionName);
   const orders = await collection.find().sort(sortObject)
   return orders.toArray();
    }

  export {
    insertItem,
    getSortedItems,
  }