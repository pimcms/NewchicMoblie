var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {	
 	var jsondata = fs.readFileSync('http://mbeta.newchic.com/index.php?com=index&t=huiText');
  	console.log(jsondata);
  	res.render('index', {title: 'Express',datas: JSON.parse(jsondata)});
});

/*router.get('', function(req, res, next) {  
  	res.render('product', {title: 'Product Detail'});
});*/

module.exports = router;
