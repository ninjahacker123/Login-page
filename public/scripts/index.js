var name = prompt("What is your first name");
var firstLetter = name.slice(0, 1).toUpperCase();
var rest = name.slice(1, name.length).toLowerCase();
var firstName = firstLetter + rest;

$(".userName").text("Welcome, " + firstName);