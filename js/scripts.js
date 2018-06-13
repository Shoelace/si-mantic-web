$(document).ready(function() {
	
    // all custom jQuery will go here
	
	if (window.moment) { 
	
$( "time" ).contextmenu( function () {
event.preventDefault();
var m = moment(event.currentTarget.dateTime,moment.ISO_8601,true);
if (!m.isValid()) { 
var d = moment.duration(event.currentTarget.dateTime)
if (!d.isValid()) { 
if (d.format )
	event.currentTarget.innerHTML = d.format();
else
	event.currentTarget.innerHTML = d;
}
 }
else{
event.currentTarget.innerHTML = m.format();
}
});
}else{
// non moment version
$( "time" ).contextmenu( function () {
event.preventDefault();
const d = new Date(event.currentTarget.dateTime);

if ( d.getDate() )
	event.currentTarget.innerHTML = "the dattime is '" + d +"'.";
//else leave it as is

});

}


});