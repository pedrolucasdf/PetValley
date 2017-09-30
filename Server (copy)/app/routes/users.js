var user = require('./../models/User');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

module.exports = function(app){

    app.get('/users', function(req, res){
        user.getAllUsers(function(error, result){
            if(error)return res.status(400).json(error);
            return res.status(200).json(result);
        })
    });

    app.get('/user/:id', function(req,res){

        user.getUserById(req.params.id, function(error, result){
            if(error)return res.status(400).json(error);
            return res.status(200).json(result);
        })
    });    
    
    app.get('/login/:email', function(req,res){
        
        user.getLoginParams(req.params.email, function(error, result){
                if(error)return res.status(400).json(error);
                return res.status(200).json(result);
                })
            }); 

    app.post('/login', upload.array(), function (req, res, next) {
        var password = '';
        res.setHeader('Content-Type', 'application/json');
        /*console.log("metodo post");
        console.log(req.body.email);
        console.log(req.body.password);*/

        user.getLoginParams(req.body.email, function(error, result){
            if(error){
                res.status(400).json(error);
            }
            else{
                res.status(200).json(result);
                password = result[0]['Password'];
    
                if(password == req.body.password){
                    //return deu bom
                    console.log("Deu bom");
                }
                else{
                    //return deu ruim
                    console.log("Deu ruim");
                }
            }                
        })      
        
    });
    
}