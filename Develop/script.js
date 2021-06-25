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
