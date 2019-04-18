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
		"CATS",
		"DOGS",
		"THE OFFICE",
		"GAME OF THRONES",
		"HOCKEY",
		"RAINY DAYS",
		"TRAVELING",
		"VEGETABLES",
		"VOLUNTEERING",
		"COUNTLESS DECORATIVE PILLOWS",
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
			} else if (yesTally == 8) {
				$.featherlight("<div>" + $("#eight").html() + "</div>");
			} else if (yesTally == 7) {
				$.featherlight("<div>" + $("#seven").html() + "</div>");
			} else if (yesTally == 6) {
				$.featherlight("<div>" + $("#six").html() + "</div>");
			} else if (yesTally == 5) {
				$.featherlight("<div>" + $("#five").html() + "</div>");
			} else if (yesTally == 4) {
				$.featherlight("<div>" + $("#four").html() + "</div>");
			} else if (yesTally == 3) {
				$.featherlight("<div>" + $("#three").html() + "</div>");
			} else if (yesTally == 2) {
				$.featherlight("<div>" + $("#two").html() + "</div>");
			} else if (yesTally == 1) {
				$.featherlight("<div>" + $("#one").html() + "</div>");
			} else if (yesTally == 0) {
				$.featherlight("<div>" + $("#zero").html() + "</div>");
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



