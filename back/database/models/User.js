const {DataTypes} = require('sequelize')

module.exports = (sequelize)=>{
    return sequelize.define('user',{
        id:{
            type:DataTypes.STRING,
            unique:true,
            primaryKey:true,
            allowNull:false,
        },
        firstName:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notNull:{
                    msg:'The field cannot be null'
                },
                isAlpha:{//solo letras
                    args:true,
                    msg: 'The name can only contain letters'
                }, 
                len:{ //tamaño 
                    args: [3,255],
                    msg: 'The name must contain more than 3 characters'
                }
            }
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notNull:{
                    msg:'The field cannot be null'
                },
                isAlpha:{//solo letras
                    args:true,
                    msg: 'The name can only contain letters'
                }, 
                len:{ //tamaño 
                    args: [3,255],
                    msg: 'The name must contain more than 3 characters'
                }
            }
        },
        email: {
            type:DataTypes.STRING,
            unique:true,
            validate:{
                isEmail:{
                    args: true,
                    msg: 'it must be a valid email'
                }
            }
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                is: /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/
            }
        },
        age: {
            type: DataTypes.INTEGER,
            validate:{
                isInt:{
                    args: true,
                    msg: 'must be a number the age'
                },
                min:{
                    args: 1,
                    msg: 'the age has to be greater than one'
                },
                max:{
                    args:150,
                    msg: 'the age must be real'
                },
                
            }
        },
        address:{
            type: DataTypes.TEXT,
        },
        role:{
            type: DataTypes.BOOLEAN,
            defaultValue:false //es falso cuando no es administrador
        },
        state:{
            type: DataTypes.BOOLEAN,
            defaultValue:true //true cuando esta activada la cuenta
        },
        image:{
            type:DataTypes.STRING,
            defaultValue:"https://img1.freepng.es/20180401/bdw/kisspng-arrow-down-android-computer-icons-profile-5ac093a9227300.8723755715225701531411.jpg"
        }
    })
}