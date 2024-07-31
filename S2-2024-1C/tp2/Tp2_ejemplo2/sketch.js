function setup() {
  createCanvas(2000, 1000);
  background('#789461');
}
function draw() {
  strokeWeight(0);
  stroke(1);
  fill(41,75,41,random(255));
  circle(random(10,windowWidth), random(10,windowHeight), random(10,100));
  let unRandom = random(windowWidth)
  strokeWeight(random(15));
  stroke(255,255,255, random(100));
  line(unRandom, 0, unRandom, windowHeight);

  strokeWeight(20);
  stroke(255);
  line(300, 600, 300, 400);
  strokeWeight(30);
  line(500, 650, 500, 350);
  strokeWeight(40);
  line(700, 700, 700, 300);
  strokeWeight(50);
  line(900, 750, 900, 250);
  strokeWeight(60);
  line(1100, 800, 1100, 200);
  strokeWeight(70);
  line(1300, 850, 1300, 150);
  strokeWeight(80);
  line(1500, 900, 1500, 100);

}
//1854
//1065