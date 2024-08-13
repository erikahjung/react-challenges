const { getRandomNumber } = require('../../utils');

// sample company departments and job titles
const departmentJobTitles = {
  'Administration': ['Office Manager', 'Administrative Assistant', 'Executive Assistant'],
  'Research and Development': ['Research Scientist', 'Product Developer', 'R&D Engineer'],
  'Marketing': ['Marketing Manager', 'Brand Manager', 'Digital Marketing Specialist'],
  'Sales': ['Sales Manager', 'Account Executive', 'Sales Representative'],
  'Human Resources': ['Human Resources Manager', 'Talent Acquisition Specialist', 'Employee Relations Coordinator'],
  'Customer Service': ['Customer Service Representative', 'Customer Success Manager', 'Technical Support Specialist'],
  'Accounting and Finance': ['Financial Analyst', 'Accountant', 'Controller'],
  'Engineering': ['Software Engineer', 'Mechanical Engineer', 'Electrical Enginer'],
}

const CompanyModel = {
  getRandomDepartment: () => {
    const departments = Object.keys(departmentJobTitles);
    const randomIndex = getRandomNumber(0, departments.length);
  
    return departments[randomIndex];
  },

  getRandomJobTitle: (department) => {
    const jobTitles = departmentJobTitles[department];
    const randomIndex = getRandomNumber(0, jobTitles.length);
  
    return jobTitles[randomIndex];
  }
};

module.exports = CompanyModel;