const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);
  expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
  var res = utils.square(3);
  expect(res).toBe(9).toBeA('number');
});

it('should verify first and last last names are set', () => {
  var user = {location: 'Ukraine', age: 27};
  var res = utils.setName(user, 'Anthony Synenko');

  expect(res).toInclude({
    firstName: 'Anthony',
    lastName: 'Synenko'
  });
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(12);
//   // expect({ name: 'Anthony' }).toEqual({ name: 'Anthony' });
//   // expect([2,3,4]).toExclude(1);
// });
