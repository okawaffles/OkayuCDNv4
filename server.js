// By okawaffles
// v4 - 2022
// I'm so proud of how far I've come.

console.log("Loading modules...");
var config;
const {info, error, warn} = require("./okayu_modules/logger");
const fs = require('fs');


try {
    require("express"); // detect if dependencies are installed
    require("ejs");
    require("cookie-parser");
} catch { error("main", "Missing dependencies. Please do 'npm ci' !"); process.exit(); }
try { config = require('./config.json'); } catch { error('main', 'Failed to load config!'); } // load config


// Set up modules if they are there
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.static('./views'));
app.use('/assets', express.static(__dirname + "/views/assets"));
app.use(cookieParser());
app.set('view engine', 'ejs');



// Account functions
function validateToken(token) {
    if (fs.existsSync(`./accounts/tokens/${token}.json`)) return true; else return false;
}




// Main Server

app.get('/', (req, res) => {
    let tk;
    if (req.cookies.token) tk = req.cookie.token; else tk = undefined;
    if (validateToken(tk)) {
        res.render('index.ejs', { username:getUsername(tk), CRedir:"fraise?path=me&redir=none" });
    } else res.render('index.ejs', { username:"Log In", CRedir:"fraise?path=login&redir=home" });
});
app.get('upload', (req, res) => {
    res.render('index.ejs');
});

app.get('/fraise', (req, res) => {
    let path, redir;
    if (req.query.path) path = req.query.path; else path = "login"; 
    if (req.query.redir) redir = req.query.redir; else redir = "home"; 

})

app.listen(config.listenOnPort, () => {
    info("app", `Listening on ${config.listenOnPort}`);
});