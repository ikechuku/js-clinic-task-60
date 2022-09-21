// Modal Open Function
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

var currentLot, seat
function closeModal() {
    modal.style.display = "none";
}
span.onclick = closeModal


function setCurrentLot(id) {
    currentLot = id

    seat = document.getElementById(currentLot);
    console.log("booked:", seat.classList.contains('booked'))
    if (seat.classList.contains('booked')) {
        window.alert("This Lot has been booked")
        return
    }

    modal.style.display = "block";
    var modaltitle = document.querySelector('#modal-title');
    let text = "Book Lot " + currentLot
    modaltitle.innerHTML = text
}
function bookLot() {

    seat = document.getElementById(currentLot);
    if (!seat.classList.contains('booked')) {
        seat.classList.toggle("booked");
        console.log(seat.classList.contains('booked'))
    }
    console.log("CLICKED");
    closeModal()

}


var bookedSlots = [
    {
        slotNo: "1",
        booked: true,
        size: "small",
        bookedBy: {
            name: "",
            regNo: "",
            size: "",
        }
    },
    {
        slotNo: "2",
        booked: true,
        size: "large",
        bookedBy: {
            name: "",
            regNo: "",
            size: "",
        }
    },
    {
        slotNo: "3",
        booked: true,
        size: "large",
        bookedBy: {
            name: "",
            regNo: "",
            size: "",
        }
    },
    {
        slotNo: "4",
        booked: false,
        size: "small",
        bookedBy: {
            name: "",
            regNo: "",
            size: "",
        }
    },
    {
        slotNo: "5",
        booked: false,
        size: "small",
        bookedBy: {
            name: "",
            regNo: "",
            size: "",
        }
    },
    {
        slotNo: "6",
        booked: false,
        size: "small",
        bookedBy: {
            name: "",
            regNo: "",
            size: "",
        }
    },
    {
        slotNo: "7",
        booked: false,
        size: "small",
        bookedBy: {
            name: "",
            regNo: "",
            size: "",
        }
    },
    {
        slotNo: "8",
        booked: false,
        size: "small",
        bookedBy: {
            name: "",
            regNo: "",
            size: "",
        }
    },
    {
        slotNo: "9",
        booked: true,
        size: "small",
        bookedBy: {
            name: "",
            regNo: "",
            size: "",
        }
    },
    {
        slotNo: "10",
        booked: true,
        size: "small",
        bookedBy: {
            name: "",
            regNo: "",
            size: "",
        }
    },
    {
        slotNo: "11",
        booked: false,
        size: "small",
        bookedBy: {
            name: "",
            regNo: "",
            size: "",
        }
    },


    {
        slotNo: "12",
        booked: false,
        size: "small",
        bookedBy: {
            name: "",
            regNo: "",
            size: "",
        }
    },
    {
        slotNo: "13",
        booked: false,
        size: "small",
        bookedBy: {
            name: "",
            regNo: "",
            size: "",
        }
    },
    {
        slotNo: "14",
        booked: false,
        size: "small",
        bookedBy: {
            name: "",
            regNo: "",
            size: "",
        }
    },
    {
        slotNo: "15",
        booked: false,
        size: "small",
        bookedBy: {
            name: "",
            regNo: "",
            size: "",
        }
    },
    {
        slotNo: "16",
        booked: false,
        size: "small",
        bookedBy: {
            name: "",
            regNo: "",
            size: "",
        }
    },
    {
        slotNo: "17",
        booked: false,
        size: "small",
        bookedBy: {
            name: "",
            regNo: "",
            size: "",
        }
    },
    {
        slotNo: "18",
        booked: false,
        size: "small",
        bookedBy: {
            name: "",
            regNo: "",
            size: "",
        }
    },
    {
        slotNo: "19",
        booked: false,
        size: "small",
        bookedBy: {
            name: "",
            regNo: "",
            size: "",
        }
    },
    {
        slotNo: "20",
        booked: false,
        size: "small",
        bookedBy: {
            name: "",
            regNo: "",
            size: "",
        }
    },

]

var app = document.querySelector('#lots');
var renderLots = bookedSlots.map(function (slot) {

    return (
        slot.booked ?
            '   <div onclick=setCurrentLot(this.id) id=' + slot.slotNo + ' class="w-2/12 m-2 border h-10 rounded seat transition ease-in duration-500 flex justify-center items-center text-gray-500 booked" > '
            + slot.slotNo +
            '</div>' :
            '   <div onclick=setCurrentLot(this.id) id=' + slot.slotNo + ' class="w-2/12 m-2 border h-10 rounded seat transition ease-in duration-500 flex justify-center items-center text-gray-500 " > '
            + slot.slotNo +
            '</div>'
    );
}).join('')
// Create markup
app.innerHTML = renderLots



// HANDLE FORM DATA

// document.addEventListener('DOMContentLoaded', init, false);

let username, regNo, carSize

username = document.querySelector('#name');
regNo = document.querySelector('#regNo');
carSize = document.querySelector('#carSize');

const saveButton = document.querySelector("#save"); // select save button
// const alertBox = document.querySelector(".alert"); // select alert display div
let form = document.querySelector(`#modalForm`)
let formElements = form.elements;


const getFormData = () => {
    let data = {
        name: username.value,
        regNo: regNo.value,
        carSize: carSize.value,
    };
    return data;
};

saveButton.onclick = event => {
    event.preventDefault();
    data = getFormData();
    if (data.name && data.regNo && data.carSize) {
        bookLot()
        console.log(JSON.stringify(data));
        closeModal()
        // localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
    }
    else {
        const message = "Please complete all fields";
        window.alert(message);
    }
};