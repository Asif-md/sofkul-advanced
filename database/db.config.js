
//var autoIncrement = require ('mongoose-auto-increment');
var mongoose_1 = require("mongoose");

//autoIncrement.initialize(mongoose_1);
/*
*   Database connection to mongoDB
*/
exports.connectMongoDB = function () {
    mongoose_1.connect('mongodb://asif:asif123@ds255309.mlab.com:55309/sofkul-advanced', function (err) {
        if (err) {
            console.log("Failed to connect to DB");
        }
        else {
            console.log("Successfully connected to MongoDB");
        }
    });
};
//mongodb://mohammedasif:asif123@ds129936.mlab.com:29936/sofkuldb
//mongodb://localhost/invoiceDB 
// mongodb://mohammedasif:asif123@ds255309.mlab.com:55309/sofkul-advanced