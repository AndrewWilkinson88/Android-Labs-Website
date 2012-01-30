/*
  Document   : LoadLinks.js
  Created    : June 29, 2011
  Author     : Andrew, AndrewWilkinson88@gmail.com
               UMass Lowell Computer Science
  Description: This is the java script file for assignment 8
 */

//This function is used to generate the links in project page to stop
//duplicate code. Reads the links in from JSON data objects in the 
//IndexDynamic.js file.
function initLinks() {
  placeLinks( school_projects );
}


function placeLinks(linkSection) {

  //Switch between the five different lessons
  var loadedContent = linkSection;
  
  ///<li><a href="Html5Example.html">HTML 5 Examples</a>   </li>
  var strContent = "" ;
  var name = "";
  var location = "";

  //Cycle through the list of links and concat them as neccessarry 
  for ( var para = 0 ; para < loadedContent.links.names.length ; para++ ) {
    name = loadedContent.links.names[para];
    location = loadedContent.links.locations[para];
    strContent += "<li class=\"sub\"><a href=\"" + location + "\">" + name + "</a></li>";
  }
  console.log( loadedContent.type );
  
  //Place the generated page into the website
  document.getElementById( loadedContent.type ).innerHTML = strContent ;
  
}