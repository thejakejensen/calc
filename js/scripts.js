
// Business (or back-end) logic:

function add (number1, number2) {
  return number1 + number2;
};

// var subtract = function(number1, number2) {
//   return number1 - number2;
// };
//
// var multiply = function(number1, number2) {
//   return number1 * number2;
// };
//
// var divide = function(number1, number2) {
//   return number1 / number2;
// };

// User interface (or front-end) logic:

$(document).ready(function() {
  $("form#add").submit(function(event) {
    console.log("hi");
   event.preventDefault()
    var number1 = parseInt($("#add1").val());
    console.log(number1);
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
    console.log(output);
  });
});
