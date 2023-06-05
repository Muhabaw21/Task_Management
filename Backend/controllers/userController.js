const jwt = require('jsonwebtoken');  
const bcrypt = require("bcrypt");
const {Users} = require("../models");

const asyncHandler = require("express-async-handler");


const registerUser = asyncHandler(async (req, res) => {
    const { id,firstName,lastName, email, password, confirmPassword, dept } = req.body
    if (!firstName || !lastName || !email || !password || !confirmPassword || !dept) {
      res.status(400).json({
        path:req.path,
        error:"Please add all fields",
        message:"All fields required",
        status: 400,
      })
     
    }
    // Check if user exists
    const userExists = await Users.findOne({where:{ email }});
    if (userExists) {
      res.status(400).json({
        message:"User Already Exist"
      })
      
    }
  
    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
   //Hash password
   const confirmSalt = await bcrypt.genSalt(10)
   const confirmHashedPassword = await bcrypt.hash(confirmPassword, confirmSalt)
    // Create user
    const user = await Users.create({
      id:id,
      firstName:firstName,
      lastName: lastName,
      email:email,
      password: hashedPassword,
      confirmPassword: confirmHashedPassword,
      dept:dept,
    })
  
    if (user) {
      res.status(201).json({
        token:generatedToken(user.id),
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        dept: user.dept,
      })
    } else {
      res.status(400).json({
        path:req.path,
        error:"Please add all fields",
        message:"All fields required",
        status: 400,
      })
    }
  })

const loginUser = asyncHandler(async(req,res)=>{
    const {email, password} = req.body;
            //check user
           const checkUser = await Users.findOne({where:{email}});
           const compareWith = await bcrypt.compare(password, checkUser.password);
           if(checkUser && compareWith ){
            res.status(201).json({
              token: generatedToken(checkUser.id),
             id:checkUser.id,
             username:checkUser.username,
             email:checkUser.email,
            });         
             
           }
           else{
            res.status(401).json({
              path:req.path,
              messege:"Invaild User Name or Password",
              status:401

            })
           
         }
})
            // Generate JWT
            const generatedToken = (id)=>{
                return jwt.sign({id}, `${process.env.JWT_SECRET}`, {expiresIn:"1d"});
            }

const getMe = asyncHandler(async(req,res)=>{
  const id = req.params.id;
  const  listOfUSer = await Users.findByPk(id);
  res.json({
    username:listOfUSer.username,
    email: listOfUSer.email
  });
})
     
module.exports ={registerUser,loginUser, getMe};

