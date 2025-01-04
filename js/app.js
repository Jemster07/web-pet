$(document).ready(function () {
    count_time();
});

function count_time(){
    setInterval(update_clock_fields, 1000);
}

function update_clock_fields(){
    $('#time_keeper').val(new Date().toLocaleTimeString());

    let timeArray = $('#time_keeper').val().split(" ");
    timeArray = timeArray[0].split(":");
    let minutes = timeArray[1];

    $('#interval_tracker').val(minutes);

    if(minutes % 15 == 0){
        console.log("15 minutes has passed");
    }
}