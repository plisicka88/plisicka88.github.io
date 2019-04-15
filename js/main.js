$(document).ready(function(){

	var imagesArray = [
		'pic1.jpg',
		'pic2.jpg',
		'pic3.jpg',
		'pic4.jpg',
		'pic5.jpg',
		'pic6.jpg',
		'pic7.jpg',
		'pic8.jpg',
		'pic9.jpg',
		'pic10.jpg'
	]

	var imageDescription = [
		"CATTOS",
		"Desc 2",
		"Desc 3",
		"Desc 4",
		"Desc 5",
		"Desc 6",
		"Desc 7",
		"Desc 8",
		"Desc 9",
		"Desc 10",
	];

	var yesTally = 0;

	var noTally = 0;

	var currentPosition = 0;

	var minimum = 0;
	var maximium = imagesArray.length;

	$('#yes').on('click', function() {

		yesTally += 1;

		hey();
	});


	$('#no').on('click', function () {

		noTally += 1;

		hey();
	});

	function hey(){
		currentPosition += 1;

		if (currentPosition >= maximium) {
			// This is what happens at the end
			$("#yes").hide();
			$("#no").hide();

			// Show your result
			if (yesTally == 10){
				$.featherlight("<div>" + $("#ten").html() + "</div>");
			} else if (yesTally == 9) {
				$.featherlight("<div>" + $("#nine").html() + "</div>");
			}

		} else {
			// This is what happens ANY other time
			$('#pics').attr('src', 'images/' + imagesArray[currentPosition]);
			$('#description').html(imageDescription[currentPosition]);
		}

		console.log(currentPosition);
		console.log("Yes Tally is: " + yesTally + " No Tally is: " + noTally);
	}
});



