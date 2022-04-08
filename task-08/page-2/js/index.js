function button_1() {
    localStorage.setItem("storing data")

}
function button_2() {
    var today_date = new Date();
    var current_time = "Time : " + today_date.getHours() + " : " + today_date.getMinutes();

    alert(current_time);
}
function button_3() {
    document.body.style.background = "blue";
}
function button_4() {

}

function button_6() {
    for (var i = 1; i <= 100; i++) {
        console.log("I did it")
    }

}