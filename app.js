const express = require('express')
const app = express()
const path = require('path')

app.listen(3030, () => {   // ->   localhost:3030  en browser mostrara 'Can not get' al no devolver ningun respond. La terminal sigue corriendo. Se corta con Ctrl + C
    console.log('Servidor en puerto 3030 corriendo')
})


app.use(express.static(path.join(__dirname, 'public')))  //se puede prescidir de este termino __dirname,


app.get('/', (req,res) => { //

    res.sendFile(path.join(__dirname,'./views/index.html'))  // mostrara por browser el archivo index.html en alojado en carpeta 'views'.
})
                                    // __dirname,'./views/index.html'  -> ruta ABSOLUTA.

app.get('/babbage', (req,res) => {

    res.sendFile(path.join(__dirname,'./views/babbage.html'))  //deberia cargar los archivos .html en la carpeta views.
})



app.get('/berners-lee', (req,res) => {

    res.sendFile(path.join(__dirname,'./views/berners-lee.html'))  //deberia cargar los archivos .html en la carpeta views.
})


app.get('/clarke', (req,res) => {

    res.sendFile(path.join(__dirname,'./views/clarke.html'))  //deberia cargar los archivos .html en la carpeta views.
})

app.get('/hamilton', (req,res) => {

    res.sendFile(path.join(__dirname,'./views/hamilton.html'))  //deberia cargar los archivos .html en la carpeta views.
})


app.get('/hopper', (req,res) => {

    res.sendFile(path.join(__dirname,'./views/hopper.html'))  //deberia cargar los archivos .html en la carpeta views.
})

app.get('/lovelace', (req,res) => {

    res.sendFile(path.join(__dirname,'./views/lovelace.html'))  //deberia cargar los archivos .html en la carpeta views.
})

app.get('/turing', (req,res) => {

    res.sendFile(path.join(__dirname,'./views/turing.html'))  //deberia cargar los archivos .html en la carpeta views.
})



