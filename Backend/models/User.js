module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      confirmPassword: {
        type: DataTypes.STRING,
        allowNull: false,
      
      },
      dept: {
        type: DataTypes.STRING,
        allowNull: false,
   
      },
      
    });
  
    // Association
   
  
    return Users;
  };