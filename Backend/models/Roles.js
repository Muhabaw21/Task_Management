
module.exports = (sequelize, DataTypes) => {
  const UsersRole = sequelize.define('UsersRole', {
    role: {
      type: DataTypes.ENUM('Admin', 'Student', 'Teacher'),
      allowNull: false
    },
  });

  UsersRole.associate = function(models) {
    UsersRole.hasMany(models.Users, {
      foreignKey: 'roleId',
      as: 'users'
    });
  };

  return UsersRole;
};