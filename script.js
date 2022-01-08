// TODO: fix jumbotron time format
// TODO: set currentTime to actual time
// TODO: lock button functionality

var timeDisplay = document.querySelector('#currentDay');
timeDisplay.textContent = moment().format('h:mm:ss A');
var allTimeSlots = document.querySelectorAll('div.input-group');
var allTimeSlots2 = $('.input-group');
var currentTime = 1302;
// console.log(allTimeSlots);

setInterval(function () {
        // currentTime = moment().format('HHMM');
        // currentTime = 1302;
        timeDisplay.textContent = currentTime;
        pastPresentFuture();
        }, 1000
);

function pastPresentFuture () {
        // check each 
        for (var i = 0; i < allTimeSlots.length; i++) {
                var eachTimeSlot = Number(allTimeSlots[i].children[0].children[0].textContent);
                var eachTextArea = allTimeSlots[i].children[1];
                // console.log(eachTextArea);
                if ((eachTimeSlot <= currentTime) && (eachTimeSlot + 59) >= currentTime) {
                        eachTextArea.setAttribute("class", "form-control present");
                        // console.log(currentTime + " is IN the time slot: " + eachTimeSlot);
                } else if (eachTimeSlot > currentTime) {
                        eachTextArea.setAttribute("class", "form-control future");
                        // console.log(currentTime + " is BEFORE the time slot: " + eachTimeSlot);
                } else if ((eachTimeSlot + 59) < currentTime) {
                        eachTextArea.setAttribute("class", "form-control past");
                        // console.log(currentTime + " is PAST the time slot: " + eachTimeSlot);
                        // eachTextArea.disabled = true;
                }
        }

}

console.log(allTimeSlots2);
allTimeSlots2.on('click', '.lock-button', function(event) {
        var btnPressed = event.target;
        console.log(btnPressed);
});
