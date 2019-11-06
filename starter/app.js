// Module Pattern

// BUDGET CONTROLLER
var budgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
   
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    

    var data = {
        allItems:{
            exp:[],
            inc:[]
        },
        totals: {
            exp: 0,
            inc: 0
        }
        
    };

    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            // create new id
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length -1].id + 1;
            } else {
                ID = 0;
            }

            // create new item based on 'inc or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            // push it into our data structure 
            data.allItems[type].push(newItem);
            // return the new element
            return newItem;
           
        },

        testing: function() {
            console.log(data);
        }

    };

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

        addListItem: function(obj, type) {
            var html;
            // Create HTML string with placeholder text
            html = '<div class="item clearfix" id="income-0"><div class="item__description">Salary</div><div class="right clearfix"><div class="item__value">+ 2,100.00</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            // Replace the placejplder text with some actual data

            // insert HTML into the DOM

        },

        // exposes function to use publicly/globally
        getDOMstrings: function() {
            return DOMstrings;
        }

    }



})();



// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        document.querySelector(DOM.inputBtn). addEventListener('click', ctrlAddItem) 


        document.addEventListener('keypress', function(event) {
    
            if (event.keycode === 13 || event.which === 13) {
                ctrlAddItem();
            }
    
        }) 
    }

    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function() {
        var input, newItem;
    

    
       // 1. Get the field input data
       var input = UICtrl.getInput();
      

       // 2. Add the item to the budget controller
       var newItem = budgetController.addItem(input.type, input.description, input.value);

       // 3. Add the item to the UI

       // 4. Calculate the budget

       // 5. Display the budger on the UI
        

    };

   return {
       init: function() {
           console.log('Application has started.');
           setupEventListeners();
       }
   }

})(budgetController, UIController);

controller.init();