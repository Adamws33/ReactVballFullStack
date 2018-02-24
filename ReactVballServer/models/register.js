module.exports = function(sequelize, DataTypes) {
  //With define, the first argument is going to represent a column in the db table
  
    return sequelize.define('register', {
      owner: DataTypes.INTEGER,
      date: DataTypes.STRING,
      captain: DataTypes.STRING, /* by time, reps, weight, ... */
      partner: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      division: DataTypes.STRING,
    });
  };
  