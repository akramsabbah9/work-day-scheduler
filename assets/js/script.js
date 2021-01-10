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
    for(let i = 9; i <= 17; i++) {
        let hourID = "#time-" + i;
        
        // remove the highlight classes from this time block
        $(hourID).removeClass("past present future");

        // then, add the appropriate highlight class
        if (i < currentHour)        $(hourID).addClass("past");
        else if (i === currentHour) $(hourID).addClass("present");
        else                        $(hourID).addClass("future");
    }
};

// When an event is changed and saved, update schedule and localStorage.
var setSchedule = function (time, event) {
    // the index of the target time block in schedule is at (time - 9).
    // update the event of schedule[time-9]
    schedule[time-9].event = event;
    
    // then save schedule to localStorage
    localStorage.setItem("schedule", JSON.stringify(schedule));
};

// Get schedule from localStorage.
var loadSchedule = function () {
    schedule = JSON.parse(localStorage.getItem("schedule")) || schedule;

    for (let i in schedule) {
        // grab the timeBlock we're at
        let timeBlock = schedule[i];
        let hourID = "#time-" + timeBlock.time;
        
        // find its textarea & update the text to schedule's corresponding event
        $(hourID).find("textarea").text(timeBlock.event);
    }
};



/* EVENT LISTENERS */
// TODO: event listener for clicking on event textboxes

// TODO: event listener for clicking save buttons



/* MAIN */
// load events into schedule from localStorage
loadSchedule();

// perform initial update on the page
updatePage();

// every five minutes, update the page
setInterval(updatePage, 1000 * 60 * 5);


/* Akram Sabbah */