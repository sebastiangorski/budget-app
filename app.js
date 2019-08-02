// Data controller
var budgetController = (function() {

    // Some code

 })();

// Interface controller
 var UIController = (function() {

    // Some code

 })();

 // App controller - connecting UI and Data Controllers
 var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        // To do list:
        // 1. Get the field input data
        // 2. Add item to the budget controller
        // 3. Add the new item to the UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI

        console.log('It works!');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem); 

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        } 
    });

 })(budgetController, UIController);

