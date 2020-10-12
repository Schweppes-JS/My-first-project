var datelLine = document.getElementById('datelLine');
var monthLine = document.getElementById('monthLine');
var widgetline = document.getElementById('widgetline');

var date = new Date();
var month = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
datelLine.innerHTML = date.getDate();
monthLine.innerHTML = month[date.getMonth()];
