import $ from "jquery";
import "popper.js";
import "./bootstrap";

function zfill(num, size) {
  var s = num + "";
  while (s.length < size) {
    s = "0" + s;
  }
  return s;
}

const insertNumbers = () => {
  const height = Math.round($(".main-content").height());
  const numbers = Math.round(height / 30);

  let htmlNumbers = "";
  for (var number = 0; number < numbers; number++) {
    htmlNumbers += `<div>${zfill(number, 2)}</div>`;
  }
  // Insert numbers into sidebar
  $(".sidebar .numbers").html(htmlNumbers);
};
function onPageLoad() {
  insertNumbers();
}
$(document).ready(function() {
  onPageLoad();
});
