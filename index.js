function bookSeat(id) {

    var element = document.getElementById(id);

    if (!element.classList.contains('booked')) {
        element.classList.toggle("booked");
        console.log(element.classList.contains('booked'))
    }

}

