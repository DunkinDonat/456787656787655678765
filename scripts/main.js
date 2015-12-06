/* constants representing the mouse-button ids */
const mouse_left=0;
const mouse_middle=1;
const mouse_right=2;

//variables used to define how to draw or erase
var color="#000000";
var tool="draw";
var thickness=2;
var drawing=false;

var canvas;
var context;

//This function is used to initialize the HTML-Canvas Object
//and to add some MouseEvent-Listeners to it
//you should not change anything here.
function init(){
	canvas=document.getElementById("canvas");
	context=canvas.getContext("2d");
	
	canvas.addEventListener('mousedown', canvasMouseDown, false);
	canvas.addEventListener('mousemove', canvasMouseMove, false);
	canvas.addEventListener('mouseup',   canvasMouseUp, false);
}

//include these three methods at the correct position
//within the html file
function switchColor(htmlElement){
	color=htmlElement.value;
	alert("switchColor"); //opens a dialog with the text assigned here. This can be deleted after successful integration
}

function switchTool(htmlElement){
	tool=htmlElement.value;
	alert("switchTool"); //opens a dialog with the text assigned here. This can be deleted after successful integration
}

function switchThickness(htmlElement){
	thickness=htmlElement.value;
	alert("switchThickness"); //opens a dialog with the text assigned here. This can be deleted after successful integration
}


//implement these three functions calling functions
//from the library "lib.js"
function canvasMouseDown(event)
{
	/*TODO: implement*/
}

function canvasMouseMove(event)
{	
	/*TODO: implement*/
}

function canvasMouseUp(event)
{
	/*TODO: implement*/
}

//include this function at the correct position in html and
//implement it calling the functions from the library
function save()
{
	alert("save"); //opens a dialog with the text assigned here. This can be deleted after successful integration
	/*TODO: implement*/
}

