//Create variables here
var dog,dogimg;
var happydog;
var database;
var foodstock;
var milk,milkimg;
var feedbutton,addbutton;
var foodobj;

function preload()
{
//load images here
  dogimg = loadImage("images/Dog.png");
  happydog = loadImage("images/happydog.png");
  milkimg = loadImage("images/Milk(1).png");
}

function setup() {

//Creating the canvas  
	createCanvas(1000,1000);
dog = createSprite(500,500,25,25);
dog.addImage(dogimg);

foodObj = new Food();

database = firebase.database();  
foodStock = database.ref('food');
foodStock.on("value",readStock);

feedbutton = createButton();
feedbutton.position();
feedbutton.mousePressed(()=>{

foodStock = foodStock-1;
text("Your pet is happy",200,200);
dog.addImage(happydog);

});


addbutton = createButton();
addbutton.position();
addbutton.mousePressed(()=>{

foodStock = foodStock+1;
text("Food added",300,300);

});

}

function draw() {  

//Creating the background
background(46,139,87);

//text to display instructions'
textSize (25);
fill ("red");
text("Note: Press Up arrow key to feed the dog",400,25);

//Code to find the coordinates of the canvas
textSize(30);
fill ("orange");
text ("x:"+mouseX,70,450);
text ("y:"+mouseY,70,480);

//displaying the food
foodObj.display();

fedtime = database.ref('FeedTime');
fedtime.on("value",function(data){
  lastfed=data.val();
});

  drawSprites();
  //add styles here

}



