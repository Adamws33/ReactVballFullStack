// build a model in sqllize
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('message', {
		owner: DataTypes.INTEGER,
		type: DataTypes.STRING,
		comment: DataTypes.STRING,
		partner: DataTypes.INTEGER,
		division: DataTypes.STRING
  })
}


