let countTime = setInterval(update_clock_fields, 1000);

function update_clock_fields(){
    $('#time_keeper').val(new Date().toLocaleTimeString());

    let timeArray = $('#time_keeper').val().split(" ");
    timeArray = timeArray[0].split(":");
    let minutes = timeArray[1];
    
    if(minutes % 5 == 0 || minutes == '00'){
        reinitializeClock();
    }
}

function reinitializeClock(){
    clearInterval(countTime);
    console.log('Clock reinitialized');
    countTime = setInterval(update_clock_fields, 1000);
}