import User from '../models/User.js'

const getUser = async(req,res)=>{
    try{
        const user = await User.findById({_id:req.user.id})
        if (!user){
            return res.status(404).json({error:err.message,message:"User not found"})
        }
        res.status(200).json({details:user})
    }catch(err){
        res.status(501).json({error:err.message,message:"Internal Server Error"})
    }
}

const acceptRequest = async(req,res)=>{
    try{
        
    }catch(err){
        res.status(501).json({error:err.message,message:"Internal Server Error"})
    }
}

export {getUser}