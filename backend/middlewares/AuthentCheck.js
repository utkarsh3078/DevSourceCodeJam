const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");

dotenv.config();

const ensureAuthented = (req,res,next) => {
    const auth = req.headers['authentication'];
    if(!auth){
        return res.status(403).json
    }
}


