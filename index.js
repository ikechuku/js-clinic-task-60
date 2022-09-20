var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

function bookSeat(id) {
    modal.style.display = "block";
    var seat = document.getElementById(id);
    if (!seat.classList.contains('booked')) {
        seat.classList.toggle("booked");
        console.log(seat.classList.contains('booked'))
    }
}


var bookedSlots = [
    {
        slotNo: "1",
        booked: false,
        size: "small",
    },
    {
        slotNo: "2",
        booked: false,
        size: "small",
    },
    {
        slotNo: "3",
        booked: false,
        size: "small",
    },
    {
        slotNo: "4",
        booked: false,
        size: "small",
    },
    {
        slotNo: "5",
        booked: false,
        size: "small",
    },
    {
        slotNo: "6",
        booked: false,
        size: "small",
    },
    {
        slotNo: "7",
        booked: false,
        size: "small",
    },
    {
        slotNo: "8",
        booked: false,
        size: "small",
    },
    {
        slotNo: "9",
        booked: false,
        size: "small",
    },
    {
        slotNo: "10",
        booked: false,
        size: "small",
    },
    {
        slotNo: "11",
        booked: false,
        size: "small",
    },


    {
        slotNo: "12",
        booked: false,
        size: "small",
    },
    {
        slotNo: "13",
        booked: false,
        size: "small",
    },
    {
        slotNo: "14",
        booked: false,
        size: "small",
    },
    {
        slotNo: "15",
        booked: false,
        size: "small",
    },
    {
        slotNo: "16",
        booked: false,
        size: "small",
    },
    {
        slotNo: "17",
        booked: false,
        size: "small",
    },
    {
        slotNo: "18",
        booked: false,
        size: "small",
    },
    {
        slotNo: "19",
        booked: false,
        size: "small",
    },
    {
        slotNo: "20",
        booked: false,
        size: "small",
    },

]

var app = document.querySelector('#lots');
var lis = bookedSlots.map(function (wizard) {
    return (
        '   <div onclick=bookSeat(this.id) id=' + wizard.slotNo + '"seat1" class="w-2/12 m-2 border h-10 rounded seat transition ease-in duration-500 flex justify-center items-center text-gray-500 " > '
        + wizard.slotNo +
        '</div>'
    );
}).join('')
// Create markup
app.innerHTML = lis 
