$(document).ready(onReady);

//created an onready function that runs to the DOM when the file is ready.
function onReady(){

// called my submit botton and told when clicked do this.
$('#submit-button').on('click', handleSubmit)
// called my submit botton and told when clicked do this.
$('#table-body').on('click', ".delete" ,deleteIt);

}
// created a new variable that i will use to calculate the monthly salary.
// and gave a value of zero
 let monthSalary = 0;
// this function handles wnhat i wanna happen when someone clicks my submit button.
function handleSubmit(event){

 // Event stops refreshing consistanly.   
 event.preventDefault('');

// created new varaibles and told they will be equal to the value 
// of my Id i called.
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let employeeId = $('#id').val();
    let employeeTitle =$('#title').val();
    let employeeSalary = $('#salary').val();
// defined that monthly salary eqauls employeesalary
// and rounded that to the nearest number.
    monthSalary += Math.round(employeeSalary/12)
    $('#salaryCount').text(monthSalary)
// condition that checks if monthly salay > 20,000 and makes background red.
// if less that makes text Green. 
    if(monthSalary > 20000){
        $('#setColor').css('background-color', 'red');
    } else if (monthSalary < 20000) {
        $('#setColor').css('color', 'green');
    }

    //add that first name to the table body

    $('#table-body').append(`

    <tr>

    <td> ${firstName} </td>
    <td>${lastName}</td>
    <td>${employeeId} </td>
    <td>${employeeTitle}</td>
    <td>${employeeSalary} </td>
    <td> <button class="delete">Delete</button></td>
    
    </tr> `)
    // to remove the value i added in the place holder.
    $('#first-name').val('')
    $('#last-name').val('')
    $('#id').val('')
    $('#title').val('')
    $('#salary').val('')
// function that deletes the row when i  clicked to delet
}function deleteIt(){
    $(this).closest('tr').remove();
}