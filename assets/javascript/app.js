// screen with a start button.
// when start is pressed, change screen to trivia game and counter starts
//player can only choose one answer
//when timer runs out, screen switches to finished screen
//when player finishes and clicks done button, finished screen appears
//finished screen should have correct, incorrect, and unfinishd answers





$( document ).ready(function() {
    
var correct = 0;
var incorrect = 0;
var unanswered = 0;


function start(){
	// $("content").html("<button>")

	var start = $('<input type="button" value="Start" id="startButton"/>');
    start.appendTo($("#content"));
}
start();

function endGame(){
var end = $('<h2>End Game<h2>'+"<br>"+
			'<h3>Correct Answers: '+correct+'<br>'+
			'<h3>Incorrect Answers: '+incorrect+'<br>');

    $('#content').html(end);

}



$("#content").on("click", "#startButton", function(){

	$('#content').html(quiz)

	function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            endGame();
        }
    }, 1000);
}


    var fiveMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);

});		




$("#content").on('click', '#doneButton', function() {

var answers = ["a","b","c","d"]
var question0 = $('input[name="q1"]:checked').val();
var question1 = $('input[name="q2"]:checked').val();
var question2 = $('input[name="q3"]:checked').val();
var question3 = $('input[name="q4"]:checked').val();

for (var i = 0; i < answers.length; i++) {


	if (eval('question'+i) === answers[i]) {

		correct++;
	}
	else{
		incorrect++;
	}

	endGame();
}

});




var quiz = $('<h3>Time Remaining: <span id="time"></span></h3>' +  
				'<h3>Question 1</h3>'+
		      	'<input type="radio" name="q1" value="a" id="q1a">Answer<br>'+
		     	'<input type="radio" name="q1" value="b" id="q1b">Answer<br>'+
		     	'<input type="radio" name="q1" value="c" id="q1c">Answer<br>'+
		      	'<input type="radio" name="q1" value="d" id="q1d">Answer<br>'+

				'<h3>Question 2</h3>'+
			    '<input type="radio" name="q2" value="a" id="q2a">Answer<br>'+
			    '<input type="radio" name="q2" value="b" id="q2b">Answer<br>'+
			    '<input type="radio" name="q2" value="c" id="q2c">Answer<br>'+
			    '<input type="radio" name="q2" value="d" id="q2d">Answer<br>'+
	     
		      	'<h3>Question 3</h3>'+
			     '<input type="radio" name="q3" value="a" id="q3a">Answer<br>'+
			     '<input type="radio" name="q3" value="b" id="q3b">Answer<br>'+
			     '<input type="radio" name="q3" value="c" id="q3c">Answer<br>'+
			     '<input type="radio" name="q3" value="d" id="q3d">Answer<br>'+   
	      
	      		'<h3>Question 4</h3>'+
		      	'<input type="radio" name="q4" value="a" id="q4a">Answer<br>'+
		      	'<input type="radio" name="q4" value="b" id="q4b">Answer<br>'+
		      	'<input type="radio" name="q4" value="c" id="q4c">Answer<br>'+
		      	'<input type="radio" name="q4" value="d" id="q4d">Answer<br><br>'+

		      	'<input type="button" value="Done" id="doneButton"/>'
		    )


});