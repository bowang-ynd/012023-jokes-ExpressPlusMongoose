const { update } = require('../models/jokes.model');
const joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    joke.find()
        .then( (allJokes) => {
            res.json({ jokes: allJokes });
        })
        .catch( (err) => {
            res.json({ message: "Something went wrong", error: err });
        });
};

module.exports.findOneJoke = (req, res) => {
    joke.find({ _id: req.params.id })
        .then( (oneJoke) => {
            res.json({ joke: oneJoke });
        })
        .catch( (err) => {
            res.json({ message: "Something went wrong", error: err });
        })
};

module.exports.createJoke = (req, res) => {
    joke.create(req.body)
        .then( (newlyCreatedJoke) => {
            res.json({ joke: newlyCreatedJoke });
        })
        .catch( (err) => {
            res.json({ message: "Something went wrong", error: err });
        })
};

module.exports.updateOneJoke = (req, res) => {
    joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then( (updatedJoke) => {
            res.json({ joke: updatedJoke });
        })
        .catch( (err) => {
            res.json({ message: "Something went wrong", error: err });
        })
};

module.exports.deleteOneJoke = (req, res) => {
    joke.deleteOne({ _id: req.params.id })
        .then( (result) => {
            res.json({ result: result });
        })
        .catch( (err) => {
            res.json({ message: "Something went wrong", error: err });
        })
};

