var rating = 0;
var buttonIds = ["one", "two", "three", "four", "five"];

function changeRating(id){
    buttonIds.forEach(bId => {
        document.getElementById(bId).disabled = false;
    });

    document.getElementById(id).disabled = true;
    switch(id){
        case "one":
            rating = 1;
            break;
        case "two":
            rating = 2;
            break;
        case "three":
            rating = 3;
            break;
        case "four":
            rating = 4;
            break;
        case "five":
            rating = 5;
    }
}

function showThankYouMessage(){
    if(rating !== 0){
        document.getElementById("rateState").style.display = "none";
        document.getElementById("thankYouState").style.display = "block";
        document.getElementById("userRating").textContent = "" + rating; 
    }
    event.preventDefault();
}