const path           = require('path'),
      Grid           = require('gridfs-stream'),
      crypto         = require('crypto'),
      multer         = require('multer'),
      express        = require('express'),
      mongoose       = require('mongoose'),
      bodyParser     = require('body-parser'),
      nodemailer     = require("nodemailer"),
      GridFsStorage  = require('multer-gridfs-storage'),
      methodOverride = require('method-override');

// JSON Data-set
const catalog        = require("./data/catalog.json");
      
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

// View Engine
app.set('view engine', 'ejs');

// Mongo URI MLAB
const mongoURI = 'mongodb://lemillion:Cwa13642629504@ds053156.mlab.com:53156/photoportfolio';
const conn = mongoose.createConnection(mongoURI, {useNewUrlParser: true});

app.get("/", function(req, res){
    res.render("index");
});

app.get("/portfolio", function(req, res){
    res.render("pages/portfolio", {data: catalog});
});

app.get("/portraits", function(req, res){
    res.render("pages/portraits", {data: catalog});
});

app.get("/cityscapes", function(req, res){
    res.render("pages/cityscapes", {data: catalog});
});

app.get("/product", function(req, res){
    res.render("pages/product", {data: catalog});
});

// Listening
const port = process.env.PORT || 8000;

app.listen(port, function() {
    console.log("Server has started");
});