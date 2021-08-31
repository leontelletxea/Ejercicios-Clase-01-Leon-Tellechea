const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/Ejercicios-Clase-01-Leon-Tellechea'));
app.listen(process.env.PORT || 8080);
app.get('/*', function(req, res) {
res.sendFile(path.join(__dirname + '/dist/Ejercicios-Clase-01-Leon-Tellechea/index.html'));
});
console.log('Build successful!!');