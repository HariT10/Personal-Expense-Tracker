const User = require('../models/User');

const jwt = require('jsonwebtoken');



//generate JWT token
const generateToken = (id) => {

    return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn: '1h',});

}

exports.registerUser = async (req, res) => {

    const { fullName, email, password, profileImageUrl } = req.body;

    //validate by checking for missing fields

    if(!fullName || !email || !password){
        
        return res.status(400).json({ message: 'Please provide all required fields'});

    }

    try{

        //check if email already exists
        const existingUser = await User.findOne({ email});

        if(existingUser){

            return res.status(400).json({ message: 'Email already in use!'})
        }

        //create new user
        const user = await User.create({

            fullName,
            email,
            password,
            profileImageUrl
        })

        res.status(201).json({

            id:user._id,
            user,
            token: generateToken(user._id)


        })

    } catch(err){

        res.status(500).json({ message: 'Server error. Please try again later.'});
    }



};


exports.loginUser = async (req,res) => {};


exports.getUserProfile = async (req, res) => {};