const express = require("express");
const mongoose = require('mongoose');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 4000;
const investmentsRoutes = express.Router();
const Investments = require('./investments.model')

app.use(cors());

app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/investments", { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

app.use('/investments', investmentsRoutes);

investmentsRoutes.route('/').get(function(req, res) {
    Investments.find(function(err, investments) {
        if (err) {
            console.log(err);
        } else {
            res.json(investments);
        }
    });
});

investmentsRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Investments.findById(id, function(err, investments) {
        res.json(investments);
    });
});

investmentsRoutes.route('/add').post(function(req, res) {
    let investments = new Investments(req.body);
    investments.save()
        .then(investment => {
            res.status(200).json({'investment': 'investment added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new investment failed');
        });
});

investmentsRoutes.route('/update/:id').post(function(req, res) {
    Investments.findById(req.params.id, function(err, investments) {
        if (!investments)
            res.status(404).send("data is not found");
        else
            investments.investments_description = req.body.investments_description;
            investments.investments_responsible = req.body.investments_responsible;
            investments.investments_priority = req.body.investments_priority;
            investments.investments_completed = req.body.investments_completed;
            investments.save().then(investments => {
                res.json('Investment updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});
