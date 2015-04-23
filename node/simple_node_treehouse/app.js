var profile = require("./profile.js");
var users = process.argv.slice(2)
// var users = ["evanhughes3", "evanhughes3"]

users.forEach(profile.get);