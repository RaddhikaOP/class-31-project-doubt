const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var maxdrops=100;
var drops;

                                                                                        
function preload(){
    
}

function setup(){
    createCanvas(800,500);

    drops = new Rain(random(0,800),20)

    
    engine =  Engine.create();
    world = engine.world;
}

function draw(){
    background("black")
    for (var i=0;i<maxdrops;i++){
        drops.push(new createRain(random(0,800),random(0,200)))
    }

    Engine.update(engine);
    drawSprites();
}   

