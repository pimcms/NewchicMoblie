angular.module("dataList", []).controller("myDataList", function($scope,$http) {
	$http.get("http://mbeta.newchic.com/index.php?com=index&t=huiText").success(function (response) {
		console.log(Object.prototype.toString.call(response).slice(8,-1));
		$scope.pro=[];$.each(response,function(i,val){
			var product=new Object();
			product.title=val["products_name"];
			product.price=val["products_price"];
			product.img=val["image_url"];
			product.url=val["categories_name"].concat(" ",val["botCat"],"/","p ",val["products_id"],".html").replace(/ /g,"-").replace(/&/g,"and");
			$scope.pro.push(product);	
			
		});
		
	});
});