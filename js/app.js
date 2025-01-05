$(document).ready(function(){
    // Clock Logic
    var trigger = true;
    var reinit = false;
    var countTime = setInterval(update_time_keeper, 1000);
    
    function update_time_keeper(){    
        $('#time_keeper').val(new Date().toLocaleTimeString());
    
        let timeArray = $('#time_keeper').val().split(" ");
        timeArray = timeArray[0].split(":");
        let minutes = timeArray[1];
    
        if((minutes % 5 == 0) && trigger == true){
            update_status(minutes);
        }
    
        if((minutes % 5 != 0) && trigger == false){
            trigger = true;
        }
    }
    
    function update_status(minutes){
        while((minutes % 5 == 0) && trigger){
            trigger = false;
    
            // Generate random number, passing in minutes
            // Execute status functions, passing in random number
            
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
        countTime = setInterval(update_time_keeper, 1000);
    }

    // Warn user before closing tab
    // window.onbeforeunload = function(e) {
    //     return '';
    // };
});
