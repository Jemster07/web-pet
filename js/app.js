var trigger = true;
var reinit = false;
var countTime = setInterval(update_clock_fields, 1000);

function update_clock_fields(){    
    $('#time_keeper').val(new Date().toLocaleTimeString());

    var timeArray = $('#time_keeper').val().split(" ");
    timeArray = timeArray[0].split(":");
    var minutes = timeArray[1];

    if(minutes % 5 == 0){
        update_status(minutes);
    }

    if((minutes % 5 != 0) && trigger == false){
        trigger = true;
    }
}

function update_status(minutes){
    // Require minutes to be divisible by 5 to prevent scenarios where update_status runs before previous instance completes
    while(trigger && (minutes % 5 == 0)){
        // Make trigger false to prevent re-running functions while they are still executing
        trigger = false;

        // Generate random number, passing in minutes
        // Execute status functions, passing in random number
        
        // Stop the interval execution
        clearInterval(countTime);
        reinit = true;
        break;
    }

    if(reinit){
        reinit = false;
        reinitialize_clock();
    }
}

function reinitialize_clock(){
    countTime = setInterval(update_clock_fields, 1000);
}