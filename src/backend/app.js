const express = require('express');
const port = 3000;
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', express.static(`${__dirname}/public`));

mongoose.connect('mongodb://localhost/db', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', function () {
    console.log("error");
});
db.once('open', function () {
    console.log('db connected');
});


const itemSchema = new Schema({
    name: String,
    completed: Boolean

});
const Item = mongoose.model('Item', itemSchema);


app.post('/item', function (request, response) {
    
    Item.create(request.body).then((data, error) => {
        if (error === undefined) {
            response.status(200).json(data);
        } else {
            response.status(500).json(null);
        }
    });
});




app.get('/items', function (request, response) {
    Item.find().then((data, error) => {
        if (error === undefined) {
            response.status(200).json(data);
        } else {
            response.status(500).json(null);
        }
    })
});


app.delete('/delete/item/:id', function (request, response) {
    Item.remove({ _id: request.params.id }).then((data, error) => {
        if (error === undefined) {
            response.status(200).json(data);
        } else {
            response.status(500).json(null);
        }
    })
});

let query = { name: String };

app.post('/delete', function (request, response) {
    console.log(request.body);


    x = JSON.parse(request.body.elements);
    console.log(x);

    Item.deleteMany(x).then((data, error) => {
        if (error === undefined) {
            response.status(200).json(data);
        } else {
            response.status(500).json(null);
        }
    })
});

app.post('/item/deleteMany', function (request, response) {
    Item.deleteMany({ _id: { $in: request.body.elements } }).then((data, error) => {
        if (error === undefined) {
            response.status(200).json(data);
        } else {
            response.status(500).json(null);
        }
    })
})


app.put('/item/:id', function (request, response) {
    console.log(request.body)
    Item.findByIdAndUpdate({ _id: request.params.id }, { $set: request.body }).then((data, error) => {
        if (error === undefined) {
            response.status(200).json(data);
        } else {
            response.status(500).json(null);
        }
    })
});

app.put('/update', function (request, response) {
    console.log(request.params);
    console.log(request.body.elements);
    var criteria = {
        _id:{ $in: request.body.elements}
       };
    Item.updateMany( criteria , {completed : true}).then((data, error) => {
        if (error === undefined) {
            response.status(200).json(data);
        } else {
            response.status(500).json(null);
        }
    })
});





app.listen(port, function () {
    console.log("hey");
});

app.use("/hello", function (request, response) {
    response.send("page.html");

});
