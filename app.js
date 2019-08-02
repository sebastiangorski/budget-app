// Data controller
var budgetController = (function() {

    // Some code

 })();

// Interface controller
 var UIController = (function() {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value, // Reading value type (+/-) = inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },

        getDOMStrings: function() { // Exposing it to public to other controllers
            return DOMStrings;
        }
    };

 })();

 // App controller - connecting UI and Data Controllers
 var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UIController.getDOMStrings();

    var ctrlAddItem = function() {
        // To do list:
        // 1. Get the field input data
        var input = UIController.getInput();
        console.log(input);

        // 2. Add item to the budget controller
        // 3. Add the new item to the UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI
    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem); 

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        } 
    });

 })(budgetController, UIController);

