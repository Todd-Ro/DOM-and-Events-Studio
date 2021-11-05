// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    const takeoffButton = document.getElementById("takeoff");
    let flightStatusP = document.getElementById("flightStatus");
    let shuttleBackgroundVar = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let heightNumber = 0;
    let theRocket = document.getElementById("rocket");
    let heightPixels;

    function setHeightVisual(){
        heightPixels = String(heightNumber/1000);
        theRocket.style.bottom = heightPixels.concat("px");
    }

    takeoffButton.addEventListener('click', function(event) {
        let takeoffClickedConfirmWind = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (takeoffClickedConfirmWind) {
            flightStatusP.innerHTML = "Shuttle in flight.";
            shuttleBackgroundVar.style.backgroundColor = 'blue';
            heightNumber = 10000;
            shuttleHeight.innerHTML = heightNumber;
            setHeightVisual();
        }
    });

    const landButton = document.getElementById("landing");
    landButton.addEventListener('click', function(event) {
        let landAlertWind = window.confirm("The shuttle is landing. Landing gear engaged.");
        flightStatusP.innerHTML = "The shuttle has landed.";
        shuttleBackgroundVar.style.backgroundColor = 'green';
        heightNumber = 0;
        shuttleHeight.innerHTML = heightNumber;
        setHeightVisual();
    });

    const abortButton = document.getElementById("missionAbort");
    abortButton.addEventListener('click', function(event) {
        let abortClickedConfirmed = window.confirm("Confirm that you want to abort the mission.");
        if (abortClickedConfirmed) {
            flightStatusP.innerHTML = "Mission aborted.";
            shuttleBackgroundVar.style.backgroundColor = 'green';
            heightNumber = 0;
            shuttleHeight.innerHTML = heightNumber;
            setHeightVisual();
        }
    });

    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    //const leftButton;
    //const rightButton;

    upButton.addEventListener("click", function(event) {
        heightNumber += 10000;
        shuttleHeight.innerHTML = heightNumber;
        setHeightVisual();
    });
    downButton.addEventListener("click", function(event) {
        if(heightNumber >= 10000) {
            heightNumber -= 10000;
            setHeightVisual();
        }
        shuttleHeight.innerHTML = heightNumber;
    });

});