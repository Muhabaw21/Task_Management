const express = require('express');
const userRoutes= require("./routes/userRoutes")
require('dotenv').config();
const db = require('./models');
const cors = require('cors');
 const app = express();
 app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
 const port = process.env.PORT || 7000;

 app.use("/api/users",userRoutes);

//   main server 
db.sequelize.sync().then(() => {
    app.listen(port, () => {
           console.log(`SERVER RUNNING ON PORT ${port}`);
          });
});
