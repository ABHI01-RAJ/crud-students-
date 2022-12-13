const { Sequelize,DataTypes,Model } = require('sequelize')


const sequelize = new Sequelize('mydb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging:false,
    port:'3306'
})

try {
    sequelize.authenticate()
    console.log('connection done!!')
} catch (error) {
    console.log('not connected',error)
}

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

// db.contact = require('./contact')(sequelize,DataTypes)
db.student = require('./student')(sequelize,DataTypes,Model)

db.sequelize.sync({force:false})
module.exports = db