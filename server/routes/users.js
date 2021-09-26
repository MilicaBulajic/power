const express = require("express");
const bcrypt = require("bcryptjs");
const { asyncHandler } = require("./utilities/utils");
const { check, validationResult } = require("express-validator");
const { User, Team, UserTeam } = require("../db/models");
const jwt = require("jsonwebtoken");

const router = express.Router();


router.post(
  "/register", async (req, res) => {
    const { name, email, password } = req.body;

    const alreadyExistUser = await User.findOne ({ where: { email } }).catch (
      (err) => {
        console.log("error: ", err)
      }
    );

    if(alreadyExistUser) {
      return res.json({message: "User with this email already exists!"});
    }

    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save().catch((err) => {
      console.log("Error: ", err);
      res.status(500).json({ error: "Cannot register user at the moment!" });
    });
  
    if (savedUser) res.json({ message: "Thanks for registering" });
  });



  router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    const userWithEmail = await User.findOne({ where: { email } }).catch(
      (err) => {
        console.log("Error: ", err);
      }
    );
  
    if (!userWithEmail)
      return res
        .status(400)
        .json({ message: "Email or password does not match!" });
  
    if (userWithEmail.password !== password)
      return res
        .status(400)
        .json({ message: "Email or password does not match!" });
  
    const jwtToken = jwt.sign(
      { id: userWithEmail.id, email: userWithEmail.email },
      process.env.JWT_SECRET
    );
  
    res.json({ message: "Welcome Back!", token: jwtToken });
  });


  router.put("/register/onboard", async (req, res) => {
    const { email, teamName } = req.body;

    const user = await User.findOne({
      where: {
        email: email,
      },
    });
  
    const team = await Team.create({
      name: teamName,
    });
  
    const userTeam = await UserTeam.create({
      user_id: user.id,
      team_id: team.id,
    });

  
    res.json({ message: "Welcome Back!", token: jwtToken });
  });


 
module.exports = router;
