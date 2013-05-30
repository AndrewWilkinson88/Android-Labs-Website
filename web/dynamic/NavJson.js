/*
  Document		: NavJson.js
  Edited		: May 30, 2013
  Author		: Andrew, AndrewWilkinson88@gmail.com
  Description	: This JSON file contains the names of all navigating links
               		located on the left side of the page.
 */

var main_nav = 
{
        "names" 	: [
            ["Home"],
            ["About"],
            ["Blog"],
            ["Projects"],
            ["Links"]
        ],
        "locations"	: [
            ["index.html"],
            ["About.html"],
            ["http://androidlabs.blogspot.com/"],
            ["Projects.html"],
            ["Links.html"]            
        ],
        "subNavigation"	: [
        	"NULL",
        	"NULL",
        	"NULL",
        	"project_nav",
        	"links_nav"
        ]
}

var project_nav = 
{
        "names" 	: [
            ["This Website"],
            ["TF2 Log Parser"],
            ["L-Systems in OpenTK"]
        ] ,
        "locations" : [
            ["Website.html"],
            ["TF2LogParse.html"],
            ["LSystems.html"]
        ]
}
                          
var links_nav = {
        "names" 	: [
            ["My Google plus account"],
            ["My GitHub Profile"],
            ["My Steam Profile"],
            ["The Fun-Gineers"],
            ["Mecha Soup Web Comic"]
        ] ,
        "locations" : [
            ["https://plus.google.com/105792254768354870620/posts"],
            ["https://github.com/AndrewWilkinson88"],
            ["http://steamcommunity.com/id/MrAndroid"],
            ["http://fungineers.net"],
            ["http://www.mechasoup.com/comic/index.php?date=2005-12-22"]
        ]
}