const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const UserModel = require('../models/Users')

//generate JWT
const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

const addUser = async (req, res) =>{
    //destruct request for fields needed
    //console.log(req.body)
    const { email, password} = req.body
    if(!email || !password){
        res.status(400).json({message: "missing fields"})
    }

    //check to see if user already exists with email
    const userExists = await UserModel.findOne({email})
    if(userExists){
        res.status(400).json({message: 'User with this e-mail already exists'})
        return
    }

    //hashing password before adding it to database
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt)

    //create new user
    const user = await UserModel.create({
        email,
        password: hashedPass
    })
    if(user){
        res.status(201).json({
            message: 'user created',
            _id:user.id,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(400).json({message: 'Invalid Data'})
    }
}

const loginUser = async (req, res) =>{
    const {email, password} = req.body
    const user = await UserModel.findOne({email})
    if(user && bcrypt.compare(password, user.password)){
        res.json({
            user: user,
            auth: true,
            _id: user.id,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(400).json({auth: false, message: 'invalid credentials'})
    }
}

module.exports = {
    addUser,
    loginUser
}