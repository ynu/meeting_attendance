"use strict";

module.exports = function(sequelize, DataTypes) {
    var attendance = sequelize.define("attendance", {
        name: DataTypes.STRING,
        phone_number: DataTypes.STRING,
        // department: DataTypes.STRING,
        // job: DataTypes.STRING
        localtion: DataTypes.STRING,
    }, {
        classMethods: {
            // associate: function(models) {
            //     User.hasMany(models.Task)
            // }
        }
    });

    return attendance;
};