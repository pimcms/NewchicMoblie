var conn =require('./conn');

function User (user) {
	if(user){
		this.username=user.username;
		this.password=user.password;
		this.age=parseInt(user.age);
	}
}

var addUserSql = 'INSERT INTO user (username,password,age) values (?,?,?)',
	modifyUserSql = '',
	findAllUserSql = 'SELECT * FROM user';
User.prototype={
	addUser:function(){
		//console.log(this.username);
		conn.query(addUserSql,[this.username,this.password,this.age],function(err){
			if(err){
				console.log(err);
			}else{
				return 'OK';
			}
		});
	},	
	loginUser:function(){
		
	},
	registerUser:function(){
		
	},
	modifyUser:function(){
		
	},
	deleteUser:function(){
		
	},
	findUser:function(){
		
	},
	findAllUser:function(){
		conn.query(findAllUserSql,function(err,res,next){
			if(err){
				console.log(err);
			}else{
				return res;
			}
		});
	}
}

module.exports = User;





