$(document).ready(onReady);

//created an onready function that runs to the DOM when the file is ready.
function onReady(){


$('#submit-button').on('click', handleSubmit)
$('#table-body').on('click', ".delete" ,deleteIt);

}

