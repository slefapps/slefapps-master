import { NextFunction, Request, Response } from 'express';
import {getTest, getTestById, createTest} from '../controllers/test.controller';
const logger = (req:Request,res:Response, next:NextFunction) => {
  console.log(req.path, new Date().toISOString(), req.method);
  next()
}
export = [
    { method: 'get', path: '/test', handler: [logger, getTest] },
    { method: 'get', path: '/test/:id', handler: [logger, getTestById] },
    { method: 'post', path: '/test', handler: [logger, createTest] },
]