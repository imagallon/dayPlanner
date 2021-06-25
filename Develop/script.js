var dayYear = moment().format("dddd, MMMM, Do");
$("#currentDay").text(dayYear);

var userInput = document.querySelector(".description");
var saveButtons = document.querySelectorAll(".saveBtn");
console.log(saveButtons);
var message = "";

function renderMessage() {
  var hourlyInput = localStorage.getItem("hourlyInput");

  if (!hourlyInput) {
    return;
  }
  userInput.textContent = hourlyInput;
}

renderMessage();


saveButtons.forEach(function(saveButton) {
  saveButton.addEventListener('click', function() {
    var value = $(this).parent().children().eq(1).val()
    var key = $(this).closest('div')[0].closest('textarea')
    saveValueToStorage(key, value)
    console.log($(this).closest('textarea'));
  })
})


// lol

// for (var i = 0; i < saveButtons.length; i++) {
//   var array = $(".description");
//   var value = array[i].value;

//   saveButtons[i].addEventListener("click", function (event) {
//     event.preventDefault();
//     var saveButton = $(this);
//     saveButton.prev();
//     console.log(saveButton)

//     saveValueToStorage(value);
//   });
// }

function saveValueToStorage(key, value) {
  localStorage.setItem(key, value);
}

// saveBtn.addEventListener('click', function (event) {
//   event.preventDefault();

//   // var save = $(this)

//   localStorage.setItem('hourlyInput', (hourlyInput));
//   renderMessage()
// });

//$(".time-block").eq()
//$(".time-block").each(function() {console.log(this)})
//$(".time-block").each(function() {console.log(this).attr("id")})

// var row = document.getElementsByClassName("row");
// var currentTime = parseInt(moment().format("H"));

// Array.from(row).forEach(row => {
// var rowIdString = row.id, rowHour;
//   if (rowIdString) {
//     rowHour = parseInt(rowIdString);
//   }
//   if (rowHour) {
//     if (currentTime === rowHour) {
//       setColor(row, "background-color: #ff6961");
//     } else if ((currentTime < rowHour) && (currentTime > rowHour - 6)) {
//       setColor(row, "background-color: #77dd77");
//     } else if ((currentTime > rowHour) && (currentTime < rowHour + 6)) {
//       setColor(row, "background-color: #d3d3d3");
//     } else {
//       setColor(row, "background-color: white")
//     }
//   }
// });
