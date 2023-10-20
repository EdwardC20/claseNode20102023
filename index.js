const express = require('express');

const app = express();
app.set('view engine','ejs');
app.use(express.static('public'));

//endpoints
app.get('/',(req,res)=>{
    //res.send("<h1>api corriendo....</h1>")
    res.render('index')
});




app.listen(3000,()=>{
    console.log("servidor corriendo en puerto 3000")
})