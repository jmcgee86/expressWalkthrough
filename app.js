var express = require('express');
var app = express();
var port = process.env.PORT;
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function(){
    console.log("Express is Running");
});

app.get('/', function(req, res){
});

app.get('/hello', function(req,res){
  res.send("Hello, CareerDevs!")
})
 
 app.get('/student/:name', function(req,res){
  res.send("My name is " + req.params.name)
})

app.get('/speak/:animal', function(req,res){
  var sounds = {
    dog: "Woof",
    sheep: "Baah",
    cow: "Moooo",
    cat: "Meow",
    fox: "what do i say?"
    
  }
      var animal = req.params.animal.toLowerCase();
      var sound = sounds[animal];
      
      res.send("The " + animal + " says " + sound);

})

app.get('/speak/:animal/:duration', function(req,res){
  var sounds = {
    dog: "Woof",
    sheep: "Baah",
    cow: "Moooo",
    cat: "Meow",
    fox: "what do i say?"
    
  }
      var animal = req.params.animal.toLowerCase();
      var sound = sounds[animal];
      var noise = ""
      var duration = parseInt(req.params.duration)
      
      for (var i=0; i<duration; i++){
        noise += sound + " "
      }
      
      res.send("The " + animal + " says " + noise);

})