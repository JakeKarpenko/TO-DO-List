const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

app.use(express.static('public'))

let item = "";
let items = ["By food", "Cook Food", "Eat Food"];

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function(req, res){

let today = new Date()

let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

let day = today.toLocaleDateString("en-US", options);

res.render('list',{listTitle: day, newListItems: items} )
});


app.post('/', function(req, res){

      item = req.body.newItem;
    
      if(req.body.list == "Work"){
          workItems.push(item);
          res.redirect('/work')
      }else{
        items.push(item)
        res.redirect('/')
      }
   
})

app.listen(port, function(){
    console.log('Server is starting..');
})
