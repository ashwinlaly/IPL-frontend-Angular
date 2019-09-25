var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(function(req,res,next){
	res.setHeader("Access-Control-Allow-Origin","*");
	res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, PATCH, DELETE");
	res.setHeader("Access-Control-Allow-Headers","*");
	res.setHeader("Access-Control-Allow-Credentials",false);
	next();
});


var r = require('rethinkdb');
var connection = null;

var router = express.Router();
r.connect({host:"localhost",port:28015},function(err,conn){
	connection = conn;
});

	router.route("/user")
		.get(function(req,res){
			var query = {};
			if(req.query){
				query = req.query;
			}
			r.db("api").table("user").filter(query).run(connection,function(err,cursor){
				cursor.toArray(function(err,result){
					res.json(result);
				});
			});
		})
		.post(function(req,res){
			r.db("api").table("user").insert(req.body).run(connection,function(err,result){
				res.json(result);
			});		
		});		

	router.route("/user/:userId")
			.get(function(req,res){
				var userid = req.params.userId;
				r.db("api").table("user").get(userid).run(connection,function(err,result){
					res.json(result);
				});
			})
			.put(function(req,res){
				var data = {};
				if(req.body){
					data.email = req.body.email;
					data.isVerified = req.body.isVerified;
					data.username = req.body.username;
					r.db("api").table("user").filter(r.row('id').eq(req.params.userId)).update(data).run(connection,function(err,result){
						res.json(result);
					});
				}
			})
			.delete((req,res)=>{
				r.db("api").table("user").filter(r.row("id").eq(req.params.userId)).delete().run(connection,function(err,result){
					res.json(result);
				});
			})
			.patch((req,res) => {
				if(req.body){
					console.log(req.body);
					/*for(s in req.body){
						
					}*/
					r.db("api").table("user").filter(r.row('id').eq(req.params.userId)).update(req.body).run(connection,function(err,result){
						res.json(result);
					});
				}
			});

app.use(router);

http.listen(1000,function(){
	console.log("Hai");
});