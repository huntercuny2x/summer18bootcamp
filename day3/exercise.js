/*
Write a program to calculate the total price of your phone purchase.

You will keep purchasing phones (hint: loop!) until you run out of money in your
bank account.

You'll also buy accessories for each phone as long as your purchase amount is
below your mental spending threshold.

After you've calculated your purchase amount, add in the tax, then print out the
calculated purchase amount, properly formatted.

Finally, check the amount against your bank account balance to see if you can
afford it or not.

You should set up some constants for the "tax rate," "phone price," "accessory
price," and "spending threshold," as well as a variable for your "bank account
balance".

You should define functions for calculating the tax and for formatting the price
with a "$" and rounding to two decimal places.
*/

var balance = 1000;
var totalcost = 0;
var thispurchase = 0;

const THRESHOLD = 325;
const PHONEPRICE = 199.99;
const ACCESSORYPRICE = 29.99;
const TAX = 0.08775;

// returns the tax amount for a given price
function calculateTax( price ){
     return price * TAX;
}

// formats a price properly (ex. 2.7 -> $2.70)
function formatPrice( price ){
     return "$" + price.toFixed(2);
}

// buy phones and accessories
while ( totalcost < balance ){
     // buy a new phone
     thispurchase += PHONEPRICE;
     // add accessories until you've gone overboard
     while ( thispurchase < THRESHOLD ){
          thispurchase += ACCESSORYPRICE;
     }
     // put the phone and accessories in your bag
     totalcost += thispurchase;
     // reset current purchase cost
     thispurchase = 0;
}

// figure out total purchase amount
totalcost += calculateTax( totalcost );
// print it
console.log( formatPrice(totalcost) );

// see if you can afford it
if ( totalcost > balance ){
     console.log( "You cannot afford this purchase." );
} else {
     console.log( "You can afford this purchase.");
}
