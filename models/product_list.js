var userSchema = new Schema({
	Name:String,
	City:String,
	Country:String,
	Address:String
})

var userModel = mongoose.model('product',userSchema);