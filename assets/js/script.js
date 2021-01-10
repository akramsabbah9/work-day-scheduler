/* GLOBALS */
// array to hold schedule of events.
// each event looks like: {time: hour, event: "string" }
var schedule = [{time:  9, event: ""}, {time: 10, event: ""}, {time: 11, event: ""}, 
                {time: 12, event: ""}, {time: 13, event: ""}, {time: 14, event: ""}, 
                {time: 15, event: ""}, {time: 16, event: ""}, {time: 17, event: ""}];


/* FUNCTIONS */
// Update the page based on what time it is.
var updatePage = function () {
    var now = moment();
    
    // 1) change the date display if it needs changing
    $("#currentDay").text(now.format("dddd, MMMM Do"));

    // 2) highlight present/past/future hour slots
    var currentHour = parseInt( now.format("H") );
    for(var i = 9; i <= 17; i++) {
        var hourID = "#time-" + i;
        
        // remove the highlight classes from this time block
        $(hourID).removeClass("past present future");

        // then, add the appropriate highlight class
        if (i < currentHour)        $(hourID).addClass("past");
        else if (i === currentHour) $(hourID).addClass("present");
        else                        $(hourID).addClass("future");
    }
};

// TODO: function to update schedule and localStorage

// Get schedule from localStorage.
var loadSchedule = function () {
    ;
};



/* EVENT LISTENERS */
// TODO: event listener for clicking on event textboxes

// TODO: event listener for clicking save buttons



/* MAIN */
// load events into schedule from localStorage

// perform initial update on the page
updatePage();

// every five minutes, update the page
setInterval(updatePage, 1000 * 60 * 5);


/* Akram Sabbah */