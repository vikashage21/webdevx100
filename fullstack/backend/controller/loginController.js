import { User } from '../model/userSchema.js';

export const loginController = async (req, res) => {

    //  receving the data from the frontend

    const { email, password } = req.body;
    const isVerfiy = await User.find({ email, password })
    
    if(isVerfiy.length > 0){

        return res.status(200).json({
            "message":"login successfully",
            "success" : true
        })
    }
}