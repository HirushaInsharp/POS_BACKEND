const mongoose = require('mongoose');

const Customer = mongoose.model('Customer');

const addCustomer = function (req, res) {
  Customer.find({
    email: req.body.email,
  })
    .then((user) => {
      if (user.length > 0) {
        throw new Error('Email already exists');
      } else {
        // hashing the password
        const userInfo = req.body;
        const newUser = new Customer(userInfo);
        newUser.save().then((userData) => {
          res.json({
            email: userData.email,
            fullname: userData.fullname,
            telephone: userData.telephone,
            address: userData.address,
            company: userData.company,
            registeredDate: userData.registeredDate,
          });
        });
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const listCustomer = function (req, res) {
  Customer.find({})
    .then((userList) => {
      if (userList.length > 0) res.json(userList);
      else throw new Error('no users');
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = {
  addCustomer,
  listCustomer,
};
