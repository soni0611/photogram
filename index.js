const express = require("express");
const server = express();
const bodyParser = require("body-parser");
var multer = require('multer')

var fs = require('fs');
const cors = require('cors');

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().getTime() + file.originalname);
    }
});
const upload = multer({ storage: storage });
mongoose.connect('mongodb+srv://shivam0611:shivam0611@cluster0-6rv7x.mongodb.net', { useNewUrlParser: true, dbName: 'photogram' }).then(() => {
    console.log("Connected to database!");
})
    .catch((error) => {
        console.log("Connection failed!");
        console.log(error);
    });


const photoSchema = new Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    uid: { type: String, required: true }
});

const Photo = mongoose.model('Photo', photoSchema);

server.use('/uploads', express.static('uploads'));

server.use(bodyParser.urlencoded())
server.use(bodyParser.json())
server.use(cors());
server.use(express.static('build'))

server.post("/photo", function (req, res) {

    let photo = new Photo();
    photo.title = req.body.title;
    photo.desc = req.body.desc;
    photo.uid = req.body.uid;
    photo.image = req.body.image;
    photo.save().then((doc) => {
        res.json(doc);
    })

})
server.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    console.log(req.file)
    // req.body will hold the text fields, if there were any
    res.json(req.file.filename)

})

server.get("/photos", function (req, res) {
    console.log(req.query.uid)
    Photo.find({ uid: req.query.uid }).then((docs) => {
        res.json(docs);
    })

})


server.delete("/del", function (req, res) {
    console.log(req.query._id)
    Photo.findByIdAndDelete({ _id: req.query._id }).then((docs) => {
        res.json(docs);
    })
})


const path = require("path")
server.get('*', function (req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, './build/') });
});


server.listen(process.env.PORT, function () {
    console.log("server started");
})