const Realm = require("realm");
const app = new Realm.App({ id: "cookapplication-afnkp" });

function fetchRecipies(userID){
    
    //get every recipe by the owner ID
    //for each recipe id get each ingredient that has that recipe id and add them to an array 
        //add that array to that recipe
        //then get each instruction that shares a recipe ID with the recipe and add them to an array
        //then sort the array with sortInstructions
        //then add the sorted array to the recipe 
    
    // return an array of recipe Objects
}

function sortInstructions(instructions){
    
    //insertion sort with instructions[]
    
    //return an array of instructions ordered by their instuction number
}

function realmLogin(){
    
}