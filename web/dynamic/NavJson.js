/*
  Document	: NavJson.js
  Edited	: June 7, 2013
  Author	: Andrew, AndrewWilkinson88@gmail.com
 */

var main_nav = 
{
        "names" 	: [
            ["Home"],
            ["About"],
            ["Projects"],
            ["Links"]
        ],
        "locations"	: [
            ["index.html"],
            ["About.html"],
            ["Projects.html"],
            ["NULL"]            
        ],
        "subNavigation"	: [
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
            ["NULL"],
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