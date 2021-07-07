var dayYear = moment().format("dddd, MMMM, Do");
$("#currentDay").text(dayYear);

var $userInput = $(".description");
var $saveButtons = $(".saveBtn");

$userInput.each(function (index, element) {
  $(element).val(localStorage.getItem("hourEntry-" + index));
});

$saveButtons.on("click", function () {
  var value = $(this).parent().children().eq(1).val();
  var key = "hourEntry-" + $saveButtons.index(this);
  saveValueToStorage(key, value);
});

function saveValueToStorage(key, value) {
  localStorage.setItem(key, value);
}

/*
create a function that gets the current number of hours
loop over each time-block
going check if it is current hour

})
*/



function hourUpdater() {

  var currentHours = moment().hours()
  
  $('time-block').each(function() {
    let currentBlockHour = $(this).attr("id").split("-")[1]
  
    if (currentBlockHour < currentHours) {
      $(this).addClass('past')
    } else if (currentBlockHour === currentHours) {
      $(this).addClass('present')
      $(this).removeClass('past')
    } else {
      $(this).addClass('future')
      $(this).removeClass('present')
    }
  )
}
hourUpdater();