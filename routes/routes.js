import { getSortedItems, insertItem} from "../services/service.js";
import { ObjectId } from "mongodb";

async function addNewOrder(req, res, next) {
try {
const data = req.body;
const result = await insertItem("BD", data);
res.json(result);
} catch (error) {
next(error);
}
}

async function getOrdersSort(req, res) {
    let Sortf;

    if(req.query.sort === "material" || req.query.sort === "priority"){
        Sortf = req.query.sort;
    }
    else{
        Sortf = "name";
    }

    const orders = await getSortedItems("BD",Sortf);
    res.status(200).json(orders);
}


export {addNewOrder, getOrdersSort};