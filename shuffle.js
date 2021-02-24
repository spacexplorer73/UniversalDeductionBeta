//Function to show the shuffled array.
function show(){
    	document.getElementById('otp').style.display = "block";
    	var imgAry = new Array();

		imgAry[0] = new Image();
		imgAry[0].src = '1.jfif';

		imgAry[1] = new Image();
		imgAry[1].src = '2.jfif';

		imgAry[2] = new Image();
		imgAry[2].src = '3.jfif';

		imgAry[3] = new Image();
		imgAry[3].src = '4.jfif';

		imgAry[4] = new Image();
		imgAry[4].src = '5.jfif';
    	var imgAry1 = shuffleArray(imgAry);
    	window.open(imgAry1[0].src);
    }