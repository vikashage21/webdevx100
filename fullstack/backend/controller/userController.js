import { User } from "../model/userSchema.js"

export const userController = async (req, res) => {

    const { username, email, password } = req.body

    if (!username || !email || !password) {
        return res.json({
            message: "all fields are required"
        })
    }

    const userEmail = await User.find({ email })

    if (userEmail.length > 0) {
        return res.json({
            message: "user already exist"
        })
    } else {

        const newUser = await new User({
            username, email, password
        }).save()

        return res.status(201).json({
            "message": "user created successfully",
            "success": true

        })

    }

}