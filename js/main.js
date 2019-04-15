$(document).ready(function(){

var imagesArray = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg','pic6.jpg','pic7.jpg','pic8.jpg','pic9.jpg','pic10.jpg']

var imageDescription = [0,0,0,0,0,0,0,0,0,0];

var yesTally = 0;
var noTally = 0;

var currentPosition = 0;

var minimum = 0;
var maximium = imagesArray.length - 1;

$('#yes').on('click', function() {
	currentPosition += 1;

	if (currentPosition >= maximium) {
		$('#yes').attr('disabled', true);
	}

	if (currentPosition >= maximium) {
		$('#no').attr('disabled', true);
	}

	$('#pics').attr('src', 'images/' + imagesArray[currentPosition]);

	if (currentPosition >= maximium) {
		$('#no').attr('disabled', true);
	}
});


$('#no').on('click', function () {
	currentPosition += 1;
	

	if (currentPosition >= maximium) {
		$('#no').attr('disabled', true);
	}

	if (currentPosition >= maximium) {
		$('#yes').attr('disabled', true);
	}

	$('#pics').attr('src', 'images/' + imagesArray[currentPosition]);	

	if (currentPosition >= maximium) {
		$('#yes').attr('disabled', true);
	}
});



$('#yes').on('click', function (){
	imageDescription[currentPosition] += 1;

	$('#description').html('Doggos - in various breeds');

 // console.log('my image currently is:' + imageDescription);

});


$('#no').on('click', function (){
	imageDescription[currentPosition] += 1;

	$('#description').html("Every Netflix owner's favorite show to binge on");
 // console.log('my image currently is:' + imageDescription);
});

$('#yes').click(function() {
	if (currentPosition == 9) {
		$('#ten').show(1000);	
	}

	else if (currentPosition >= 8) {
		$('#nine').show(1000);	
	}

	console.log('is this working');
});

// $('#yes').click(function() {
// 	if (yesTally >= 8) {
// 		$('#nine').show('fast');	
// 	}

});



