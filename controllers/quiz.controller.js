const Question = require('../models/Question.model')

module.exports.list = (req, res, next) => {
    Question.find()
        .then(questions => res.status(200).json(questions))
        .catch(next)
}

module.exports.create = (req, res, next) => {
    const question = { title, solution, category } = req.body
    Question.create(question)
        .then(question => res.status(200).json(question))
        .catch(next)
}