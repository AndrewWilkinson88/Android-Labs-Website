/*
  Document   : Html5Example.js
  Created on : December 13, 2010
  Edited     : June 29, 2010
  Author     : Andrew, AndrewWilkinson88@gmail.com
               UMass Lowell Computer Science
  Description: This is the java script file for assignment 8
 */

//Used for the local storage example, if the string isn't set yet make
//sure one is, so it has something display when run for the first time
if (!(localStorage.string)){
  localStorage.string="Try inputting a new String!";
}

function initHtml5Example(){
  placeContent();
}

//This function is used to update the local string in the local storage
//example. Updates to the page as well as in memory.
function processString() {
  var userInput = document.getElementById( "newString" );
  var display = document.getElementById( "currString" );
  localStorage.string = userInput.value;
  display.innerHTML = localStorage.string;
}

//This function was borrowed from the w3c site:
//http://www.w3.org/TR/html5/the-button-element.html#the-progress-element
function updateProgress(newValue) {
  var progressBar = document.getElementById('pBar');
  progressBar.value = newValue;
  progressBar.getElementsByTagName('span')[0].textContent = newValue;
}

//A function to show the progress bar in action. Calls the function after
//waiting in miliseconds specified by the second argument.
//I kept trying to do far more complicated things with setTimeout and the end
//lost about an hour, trying to make a variable wait time for the progress.
//in the end couldn't really figure it out. Although I'm sure the solution lies
//in the fact you need to make each succesive setTimeout longer than the previous
function showProgress() {
  var meter = document.getElementById('met');
  if( met.value != 10 ){
    met.value += 2;
    met.getElementsByTagName('span')[0].textContent = met.value;
    updateProgress(0)
    setTimeout( "updateProgress(25)", 400);
    setTimeout( "updateProgress(50)", 800);
    setTimeout( "updateProgress(75)", 1200);
    setTimeout( "updateProgress(100)", 2000);
  }
}

//This function is setup to showcase the canvas functionality in lesson 5
function drawFace() {
  var canvas=document.getElementById('canv');
  var ctx=canvas.getContext('2d');
  //Face
  ctx.fillStyle='#FFFF00';
  ctx.beginPath();
  ctx.arc(100,100,100,0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
  //Left Eye
  ctx.fillStyle='#000000';
  ctx.beginPath();
  ctx.arc(50,50,15,0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
  //Right Eye
  ctx.beginPath();
  ctx.arc(150,50,15,0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
  //Smile
  ctx.beginPath();
  ctx.arc(100,100,60,0, Math.PI, false);
  ctx.closePath();
  ctx.fill();

}

//This function is used to generate the different lessons after runtime
//by reading them from JSON data objects in the Html5Dynamic.js file.
function placeContent(part) {

  //Switch between the five different lessons
  var loadedContent = part0;
  switch(part){
    case 0:
      loadedContent = part0;
      break;
    case 1:
      loadedContent = part1;
      break;
    case 2:
      loadedContent = part2;
      break;
    case 3:
      loadedContent = part3;
      break;
    case 4:
      loadedContent = part4;
      break;
    case 5:
      loadedContent = part5;
      break;
  }
  
  var strContent = "" ;

  // Load content from the lesson title
  strContent += "<h1>" + loadedContent.title + "</h1>" ;

  // Load content from the example text
  if( loadedContent.example.content != ""){
    strContent += "<section class=\"example\">"
    strContent += "<p class=\"box\">";
    for ( var para = 0 ; para < loadedContent.example.content.length ; para++ ) {
      for ( var sent = 0 ; sent < loadedContent.example.content[para].length ; sent++ ) {
        strContent += loadedContent.example.content[para][sent] + "  " ;
      }
      if( para < loadedContent.example.content.length-1 ) strContent += "</br></br>";
    }
    strContent += "</p></section>" ;
  }

  // Load content from the example form, which can have unlimited inputs
  var type = "";
  var id = "";
  var value = "";
  if( loadedContent.example.form.valid != ""){
    strContent += "<form action=" + loadedContent.example.form.action + ">";
    for ( para = 0 ; para < loadedContent.example.form.inputs.types.length ; para++ ) {
      type  = loadedContent.example.form.inputs.types[para];
      id    = loadedContent.example.form.inputs.ids[para];
      value = loadedContent.example.form.inputs.values[para];
      strContent += "<input ";
      if( type != "" )  strContent += "type=\""  + type  + "\" ";
      if( id != "")     strContent += "id=\""    + id    + "\" ";
      if( value != "" ) strContent += "value=\"" + value + "\" ";
      strContent += "></input>";
    }
    strContent += "</form>"
  }

  //Load content from the description
  strContent += "<section class=\"description\">";
  strContent += "<p class=\"box\">";
  for ( para = 0 ; para < loadedContent.description.content.length ; para++ ) {
    for ( sent = 0 ; sent < loadedContent.description.content[para].length ; sent++ ) {
      strContent += loadedContent.description.content[para][sent] + "  " ;
    }
    if( para < loadedContent.description.content.length-1 ) strContent += "</br></br>" ;
  }

  strContent += "</p>"
  //Load the source of where I got the information for the new HTML5 feature

  if( loadedContent.sources != "" ){
    strContent += "<p class=\"box\">source:</br>"
    for (para = 0 ; para < loadedContent.sources.length ; para++ ) {
      strContent += "<a href=\"" + loadedContent.sources[para] + "\">" +
        loadedContent.sources[para] + "</a>";
      if( para < loadedContent.sources.length-1 ) strContent += "</br>" ;
    }
    strContent += "</p></section>" ;
  }
  //Place the generated page into the website
  document.getElementById( "content" ).innerHTML = strContent ;

  //will display the local string for the local storage example,
  //if that example is loaded.
  if( part == 1){
    var display = document.getElementById( "currString" );
    display.innerHTML = localStorage.string;
  }
  if( part == 5){
    drawFace();
  }
  
}