var dbConnection = require("./../../config/dbConnection");
var connection = dbConnection();

var Address = {

    getAddresses : function(callback){
        return connection.query('SELECT * FROM Address', callback);
    },

    getAddressById : function(id, callback){
        return connection.query('SELECT * FROM Address WHERE ID_ADDRESS = ?', [Id], callback);
    },

    addAddress : function(address, callback){
        return connection.query('INSERT INTO Address (POSTAL_CODE, LOCATION, TYPE_LOCATION, NEIGHBORHOOD, CITY, STATE, COMPLEMENT, NUMBER_HOUSE) values (?,?,?,?,?,?,?,?)'
        ,[address.postal_code, address.location, address.type_location, address.neighborhood, address.city, address.state, address.complement, address.number_house], callback);
    }    
};

module.exports = Address;