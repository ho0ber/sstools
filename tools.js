// Yes, this is ugly. Don't judge me.
var run = false;

function startAME() {
    if (run) return; //otherwise we can double-up on our timeout
    run = true;
    calculateAME(false);
}

function calculateAME(sub = true) {
    if (!run) return;
    let inject = document.getElementById("inject").value;
    let interval = document.getElementById("interval").value;
    let fuel = document.getElementById("fuel").value;
    if (sub) {
        fuel -= 2;
        document.getElementById("fuel").value = fuel;
    }
    let result = ((fuel/inject)*interval)
    document.getElementById("result").innerHTML = new Date(result * 1000).toISOString().substr(11, 8);
    setTimeout(calculateAME, interval * 1000);
}

function stopAME() {
    run = false;
}
