//Personal Budget Planner
function BudgetPlanner() {
    let ready = confirm("Do you want a Personal Budget Planner?");

    if (ready) {
        let inc = prompt("Enter Monthly Income:");
        let income = Number(inc);
        
        let rnt = prompt("Enter Expenses on Rent:");
        let rent = Number(rnt);
        
        let gro = prompt("Enter Expenses on Groceries:");
        let grocery = Number(gro);
        
        let tr = prompt("Enter Expenses on Transport:");
        let transport = Number(tr);
        
        let total = rent+grocery+transport;
        
        if (total<income) {
            alert("You are Within Budget!");
            alert(`Total Expenses: ${total}\nRemaining Balance: ${income-total}\nPercentage Spent: ${total/income*100}%\nMessage: Within Budget!`);
        } else {
            alert("You are Overspending!");
            alert(`Total Expenses: ${total}\nRemaining Balance: ${income-total}\nPercentage Spent: ${total/income*100}%\nMessage: Overspending!`);
        } 
    } else {
        alert("Maybe next time! Goodbye!");
    }
}

BudgetPlanner();