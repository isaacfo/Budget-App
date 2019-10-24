// Module Pattern

// BUDGET CONTROLLER
var budgetController = (function() {

   
    // the parens at end envokes the function, iffe
})();

// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function() {
            return {
                //  all of this targets UT things/fields  
                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
            
        },

        // exposes function to use publicly/globally
        getDOMstrings: function() {
            return DOMstrings;
        }

    }



})();



// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners

    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function() {

    

    
       // 1. Get the field input data
       var input = UICtrl.getInput();
       console.log(input);

       // 2. Add the item to the budget controller

       // 3. Add the item to the UI

       // 4. Calculate the budget

       // 5. Display the budger on the UI
        

    }

    document.querySelector(DOM.inputBtn). addEventListener('click', ctrlAddItem) 


    document.addEventListener('keypress', function(event) {

        if (event.keycode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    }) 
   
})(budgetController, UIController);