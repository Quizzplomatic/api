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

module.exports.update = (req, res, next) => {
    const question = { title, solution, id } = req.body
    Question.findByIdAndUpdate(id, { title: title, solution: solution }, {new: true})
        .then(updatedQuestion => {
            res.status(200).json(updatedQuestion)
        })
        .catch(next)
}