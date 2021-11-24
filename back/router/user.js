const express =  require('express')
const router = express.Router()
const {v4:uuidv4}= require('uuid')
const axios = require('axios')
//traemos el modelo
const {user,performance} = require('../database/db')
const {Op} = require('sequelize')

//ruta para ver a todos y hacer busqueda del nombre
router.get('/',async (req,res)=>{
    const {name} = req.query

    if (name) {
        try {

            let find = await user.findAll({where: {firstName: {
                [Op.like]: `%${name}%`
            }},
            attributes:['id','firstName','lastName','email','age','address','image'],
            include:{
                model:performance,
                as:'registration',
            }
            })

            return res.json(find)

        } catch (error) {   
            return res.json({error: 'USER IS FAILED'})
        }
    }else{
        
        return user.findAll({
            attributes:['id','firstName','lastName','email','age','address','image'],
            include:{
                model:performance,
                as:'registration',
            }
        })
        .then(use=>res.json(use))
        .catch(error=> res.json(error))
    }
})

//ruta para registrarnos
router.post('/',async(req,res)=>{
    const {firstName,lastName,email,password,age,address,image}=req.body
    const busqueda = await user.findAll({
        where:{email:email}
    })
    //si hay un registro previo te manda mensaje de existente 
    if(busqueda.length>0){
        res.json({msg:'Ya existe'})
    }else{
        try{//y si no se crea
             await user.create({
                id: uuidv4(),
                firstName:firstName,
                lastName:lastName,
                email:email,
                password:password,
                age:age,
                address:address,//acepta null
                image:image,//acepta null
            })
            res.json({msg:'agregado'})
        }catch(e){
            res.status(400).json(e)
        }
    }
})
//ruta para ver si su rendimiento es bueno
//recibimos el id del usuario para poder registrar su resultado de rendimiento por dia
router.post('/performance/:id',async(req,res)=>{
    const {id}=req.params
    const {sale_day,
        customer_score,
        losses_day,
        Organization,
        Responsibility,
        Conduct,
        Resource_management,
        Conflict_management,
        Contribution}=req.body

    //buscaremos por id si existe
    const busqueda = await user.findByPk(id)
    if(!busqueda){
        res.json({msg:'No existe el usuario'})
    }else{
        //consultamos la api para el resultado del empleado
        result= await axios.post('http://127.0.0.1:3010/api/machineLearnig',{sale_day,
            customer_score,
            losses_day,
            Organization,
            Responsibility,
            Conduct,
            Resource_management,
            Conflict_management,
            Contribution})
        //dependiendo del resultado guardamos en la base de datos
        
        if(result.data.resultado){
            try{
                await performance.create({
                    id:uuidv4(),
                    sale_day,
                    customer_score,
                    losses_day,
                    Organization,
                    Responsibility,
                    Conduct,
                    Resource_management,
                    Conflict_management,
                    Contribution,
                    Outcome:0,
                    userid:id,
                })
                res.json({msg:'agregado'})
            }catch(error){
                res.status(400).json(e)
            }
        }else{
            try{
                await performance.create({
                    id:uuidv4(),
                    sale_day,
                    customer_score,
                    losses_day,
                    Organization,
                    Responsibility,
                    Conduct,
                    Resource_management,
                    Conflict_management,
                    Contribution,
                    Outcome:1,
                    userid:id,
                })
                res.json({msg:'agregado'})
            }catch(error){
                res.status(400).json(e)
            }
        }
    }
    
})

//cambiar imagen 
router.put('/imagen/:id',async(req,res)=>{
    const {id}= req.params
    const {image}=req.body
    const use = await user.findByPk(id)
    if(!use){
        res.json({msg:'No existe el usuario'})
    }else{
        try{
            use.image=image
            await use.save()
            res.json({msg:'cambios con exito'})
        }catch(e){
            res.status(400).json(e)
        }
    }
})

module.exports= router