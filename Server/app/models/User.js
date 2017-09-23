var dbConnection = require("./../../config/dbConnection");
var connection = dbConnection();

var User = {

    getAllUsers : function(callback){
        return connection.query("SELECT * FROM User", callback);
    },

    getUserById : function(id, callback){
        return connection.query("SELECT * FROM User WHERE ID_USER = ?", [id], callback);
    },

    addUser : function(user, callback){
        return connection.query("INSERT INTO USER (CODE_CPF, NAME, SURNAME, BIRTHDATE, SEX, EMAIL, PASSWORD, CREATE_TIME, CELLPHONE, PHONENUMBER, IMAGE, ID_ADDRESS_FK) values (?,?,?,?,?,?,?,?,?,?,?,?);"
        ,[user.cpf,user.name, user.surname, user.birthdate, user.sex, user.email, user.password, user.create_time, user.cellphone, user.phonenumber, user.image, user.id_address_fk],callback)
    },   

    updateUser : function(id, user, callback){
       /// return connection.query("UPDATE User SET ?????????? WHERE Id = ?")
    },

    removeUser : function(id, callback){
        return connection.query("DELETE FROM User WHERE Id = ?",[id],callback);
    },

    getLoginParams : function(email, callback){
        return connection.query("SELECT Email, Password FROM User WHERE Email = ?",[email], callback);
    }
};

module.exports = User;