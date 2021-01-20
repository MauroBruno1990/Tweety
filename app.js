const express = require( 'express' );
const chalk = require('chalk');
const morgan = require('morgan'); 
var fs = require('fs')
var path = require('path')
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
const app = express(); 
///////

app.use(morgan('combined', { stream: accessLogStream }))
// Logger Middleware: this middleware will log all request in the Apache combined format to STDOUT
// - stream : Output stream for writing log lines, defaults to process.stdout.
// - combined: Standard Apache combined log output.
// :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
///////// Logger Middleware //////////

app.use(function (req, res, next) {
    // hacé tu logueo acá, probá console.log(req)
    // llamá a `next()`. Sino tu app recibirá pedidos 
    // pero no responderá adecuadamente.
    console.log(chalk.red("pase por el primer middlewar"))
    next()
})

app.use('/special/', function (req, res, next) {

    console.log(chalk.blue('Pasé por el primer Middleware y por special'))
    next()
})



////////

app.use(morgan('tiny'))
app.listen(3000, function(){
    console.log('Servidor corriendo en el puerto 3000')
});