
module.exports = (sequelize,DataTypes,Model) => {

    class Student extends Model { }

    Student.init({
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            defaultValue:'singh'
            // allowNull defaults to true
        }, class: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        image: {
            type:DataTypes.STRING
        }
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Student' // We need to choose the model name
    });

    // the defined model is the class itself
return Student
    // module.exports = Student
}