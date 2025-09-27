//Travel Fare Calculator
function TravelFare() {
    let ready = confirm("Do you want to Calculate Travel Fare?");

    if (ready) {
        let dist = prompt("Enter the Distance in km:");
        let distance = Number(dist);

        let transport = prompt("Enter Transport Type: \nTrain\nCar\nBike");
        
        switch(transport) {
            case "Train":
                let train = "5";
                let traintotal = distance*train;
                alert("Total Fare: " + traintotal);
                break;
            case "Car":
                let car = "10";
                let cartotal = distance*car;
                alert("Total Fare: " + cartotal);
                break;
            case "Bike":
                let bike = "20";
                let biketotal = distance*bike;
                alert("Total Fare: " + biketotal);
                break;
            default:
                alert("Please Enter a Valid Transport Type!");
        }
    } else {
        alert("Maybe next time! Goodbye!")
    }
}

TravelFare();