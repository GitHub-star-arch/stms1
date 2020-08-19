const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var s1, s2, s3, s4;
var g1;

function setup(){
    var canvas = createCanvas(400,400);
    Engine = Engine.create();
    world = engine.world;

    g1 = new Ground();
    s1 = new stick(220,200,50,50);
    s2 = new stick(220,100,50,50);
    s3 = new stick(210,100,50,50);
    s4 = new stick(230,100,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    s1.display();
    s2.display();
    s3.display();
    s4.display();
    g1.display();
    
    drawSprites();
}