     let todo = [];
     let req;

     while (true) {
         req = prompt("Please enter your request");

         if (req === "quit") {
             console.log("Quit app");
             break;
         }

         if (req === "list") {
             console.log("-----------");
             for (let task of todo) {
                 console.log(task);
             }
             console.log("-----------");
         } else if (req === "add") {
             let task = prompt("Please enter the task that you want to do");
             todo.push(task);
             console.log("Task added");
         }
     }