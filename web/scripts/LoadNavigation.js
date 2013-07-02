/*
Document 	: LoadNavigation.js
Edited 		: May 30, 2013
Author 		: Andrew, AndrewWilkinson88@gmail.com
Description	: A couple functions to replace id="navPanel" str content 
				on the website to splace the navigation panel.
 */

//This function is used to generate the navigation panel for the website
function initNavigation() 
{
	//Place the generated page into the website
	document.getElementById( "navPanel" ).innerHTML = placeNavigation();
}

function placeNavigation()
{
	var name 		= "";
	var location 	= "";
	var subNav 		= "";
	var strContent	= "";
 
 	//The top of the navigation panel
	strContent += "<h2>Android Labs</h2>";
	strContent += "<ul>";

	//Cycle through the list of links and concat them as neccessarry 
	for ( var i = 0 ; i < main_nav.names.length ; i++ )
	{
		name 		= main_nav.names[i];
		location 	= main_nav.locations[i];
		subNav		= main_nav.subNavigation[i];
		if( location == "NULL" ) location = "";
		
		strContent += "<li><a class=\"main\" href=\"" + location + "\">" + name + "</a></li>";
		
		switch(subNav)
		{
			case 'project_nav':				
				strContent = fillSubNavigation( strContent, project_nav);
				break;
				
			case 'links_nav':			
				strContent = fillSubNavigation( strContent, links_nav);
				break;
				
			default:
				break;	
			
		}
	}

	strContent += "</ul>";
	strContent += "&nbsp;"
	return strContent; 
}

function fillSubNavigation(strContent, subNav)
{
	var name 		= "";
	var location 	= "";
	
	strContent += "<li class=\"sub\">";
	strContent += "<ul>";

	for ( var i = 0 ; i < subNav.names.length ; i++ ) 
	{
		name 		= subNav.names[i];
		location 	= subNav.locations[i];
		if( location == "NULL" ) location = "";
		
		strContent += "<li class=\"sub\"><a href=\" "+ location +" \">"+ name +"</a></li>";
	}

	strContent += "</ul>";
	return strContent;
}