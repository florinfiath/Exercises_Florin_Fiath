   
   
   function checkChange(price, cash) {
     var moneyArray = [];
     let twentyEuroCounter = 0;
     let fiveEuroCounter = 0;
     let oneEuroCounter = 0;
     let twentyEuroCentsCounter = 0;
     let fiveEuroCentsCounter = 0;

     if (price > cash) {
       console.log("You need more money");
       return;
     } else if (cash == price) {
       console.log("Thanks for your payment");
       return;
     } else if (price < cash) {
       let change = cash - price;
       console.log(`The change is ${change} Euro`);

       while (change >= 20) {
         change -= 20;
         twentyEuroCounter++;
       }
       if (twentyEuroCounter > 0) {
         moneyArray.push(`${twentyEuroCounter} x twenty Euro`);
       }
       while (change >= 5) {
         change -= 5;
         fiveEuroCounter++;
       }
       if (fiveEuroCounter > 0) {
         moneyArray.push(`${fiveEuroCounter} x five Euro`);
       }

       while (change >= 1) {
         change -= 1;
         oneEuroCounter++;
       }
       if (oneEuroCounter > 0) {
         moneyArray.push(`${oneEuroCounter} x one Euro`);
       }

       while (change >= 0.2) {
         change -= 0.2;
         twentyEuroCentsCounter++;
       }
       if (twentyEuroCentsCounter > 0) {
         moneyArray.push(`${twentyEuroCentsCounter} x twenty Euro Cents`);
       }
       while (change >= 0.05) {
         change -= 0.05;
         fiveEuroCentsCounter++;
       }
       if (fiveEuroCentsCounter > 0) {
         moneyArray.push(`${fiveEuroCentsCounter} x five Euro Cents`);
       }
       for (let i = 0; i < moneyArray.length; i++) {
         console.log(moneyArray[i]);
       }
     }
   }

   checkChange(35, 48);

   