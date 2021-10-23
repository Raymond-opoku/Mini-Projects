const menu ={
_courses: {
  appetizers:[],
  mains:[],
  desserts:[]
  },
get appetizers(){
return this._courses.appetizers
},set appetizers(appertizers){
  return this._courses.appetizers=appetizers;
},
get mains(){
  return this._courses.mains
},set mains(mains){
return this._courses.appetizers=mains;
},
get desserts(){
return this._courses.desserts
},set desserts(desserts){
return this._courses.appetizers=desserts;
},
get courses(){
    return{
    appetizers:this.appetizers,
    mains:this.mains,
    desserts:this.desserts
  }
  },
addDishToCourse(courseName,dishName,dishPrice){
const dish={
 name:dishName,
 price:dishPrice,
}
 this._courses[courseName].push(dish);
},
getRandomDishFromCourse(courseName){
let dishes=this._courses[courseName];
const randomIndex=Math.floor(Math.random()*dishes.length);
return dishes[randomIndex]
},
generateRandomMeal(){
  const appetizer=this.getRandomDishFromCourse('appetizers');
  const main=this.getRandomDishFromCourse('mains');
  const dessert=this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizer.price + main.price + dessert.price;
  return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is ${totalPrice}.`;
}
};
menu.addDishToCourse('appetizers','Caesar', 4.56);
menu.addDishToCourse('mains','Fufu', 50.60);
menu.addDishToCourse('desserts','Yoghurt', 13.25);
let meal=menu.generateRandomMeal();
console.log(meal);
