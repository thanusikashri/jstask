function onlineFood(){
    try{
        let name = prompt("Enter your Name:");

        if (name){
            let ready = confirm("Hello " + name + " ! Do you want to order food?");
            if (ready) {
                let menu = {
                      1: { name: "Pizza", price: 150},
                      2: { name: "Burger", price: 100},
                      3: { name: "Sandwich", price: 80},
                      4: { name: "Pasta", price: 120},
                      5: { name: "Noodles", price: 140}
                };

                let choice = prompt("Menu:\n1. Pizza ($150)\n2. Burger ($100)\n3. Sandwich ($80)\n4. Pasta ($120)\n5. Noodles ($140)\n\nEnter your choice: (1-5)");
                if (choice>=1 && choice<=5){
                let dish;
                switch(choice){
                    case "1":
                        dish = "Pizza";
                        alert("You ordered Pizza!");
                        break;
                    case "2":
                        dish = "Burger";
                        alert("You ordered Burger!");
                        break;
                    case "3":
                        dish = "Sandwich";
                        alert("You ordered Sandwich!");
                        break;
                    case "4":
                        dish = "Pasta";
                        alert("You ordered Pasta!");
                        break;
                    case "5":
                        dish = "Noodles";
                        alert("You ordered Noodles!");
                        break;
                }

                let qty = prompt("Enter the Quantity:");
                let quantity = parseInt(qty);

                if (!(isNaN(quantity) || quantity<=0)) {

                let total;
                switch(dish){
                    case "Pizza":
                        total = quantity*150;
                        break;
                    case "Burger":
                        total = quantity*100;
                        break;
                    case "Sandwich":
                        total = quantity*80;
                        break;
                    case "Pasta":
                        total = quantity*120;
                        break;
                    case "Noodles":
                        total = quantity*140;
                        break;
                    default:
                        total = 0;
                }

                let prepare = new Promise((resolve, reject) => {
                    alert("Your order is being prepared...");
                    setTimeout(() => {
                        if (total>0){
                            resolve("Order Ready!");
                        } else {
                            reject("Error!");
                        }
                    }, 1500);
                });

                prepare.then((message) => {
                    alert(message);
                    alert("You ordered " + quantity + " " + dish + ". Total = $" + total);
                    alert("Thank You!");
                }) 
                .catch((errorMsg) => {
                    alert(errorMsg);
                    alert("Error calculating bill!");
                });
                } else {
                    alert("Invalid Quantity!");
                }
            } else {
                    alert("Invalid Choice!");
                }
            } 
            else {
                alert("Goodbye! See you next time!");
            }

        } else {
            alert("Name not entered. Exiting...");
        }

    } catch(error){
        alert("Something went wrong: " + error);
    }
}
onlineFood();
