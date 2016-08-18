$(document).ready(function() {
    findElementByText('Database Administrators');
})


function findElementByText(text) {  
    var jSpot = $("*:contains(" + text + ")")      .filter(function() {
        return $(this).children().length === 0;
    }).parent();    
    console.log(jSpot); 
};
