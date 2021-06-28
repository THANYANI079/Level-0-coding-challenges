function number_to_hour_and_min(input) {
    input = Number(input);
    var hours = Math.floor(input / 60);
    var minutes = Math.floor(input -hours * 60);

    var hour_Display = hours > 0 ? hours + (hours == 1 ? " hour " : " hours ") : "";
    var minutes_Display = minutes > 0 ? minutes + (minutes == 1 ? ", minute " : " minutes ") : "";
    return hour_Display + minutes_Display ; 
}
console.log(number_to_hour_and_min(130));
