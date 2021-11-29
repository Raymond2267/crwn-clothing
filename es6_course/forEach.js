/**
 * forEach will run through the whole array, meaning you can not shortcircuit
 * as you can in a for loop
 */

//Example
var colors = ['red', 'blue', 'green'];
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(function (color) {
  console.log(color);
});

var numbers = [1, 2, 3, 4, 5];
var sum = 0;
numbers.forEach(function (number) {
  sum += number;
  console.log(sum);
});
