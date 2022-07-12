import { NextFunction, Request, Response } from 'express';
import {getTest, getTestById} from '../controllers/test.controller';
const logger = (req:Request,res:Response, next:NextFunction) => {
  console.log(req.path, new Date().toISOString());
  next()
}
export = [
    { method: 'get', path: '/test', handler: [logger, getTest] },
    { method: 'get', path: '/test/:id', handler: [logger, getTestById] }
]