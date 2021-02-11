


function checkChange(cash, price) {
   var change = cash - price;
    if (cash<price){
      console.log("Your money is not enough");
     return false;
    }else if (cash==price){
      console.log("Thanks for your payment");
      return true;
    } 
    

 var twentyEuro = 20;
 var twentyEuroCounter = 0;
 var result = 0;

 if (change >= twentyEuro) {
   twentyEuroCounter = change / 20;
   twentyEuroCounter = ~~ twentyEuroCounter; // ~~ => cuts all fractional digits
   result = change % 20;
 }
  console.log("The output is "+ twentyEuroCounter +  " twenty euro, remaining "+result);
   
  
  var fiveEuro = 5;
  var fiveEuroCounter = 0;
  var result = 0;


  if (change >= fiveEuro) {
   
    fiveEuroCounter = change / 5; 
    fiveEuroCounter = ~~ fiveEuroCounter; 
    result = change % 5;
  }
  console.log(
    "The output is " + fiveEuroCounter + " five euro, remaining " + result
  );

  var oneEuro = 1;
  var oneEuroCounter = 0;
  var result = 0;



  if (change >= oneEuro) {
  
    oneEuroCounter = change / 1; 
    oneEuroCounter = ~~ oneEuroCounter; 
    result = change % 1; 
  }
  console.log(
    "The output is " + oneEuroCounter + " one euro, remaining " + result
  );

 var twentyCents = 0.2;
 var twentyCentsCounter = 0;
 var result = 0;


  if (change >= twentyCents) {
    
    twentyCentsCounter = change / 0.2; 
    twentyCentsCounter = ~~ twentyCentsCounter; 
    result = change % 0.2;
  }
  console.log(
    "The output is " + twentyCentsCounter + " twenty euro Cents, remaining " + result
  );

 var fiveCents = 0.05;
 var fiveCentsCounter = 0;
 var result = 0;

  if (change >= fiveCents) {
   
    fiveCentsCounter = change / 0.05; 
    fiveCentsCounter = ~~ fiveCentsCounter;
    result = change % 0.05;
  }
  console.log(
    "The output is " + fiveCentsCounter + " five euro Cents, remaining " + result
  );
    
}


checkChange(66,44)

// Output :

// The output is 1 twenty euro, remaining 2
// The output is 4 five euro, remaining 2
// The output is 22 One euro, remaining 0
// The output is 110 twenty euro Cents, remaining 0.1999999999999988
// The output is 440 five euro Cents, remaining 0.04999999999999878

