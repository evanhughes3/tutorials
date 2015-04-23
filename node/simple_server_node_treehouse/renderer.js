var fs = require('fs')

function mergeValues(values, content){
  // cycle over all the keys
  for (var key in values) {
    // replace all {{key}} with the value from values object
    content = content.replace("{{" + key + "}}", values[key]);

  }

  // return merged content
  return content
}

function view(templateName, values, response) {
  var fileContents = fs.readFileSync('./views/' + templateName + ".html", {encoding: 'utf8'});
    // Insert values into the content
    fileContents = mergeValues(values, fileContents)
    // Write out the contents of the response
    response.write(fileContents);
}

module.exports.view = view;