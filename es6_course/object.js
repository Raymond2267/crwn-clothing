/**
 * djsbfksb
 * sdknflsd
 * sdnlsndlkns
 */

const multiply = (...nums) => {
  return nums.reduce((memo, curr) => {
    memo = memo * curr;
    return memo;
  }, 1);
};

console.log(multiply(2, 2, 2, 2, 2, 2));

var x = {
  name: {
    first: 'Nick',
    last: 'Ko',
    middle: ['something', 'other'],
  },
};

const [something, other] = { x: { name: middle } };
