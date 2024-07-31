function setup() {
  createCanvas(2000, 1000);
  background('#474F7A');
}
function draw() {
  strokeWeight(0);
  stroke(0);
  fill(random(255),random(255),255);
  circle(random(10,windowWidth), random(10,windowHeight), random(10,100));
  let unRandom = random(windowHeight)
  strokeWeight(random(0,5));
  stroke(random(255),random(255),255);
  line(0, unRandom, windowWidth, unRandom);

  strokeWeight(15);
  stroke(0)
  line(600, 200, 600, 500);
  line(700, 300, 700, 600);
  line(800, 400, 800, 700);
  line(900, 500, 900, 800);
  line(1000, 600, 1000, 900);
  line(1100, 500, 1100, 800);
  line(1200, 400, 1200, 700);
  line(1300, 300, 1300, 600);
  line(1400, 200, 1400, 500);

}
//1854
//1065