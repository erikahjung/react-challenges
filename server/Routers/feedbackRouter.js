const express = require('express');

const FeedbackRouter = express.Router();
const feedbackController = require('../Controllers/feedbackController')

FeedbackRouter.get('/:n', feedbackController.getFeedback, (req, res) => {
  return res.status(200).json(res.locals.feedback);
})

module.exports = FeedbackRouter;