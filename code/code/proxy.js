//代理脚本，真正的向目标发起请求
const url = "http://v.juhe.cn/toutiao/index?type=top&key=fdbe4736f44b03fd18310ae63d058e69";
const http = require('http');
const server = http.createServer((req,res) => {
	//需要向目标url，发起请求，获取json数据，最终作为结果返回
	//使用使用clientRequest对象发起请问
	http.get(url,(res1) => {
		let str = "";
		res1.on('data',(chunk) => {
			str += chunk;
		});

		res1.on('end', () => {
			res.writeHead(200,{"content-type":"text/plain"});
			//将请求的数据返回
			res.write( "angular.callbacks._0(" + str +")" );
			res.end();
		});
	});
});

//开启server服务
server.listen(4000, () => {
	console.log('http server is listening in port 4000...');
});