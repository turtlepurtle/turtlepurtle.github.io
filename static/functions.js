var clickCount = 0;
var width = 18;
var height = 45;
var fontsize = 14;

// Function to toggle undertale soundtrack
function pageStart() {
    var audio = document.getElementById("undertaleAudio");
    var mainJordo = document.getElementById("mainJordo");

    // Change class
    mainJordo.className="mainJordo";

    mainJordo.src="/static/images/mainJordo.jpg"; //change image

    // Decrease audio volume
    audio.volume = 0.02;

    // If the audio is paused, play it; otherwise, pause it
    if (audio.paused) {
        audio.play();
    }
}

function NO() {
    var audio = document.getElementById("fart");
    var fuckyoubutton = document.getElementById("fuckyouuuu");
    var image = document.getElementById("mainJordo");

    audio.volume = 0.02;

    image.src = "/static/images/disgustJordo.gif";
    setTimeout(function() {image.src = "/static/images/mainJordo.jpg"}, 100);


    if (audio.paused) {
        audio.play();
    }

    if (clickCount > 20) {
        window.close();
    }

    if (clickCount < 5) {
        fuckyoubutton.style.width = width.toString()+"%"; // Adjust width
        fuckyoubutton.style.height = height.toString()+"%"; // Adjust height
        fuckyoubutton.style.fontSize = fontsize.toString()+"px"; // Adjust font size
        width = width - 2;
        height = height - 5;
        fontsize = fontsize - 2;
    } else {
        fuckyoubutton.style.position = "absolute"; 
        fuckyoubutton.style.width = "10px"; // Adjust width
        fuckyoubutton.style.height = "5px"; // Adjust height
        fuckyoubutton.style.top = getRandomInt(94).toString() + "%";
        fuckyoubutton.style.left = getRandomInt(98).toString() + "%";
    }

    clickCount+= 1;
}

function YES() {
    var resultScreen = document.getElementById("JordoHappyPath");
    resultScreen.style.display = "block";
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }