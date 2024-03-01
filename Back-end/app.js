const express = require ('express');
const app = express();
const Route = require('./Routes/Route');


app.use('/', Route);

app.listen(5000, (err) => {
    if (err) {
        console.log("Error!");
    } else {
        console.log(`Server started`);
    }
});

