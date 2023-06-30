const {getSortedItems, insertItem} = require('../services/service.js');

async function addNewComment(req, res, next) {
try {
const data = req.body;
const result = await insertItem("BD", data);
res.json(result);
} catch (error) {
next(error);
}
}

async function getLastComments(req, res) {
    const orders = await getSortedItems("BD",Sortf);
    res.status(200).json(orders);
}


module.exports = { 
    addNewComment, 
    getLastComments
};