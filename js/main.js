var imagesArray = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg','pic6.jpg','pic7.jpg','pic8.jpg','pic9.jpg','pic10.jpg']

var imageDescription = [0,0,0,0,0,0,0,0,0,0];

var yesTallyMinimum = 0;
var yesTallyMaximum = 10;

var noTallyMinimum = 0;
var noTallyMaximum = 10;

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
	// console.log(currentPosition);

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

	// console.log(currentPosition);
});



$('#yes').on('click', function (){
	imageDescription[currentPosition] += 1;

	$('#description').html('Doggos - in various breeds');

 console.log('my image currently is:' + imageDescription);

});

$('#no').on('click', function (){
	imageDescription[currentPosition] += 1;

	$('#description').html("Every Netflix owner's favorite show to binge on");

 console.log('my image currently is:' + imageDescription);

});

