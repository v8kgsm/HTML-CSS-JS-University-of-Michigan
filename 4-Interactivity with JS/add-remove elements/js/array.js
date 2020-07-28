var fruits = ["Banana", "Orange", "Apple", "Mango"];

function loadFruits(){
   document.getElementById("fruits").innerHTML = fruits;
}

function myAddFunction() {
  var fruit = prompt("What is your favorite fruit? ");
  fruits[fruits.length] = fruit;
  document.getElementById("fruits").innerHTML = fruits;
}

function myRemoveFunction() {
  var fruit = prompt("Which fruit you want to remove? ");
  for(var i=0 ; i < fruits.length ; i++){
    if(fruits[i]===fruit){
      fruits.splice(i, 1);
    }
  }
  //fruits[fruits.length] = fruit;
  document.getElementById("fruits").innerHTML = fruits;
}
