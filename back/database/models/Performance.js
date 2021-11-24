const { DataTypes } = require('sequelize')

module.exports = (sequelize)=>{
    return sequelize.define('performance',{
        id:{
            type:DataTypes.STRING,
            unique:true,
            primaryKey:true,
            allowNull:false,
        },
        sale_day:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        customer_score:{
            type: DataTypes.INTEGER,
            allowNull:false,
            len:{ //tamaño 
                args: [0,5],
                msg: 'only from 0 to 5'
            }
        },
        losses_day:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        Organization:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        Responsibility:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        Conduct:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        Resource_management:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        Conflict_management:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        Contribution:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        Outcome:{
            type: DataTypes.INTEGER,
            allowNull:false
        }
    })
}

//  "sale_day":1217,
//  "customer_score":1,
//  "losses_day":-30,
//  "Organization":1,
//  "Responsibility":0,
//  "Conduct":1,
//  "Resource_management":1,
//  "Conflict_management":1,
//  "Contribution":1