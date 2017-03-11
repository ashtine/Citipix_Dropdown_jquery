$(document).ready(function(){

$('select').append('<option>NYC</option>');
$('select').append('<option>SF</option>');
$('select').append('<option>SYD</option>');
$('select').append('<option>Austin</option>');
$('select').append('<option>LA</option>');

    $('#city-type').change(function(event){
        event.preventDefault();
        var userInput = $('#city-type').val();
        userInput = userInput.toLowerCase();
        console.log("this what is inside the input field:", userInput);
        if (userInput == "nyc") {
            $('body').attr("class", "nyc");
        } else if (userInput == "sf"){
            $('body').attr("class", "sf");
        } else if (userInput == "syd"){
            $('body').attr("class", "sydney");
        } else if (userInput == "austin"){
            $('body').attr("class", "austin");
        } else if (userInput == "la"){
            $('body').attr("class", "la");
        }
     }); 

});
