const axios = require('axios').default;

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: 'Emily' };
    user.lastName = 'Harber';
    return user;
  },
  fetchUser: () => {
    return axios
      .get('http://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.data)
      .catch((err) => console.log(err));
  },
};

module.exports = functions;
