
const Router = require('express');
const {addNewComment, getLastComments } = require('../routes/routes.js');

const router = Router();

router.post("/submit", addNewComment);
router.get("", getLastComments);

module.exports = { 
    router
};