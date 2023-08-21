const express = require ('express');
const app = express ();

//Middlewares
app.use ('/posts', () => {
    console.log ('This is a Middleware')
});

//ROUTES
app.get ('/', (req, res) => {
res.send ('We are on home');

});

//Connect to DB




//How do we start listening to the server
app.listen (3000);
