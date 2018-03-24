#!/usr/bin/env node

const colors = require('colors');
const greet = require("../lib/greet");

// get arguments after first two elements in process.argv
var arguments = process.argv.splice(2);

// check if user want language specific greeting
// default value of language is `null`
var lang = null;

// check if first argument is `--lang`
if (arguments[0] == '--lang') {
    // set second argument as language.
    lang = arguments[1];
}


// if `lang` is empty, then show random greeting
if (lang) {
    // print random greeting
    console.log(
        // wraps text with rainbow color formatting
        colors.rainbow(
            // returns the greeting text with specified language
            greet.greet(lang)
        )
    );
}
else {
    // print random greeting
    console.log(
        // wraps text with rainbow color formatting
        colors.rainbow(
            // returns the random greeting text
            greet.greetRandom()
        )
    );
}