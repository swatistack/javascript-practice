 let arr = [2, 2, 3, 4, 5, 6, 7];
 let num = 2;
 // let count = 0;
 // let i = 0;
 for (let i = 0; i < arr.length; i++) {
     if (arr[i] === num) {
         arr.splice(i, 1);
         i--
     }

 }
 document.write(arr);