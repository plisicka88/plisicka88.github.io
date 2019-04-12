var imagesArray = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg','pic6.jpg','pic7.jpg','pic8.jpg','pic9.jpg','pic10.jpg']

var imageDescription = [0,0,0,0,0,0,0,0,0,0];

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


	console.log(currentPosition);

});

$('#no').on('click', function () {
	currentPosition += 1;
	

	if (currentPosition >= maximium) {
		$(this).attr('disabled', true);
	}

	$('#pics').attr('src', 'images/' + imagesArray[currentPosition]);	

	console.log(currentPosition);
});

$