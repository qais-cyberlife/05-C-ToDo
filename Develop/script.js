// refrence to Improtant DOM ELements
var timeTableEl = $('#time-table');
// Displays the Day in Header
var today = moment();
$('#currentDay').text(today.format('dddd MMM Do, YYYY'));

var hour = today.format("HH"); 
console.log(hour);



// Renders the table rows
function renderTableRows(){
for (let i = 9; i < 18; i++) {
    var timeRowEl = $('<tr>')
    timeRowEl[0].setAttribute("time", i);

    var timeNumber = timeRowEl[0].getAttribute("time");
//   .addClass(`${i}`);
  
  var timeTdEl = $('<td>')
  .addClass('p-2 col-sm-1 col-md-1 col-lg-1')
  .text(i + ':00');
  
  var taskInputEl = $('<input>').addClass('task-input col-sm-10 col-md-10 col-lg-10');
  taskInputEl.attr("id", i);
  var savedTask = localStorage.getItem(i)
  taskInputEl.attr("placeholder", savedTask);
  
//   $("input[id^='input']").on("change", function() {
//     let inputValue = $(this).val();
//     localStorage.setItem(input, inputValue);
//     $(this).attr("placeholder", localStorage.getItem(input));
// });

  // var savedTask = localStorage.getItem('saved-task')
  // taskInputEl.attr("placeholder", savedTask);

  var tasklTdEl = $('<td>')
  .addClass('p-2 col-sm-10 col-md-10 col-lg-10')
  .append(taskInputEl);


  var saveBtnEl = $('<td>')
  .addClass('p-2 save-project-btn col-sm-1 col-md-1 col-lg-1')
  .text('💾');

  timeRowEl.append(
    timeTdEl,
    tasklTdEl,
    saveBtnEl,
  );

  timeTableEl.append(timeRowEl);

// The row will be grey if it's before the current hour, red if it's the current hour, and green if it's after
if (timeNumber == 9 && hour!=9) {
    tasklTdEl.addClass('bg-secondary');
  }else if (timeNumber < hour) {
    tasklTdEl.addClass('bg-secondary');
} else if (timeNumber == hour){
    tasklTdEl.addClass('bg-danger');
}else if (timeNumber > hour){
    tasklTdEl.addClass('bg-success');
}};


};


function  saveTask(event) {
  var saveBtn = $(event.target);
  console.log(saveBtn)
  var inputEl = saveBtn.prev().find('.task-input');
  var inputId = inputEl.attr("id");
  // var timeId = inputEl[0].getAttribute('time');
  console.log(inputId)
  var inputVal = inputEl.val();
  console.log(inputVal)
  localStorage.setItem(inputId , inputVal);
// var savedTask = localStorage.getItem(inputId)
// inputEl.attr("placeholder", savedTask);
};


timeTableEl.on('click', '.save-project-btn', saveTask);
renderTableRows();