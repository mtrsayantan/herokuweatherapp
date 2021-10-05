const express = require('express');
const app = express();
const PORT = process.env.PORT || 7000;

//Import Route
const weatherRoute = require('./routes/weather');
//use view engine
app.set('view engine','ejs');
//middleware
app.use(express.static('local'));
app.use(express.urlencoded({ extended: true}));
//middleware route
app.use('/',weatherRoute);

app.listen(PORT, () => console.log(`listening at port ${PORT}`));