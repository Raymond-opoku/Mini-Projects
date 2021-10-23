class Media{
  constructor(title){
   this._title=title;
   this._ratings=[]
   this._isCheckedOut=false; 
  }
  get title(){
    return this._title;
  }
  get ratings(){
    return this._ratings;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  set isCheckedOut(isCheckedOuts){
    this._isCheckedOut=isCheckedOuts
  }
  toggleCheckOutStatus(){
   this._isCheckedOut=!this._isCheckedOut; 
  }
  getAverageRating(rating){
    let ratingsSum=this.ratings.reduce((currentSum,rating)=>currentSum+rating,0)
    const lengthOfArray=this.ratings.length
    return ratingsSum/lengthOfArray
  }
  addRating(rate){
    return this._ratings.push(rate);
  }
}
class Book extends Media{
  constructor(title,author,pages){
    super(title);
    this._author=author;
    this._pages=pages;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
}
class Movie extends Media{
  constructor(title,director,runTime){
    super(title)
    this._director=director;
    this._runTime=runTime
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
}
const historyOfEverything= new Book('A short History of Nearly Everything','Bill Bryson',544)
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())
const speed=new Movie('Speed','Jan de Bont',116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())