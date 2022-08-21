const express = require('express');
const app = express();
const port = 8000;


app.get('/', (request, response) => {
    response.send('Hello World!');
})

app.get('/page', (request, response) => {
    response.send('Hello World! On page!');
})

app.listen(port, function(){
    console.log('listening on port ' + port);
});
