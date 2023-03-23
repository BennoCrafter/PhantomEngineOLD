class time{
    sleep(milliseconds) {
        let timerStarted = false;

        if (!timerStarted) {
            let startTime = new Date().getTime();
            let endTime = startTime + milliseconds;

            setInterval(function() {
                let timeLeft = endTime - new Date().getTime();


                if (timeLeft > 0) {
                    //do nothing
                }
                else {
                    timerStarted = false;
                }
            }, 1000);
            timerStarted = true;
        }
    }

}

export class gameWindow {
    reload() {
        
    }
}