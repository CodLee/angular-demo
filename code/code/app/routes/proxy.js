var express = require('express');
var router = express.Router();
var http = require("http");

/* GET home page. */
router.get('/', function(req, res, next) {
	//获取目标url
	// var url = req.query.target;
	var url ="http://v.juhe.cn/toutiao/index?type=top&key=fdbe4736f44b03fd18310ae63d058e69";
	//需要向目标服务器发起请求，获取数据，将获取到的结果以json的方式返回
	http.get(url,function(res1){
		var data = "";
		res1.on('data',function(chunk){
			data += chunk;
		});
		res1.on('end',function(){
			//已经全部接受完毕，data就是我们要的数据
			res.json(data);
		})
	});
});

module.exports = router;
