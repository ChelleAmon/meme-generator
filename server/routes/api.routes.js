import express from 'express';
import { captionRouter } from '../routes/caption.route.js'
export const apiRouter = express.Router();

apiRouter.use('/api', captionRouter)

apiRouter.use((req,res, next) => {
    if(res.locals.data){
        console.log(res.locals.data)
        res.status(200).json({data: res.locals.data});

    }else{
        next();
    }
})

apiRouter.use((err,req,  res, next) => {
    if(err.name === 'ValidationError'){
        res.status(400).send(err);
    }
    res.status(500).send(err)
})

apiRouter.all("/*", (req, res) => {
    console.log("Not Found");
    res.sendStatus(404)
})