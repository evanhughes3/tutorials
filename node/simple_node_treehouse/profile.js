
// Problem: Simple way to look at a users badge count and javascript points

// Solution: Use Node.js to connect to Treehouses API to get profile info to print to console

// Print out message
function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
}

// Print out error messages

function printError(error) {
  console.error(error.message)
};

function get(username) {

  var http = require("http")

  // Connect to API_URL(treehouse.com/username.json)
  var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
    // Read data
    var body = ""
    response.on('data', function (chunk) {
      body += chunk;
    });

    response.on('end', function(){
      if (response.statusCode === 200) {
        try {
          // Parse Data
          var profile = JSON.parse(body);
          // Print Data
          printMessage(username, profile.badges.length, profile.points.JavaScript)
        } catch(error) {
          // Parse Error
          printError(error);
        }
      } else {
        // Status Code Error
        printError({message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"})
      }
    });
  });

  // connection error
  request.on('error', printError);
}



module.exports.get = get;