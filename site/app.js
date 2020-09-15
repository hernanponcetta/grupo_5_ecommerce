const express = require('express')
const app = express();

app.use(express.static(__dirname + '/public')); //setea para que busque en site/public los archivos a ejecutar

app.get('/', (req, res) => {
    res.send('Servidor Corriendo')
});

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html')
});

app.get('/productCart', (req, res) => {
    res.sendFile(__dirname + '/productCart.html')
});

app.get('/productDetail', (req, res) => {
    res.sendFile(__dirname + '/productDetail.html')
});

app.get('/registration', (req, res) => {
    res.sendFile(__dirname + '/registration.html')
});

app.get('/footer', (req, res) => {
    res.sendFile(__dirname + '/footer.html')
});

app.get('/header', (req, res) => {
    res.sendFile(__dirname + '/header.html')
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
})