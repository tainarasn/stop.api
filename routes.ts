import express, { Express, Request, Response } from 'express'
    //import login from './src/login'
    
export const router = express.Router()

router.get("/", async (request: Request, response: Response) => {
    response.json({ test: true })
})
    
    //router.use("/login", login)
