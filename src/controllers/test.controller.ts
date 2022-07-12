import {Request, Response} from 'express'
export const  getTest = (req:Request, res:Response) => {
  res.send('test');
}

export const getTestById = (req:Request, res:Response) => {
  res.send(`Hello World! test ${req.params.id}`);
}

export const createTest = (req:Request, res:Response) => {
  res.send(`createTest ${req.body.name}`);
}