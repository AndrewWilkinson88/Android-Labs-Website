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
  placeLinks( );
}


function placeLinks() {
  
  ///<li><a href="Html5Example.html">HTML 5 Examples</a>   </li>
  var strContent = "" ;
  var name = "";
  var location = "";
  
  strContent += "<h2>Android Labs</h2>";
  strContent += "<ul>";
  
  //Cycle through the list of links and concat them as neccessarry 
  for ( var i = 0 ; i < main_links.links.names.length ; i++ ) {
    name = main_links.links.names[i];
    location = main_links.links.locations[i];
    strContent += "<li><a class=\"main\" href=\"" + location + "\">" + name + "</a></li>";
    
    if( name == "Projects") {
      strContent += "<li class=\"sub\">";
      strContent += "<ul>";
      for ( var j = 0 ; j < project_links.links.names.length ; j++ ) {
        name = project_links.links.names[j];
        location = project_links.links.locations[j];
        strContent += "<li class=\"sub\"><a href=\"" + location + "\">" + name + "</a></li>";
      }
      strContent += "</ul>";
    }
    
    if( name == "Links") {
      strContent += "<li class=\"sub\">";
      strContent += "<ul>";
      for ( var k = 0 ; k < other_links.links.names.length ; k++ ) {
        name = other_links.links.names[k];
        location = other_links.links.locations[k];
        strContent += "<li class=\"sub\"><a href=\"" + location + "\">" + name + "</a></li>";
      } 
      strContent += "</ul>";
    }
  }
  
  strContent += "</ul>";
  strContent += "&nbsp;"
  
  //Place the generated page into the website
  document.getElementById( "links" ).innerHTML = strContent ; 
}