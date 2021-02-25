class Food{

  constructor(){

this.foodStock = null ;

}

getfoodStock(){

database.ref('foodStock').on("value",(data)=>{
foodStock = data.val();  
});

}

updatefoodStock(stock){

database.ref('/').update({
  foodStock : stock
});  

}

display(){

var x = 120,y = 120;

imageMode(CENTER);
image (this.image,720,720,70,70);

if(this.foodStock!=0){

for(var i=0;i<foodStock;i++){

if(i%10===0){

  x=120;
  y=y+50;

 }

image (this.image,x,y,50,50);
x=x+30;

}
 }
  }
   }