module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Medahinalem', {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
  
      },
      projectName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      desc: {
        type: DataTypes.STRING,
        allowNull: false
      },
      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        unique: true
      },
      endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      manager: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     
    });
  
   
    return Project;
  };
  