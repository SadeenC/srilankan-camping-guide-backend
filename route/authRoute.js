
const {Router} = require('express')
const userModel = require('../models/user')

const authRouter = Router()

authRouter.post('/signup',async(req,res)=>{
    try {
        const user = await userModel.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

authRouter.post('/login',(req,res)=>{
    try {
        res.status(200).json({})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

module.exports = authRouter;

