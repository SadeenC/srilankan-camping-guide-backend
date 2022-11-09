
const {Router} = require('express')

const authRouter = Router()

authRouter.post('/signup',(req,res)=>{
    try {
        res.status(200).json({})
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

