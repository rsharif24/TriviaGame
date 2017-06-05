
$( document ).ready(function() {
    
var correct = 0;
var incorrect = 0;
var unanswered = 0;


function start(){
	
	var start = $('<input type="button" value="Start" id="startButton"/>');
    $("#content").html(start);
}

start();

function endGame(){

	var end = $('<h2>End Game!<h2>'+"<br>"+
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


    var twoMins = 60 * 2,
       	display = document.querySelector('#time');

    startTimer(twoMins, display);

});		




$("#content").on('click', '#doneButton', function() {

var answers = ["c","d","a","b","c"]
var question0 = $('input[name="q1"]:checked').val();
var question1 = $('input[name="q2"]:checked').val();
var question2 = $('input[name="q3"]:checked').val();
var question3 = $('input[name="q4"]:checked').val();
var question4 = $('input[name="q5"]:checked').val();

for (var i = 0; i < answers.length; i++) {


	if (eval('question'+i) === answers[i]) {

		correct++;
	}
	else{
		incorrect++;
	}
}

endGame();

});




var quiz = $('<h3>Time Remaining: <span id="time"></span></h3>' +  
				'<p>I am best known for my talk show which was nationally syndicated from 1986 to 2011 in Chicago, Illinois. I am the first American woman to be officially ranked a billionaire. Who am I? </p>'+
		      	'<input type="radio" name="q1" value="a" id="q1a">Meredith Vieira<br>'+
		     	'<input type="radio" name="q1" value="b" id="q1b">Ellen DeGeneres<br>'+
		     	'<input type="radio" name="q1" value="c" id="q1c">Oprah Winfrey<br>'+
		      	'<input type="radio" name="q1" value="d" id="q1d">Barbra Walters<br>'+
		      	'<br>'+
				'<p>I am currently second in the line of succession to the British throne. Who am I?</p>'+
			    '<input type="radio" name="q2" value="a" id="q2a">Prince George<br>'+
			    '<input type="radio" name="q2" value="b" id="q2b">Prince Harry<br>'+
			    '<input type="radio" name="q2" value="c" id="q2c">Prince Charles<br>'+
			    '<input type="radio" name="q2" value="d" id="q2d">Prince William<br>'+
	     		'<br>'+
		      	'<p>I won a record four presidential elections and directed the United States government during most of the Great Depression and World War II. Who am I?</p>'+
			     '<input type="radio" name="q3" value="a" id="q3a">Franklin D. Roosevelt<br>'+
			     '<input type="radio" name="q3" value="b" id="q3b">Theodore Roosevelt<br>'+
			     '<input type="radio" name="q3" value="c" id="q3c">Dwight D. Eisenhower<br>'+
			     '<input type="radio" name="q3" value="d" id="q3d">Woodrow Wilson<br>'+   
	      		'<br>'+
	      		'<p>I am a graduate of Columbia University and Harvard Law School and served in the U.S. Senate representing Illinois from 2005 to 2008. I was the 44th president. Who am I?</p>'+
		      	'<input type="radio" name="q4" value="a" id="q4a">George W. Bush<br>'+
		      	'<input type="radio" name="q4" value="b" id="q4b">Barack Obama<br>'+
		      	'<input type="radio" name="q4" value="c" id="q4c">Bill Clinton<br>'+
		      	'<input type="radio" name="q4" value="d" id="q4d">Ronald Reagan<br><br>'+
		      	'<br>'+
		      	'<p>I am well known for developing the phonograph, the motion picture camera, and the long-lasting, practical electric light bulb. Who am I?</p>'+
		      	'<input type="radio" name="q5" value="a" id="q5a">Alexander Graham Bell<br>'+
		      	'<input type="radio" name="q5" value="b" id="q5b">Nikola Tesla<br>'+
		      	'<input type="radio" name="q5" value="c" id="q5c">Thomas Edison<br>'+
		      	'<input type="radio" name="q5" value="d" id="q5d">Henry Ford<br><br>'+
		      	'<br>'+'<br>'+
		      	'<input type="button" value="Done" id="doneButton"/>'
		    )

});