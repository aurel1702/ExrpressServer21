// @ts-ignore
import express, {Request,Response} from "express";
import {iTodo} from "../model/iTodo";

let router = express.Router();

let todos:iTodo[] = [
    {
        name:"Test",description:"Lorem ipsum ..."
    },
    {
        name:"Have fun",description:"Enjoy my holidays!!!"
    }
]

router.get('/', (req:Request, res:Response) => {
    res.send(todos)
});

module.exports = router;
