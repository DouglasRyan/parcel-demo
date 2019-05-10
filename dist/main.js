"use strict";

var a = $('#amount')[0].innerText - 0;
$('#add').on('click', function () {
  a += 1;
  $('#amount')[0].innerText = a;
  console.log(a);
});
$('#minus').on('click', function () {
  a -= 1;
  $('#amount')[0].innerText = a;
  console.log(a);
});
