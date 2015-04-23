var Profile = require("./profile.js");
var renderer = require("./renderer.js");
var queryString = require("querystring");

var commonHeaders = {"Content-type": "text/html"};
// Handle the HTTP route GET / and POST / i.e. Home
function home(request, response) {
  if (request.url === "/") {
    if (request.method.toLowerCase() === "get") {
      // show the search field
      response.writeHead(200, commonHeaders);
      renderer.view("header", {}, response)
      renderer.view("search", {}, response)
      renderer.view("footer", {}, response)
      response.end();
    } else {
     // if url === "/" && POST

     // get the post data from body
     request.on("data", function(postBody) {
      // extract username
      var query = queryString.parse(postBody.toString())
      response.writeHead(303, {"Location": "/" + query.username })
      response.end();
      // redirect to /:username
     })
    }
  }

}
//  Handle HTTP route GET/:username i.e. /evanhughes3
function user(request, response) {
  // if url == "/...."
  var username = request.url.replace("/", "")
  if (username.length > 0 ) {
    response.writeHead(200, commonHeaders);
    renderer.view("header", {}, response)

    var studentProfile = new Profile(username);
     // on "end"
    studentProfile.on("end", function(profileJSON){
      // show profile

      // store values which we need
      var values = {
        avatarURL: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badgeCount: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      }
      // simple response
      renderer.view("profile", values, response);
      renderer.view("footer", {}, response);
      response.end();
    });
    // on "error"
    studentProfile.on("error", function(error){
      // show error
      renderer.view("error", {errorMessage: error.message}, response);
      renderer.view("search", {}, response)
      renderer.view("footer", {}, response);
      response.end();
    });
    // get json from Treehouse
  }
}


module.exports.home = home;
module.exports.user = user;