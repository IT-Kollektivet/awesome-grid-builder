#!/usr/bin/env node

// https://npmjs.org/package/commander
var program = require("commander"),
    log = console.log,
    numerators =  ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one"],
    denominators = ["whole", "half", "third", "quarter", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth", "thirteenth", "fourteenth", "fifteenth", "sixteenth", "seventeenth", "eighteenth", "nineteenth", "twentieth", "twenty-first"];

program.parse(process.argv);
build(program.args);

//log(program);

function build(args) {
  log(
    fractalWord(4,7),
    fractalWord(7,4),
    fractalWord(16,10),
    fractalWord(19,1),
    fractalWord(1,20),
    fractalWord(1,9)
  )
}

function fractalWord(numerator, denominator) {
  var plural = denominator > 1 ? 's' : '';
  return numerators[--numerator] + '-' + denominators[--denominator] + plural;
}
