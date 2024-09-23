// Jai Shree Ram

// Importing the modules
const express = require('express');
const app = express();
const path = require('path');


// Setting the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
