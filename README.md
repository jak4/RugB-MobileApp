RugB-MobileApp
==============

RugB-Presentation 05.09.2013 - MobileApp Development with HTML/CSS/JS using RoR, Sinatra, Phonegap, Ripple, GruntJS and Coffeescript

Cordova 3.0 Mobile App.

Is almost vanilla cordova 3.0 except for:

 * Grunfile.js: Grunt.js config file. This file is used to tell Grunt what to do (here: compile Coffeescript to JS)
 * package.json: Grunt.js config file.
 * setup_grunt.sh: Install grunt-cli and the grunt.js dependencies (as defined in package.json)
 * src: Directory that has the additional source files normaly not part of an cordova application (coffee, haml..). It also links to the normal cordova application files (html, js, css ...)
