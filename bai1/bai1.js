 function adjacentElementsProduct() {
   let inputArr = [2, 3, -5, -2, 4]
   let a = 0
   let b = 0
   let max = 0
   for (let i = 0; i < inputArr.length; i++) {
     a = inputArr[i]
     b = inputArr[i + 1]
     if (a * b > max) {
       max = a * b
     }
   }
   return max
 }

 console.log(adjacentElementsProduct())

