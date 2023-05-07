$(document).ready(onReady);

//created an onready function that runs to the DOM when the file is ready.
function onReady(){


$('#submit-button').on('click', handleSubmit)
$('#table-body').on('click', ".delete" ,deleteIt);

}

 let monthSalary = 0;

function handleSubmit(event){

 // Event stops refreshing consistanly.   
 event.preventDefault('');


    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let employeeId = $('#id').val();
    let employeeTitle =$('#title').val();
    let employeeSalary = $('#salary').val();

    monthSalary += Math.round(employeeSalary/12)
    $('#salaryCount').text(monthSalary)

    // if(monthSalary > 20000){
    //     $('#setColor').css('background-color', 'red');
    // }

    //add that first aname to the table body

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

}function deleteIt(){
    $(this).closest('tr').remove();
}