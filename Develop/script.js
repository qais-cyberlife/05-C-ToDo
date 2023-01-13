// refrence to Improtant DOM ELements
var timeTableEl = $('#time-table')
// Moment.js Variables
var today = moment();
$('#currentDay').text(today.format('dddd MMM Do, YYYY'));



// Appends the table rows

for (let i = 9; i < 18; i++) {
  var timeRowEl = $('<tr>');
  
  var timeTdEl = $('<td>')
  .addClass('p-2 col-sm-1 col-md-1 col-lg-1')
  .text(i + ':00');
  
  var taskInputEl = $('<input>').addClass('save-project-btn col-sm-10 col-md-10 col-lg-10');
  var tasklTdEl = $('<td>')
  .addClass('p-2 col-sm-10 col-md-10 col-lg-10').append(taskInputEl);

  var saveBtnEl = $('<td>')
  .addClass('p-2 save-project-btn col-sm-1 col-md-1 col-lg-1').text('💾');

timeRowEl.append(
    timeTdEl,
    tasklTdEl,
    saveBtnEl,
  );

  timeTableEl.append(timeRowEl);
};