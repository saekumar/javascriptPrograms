// IIFE ==> Immediately Invoked Function expressions

// function Hello()
// {
//     console.log(`DB CONNECTED`)
// }

// Hello()

;(function Hello() {
  /*  Named IIFE  */
  console.log(`DB CONNECTED`)
})()

;(() => {
  console.log(`DB CONNECTED TWO`)
})()

/*  Actually semicolon : requires here to start the second function .If not it will not enter into the next function

And here we have like ()()  .The first brackets indicate function and second brackets for to run just like how we kept for normal functions "hello()"  


*/
