const CompanyModel = require('../Models/companyModel');
const { getRandomNumber } = require('../../utils');

const feedbackController = {
  // get mock employee survey feedback for n employees
  getFeedback: (req, res, next) => {
    const { n } = req.params;
    const mockFeedback = [];
  
    for (let i = 1; i <= n; i++) {
      const department = CompanyModel.getRandomDepartment();

      const feedback = {
        id: i,
        name: `Employee ${i}`,
        department,
        job_title: CompanyModel.getRandomJobTitle(department),
        tenure: getRandomNumber(0, 10),
        stress_level: getRandomNumber(0, 10, 1),
        work_life_balance: getRandomNumber(0, 10, 1),
        physical_health : getRandomNumber(0, 10, 1),
        mental_health: getRandomNumber(0, 10, 1),
      }
      mockFeedback.push(feedback);
    }
  
    res.locals.feedback = mockFeedback;
    return next();
  }
};

module.exports = feedbackController;