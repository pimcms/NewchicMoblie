var fs = require('fs'),
	mongoose = require('mongoose'),
	Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/newchic');

var userSchema = new Schema({
	Name:String,
	City:String,
	Country:String,
	Address:String
});

var userModel = mongoose.model('product',userSchema);
exports.userMedel = userModel;