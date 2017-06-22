var express = require('express');
    app     = express();
    server  = require('http').createServer(app);
    fs 		= require('fs');
    path	= require('path');
    app.set('view engine', 'hbs');

  app.use(express.static(path.join(__dirname, 'public')))

  app.get('/', function(request, response){
    // request object is from the client,
    // the response is what were sending back
    response.send('Hey I think the server finally works')
  })

app.get('/handlebar-page1', function(req, res){
	res.render('handlebar-page1')
})

app.get('/handlebar-page2', function(req, res){
	res.render('handlebar-page2')
})

app.get('/blahblah', function(req, res){
	var myObject1 = {
		"name" : "object1",
		"position" : "first"
	}
	res.json(myObject1)
})

app.get('/json1', function(req, res){
	var myObject2 = {
		name : "object2",
		position : "second"
	}
	res.send(myObject2)
})

app.get('/textPage', function(req, res){
	res.send("This is text displayed in my browser");
})

// first argument is the port number
server.listen(5000, function(){
  console.log('server is listening on port 5000')
})
