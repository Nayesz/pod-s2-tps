function setup() {
  createCanvas(500, 500);
}


let tiempo;
let divTiempo = 5000 / 4; 

function draw() {

  tiempo = round(millis() % 5000)
  //tiempo = 1000
  background(255)
  
  if(tiempo < divTiempo){

    
  stroke(0)
  strokeWeight(15)
  //lineas degrade
  for (let i = 1; i <= 10; i++) {
    line(i * 45, 0, i * 45, 500)
    stroke(20 * i)
  }
  }else if(tiempo < divTiempo * 2){
    //ellipses
    ellipseMode(CENTER)
    noFill()
    stroke(0)
    strokeWeight(1)
    for (let i = 1; i <= 10; i++) {
      ellipse(250, 250, 65 * i)
      strokeWeight(i * 2)
    }

  }else if (tiempo < divTiempo*3){
    //diagonal de elipses
    noFill()
    strokeWeight(1)
    stroke(0)
    for (let i = 25; i < 500; i += 50) {
      ellipse(i, 500 - i, 30)
      if (i > 200) {
        stroke(100)
        strokeWeight(10)
      }
    }

  }else{
    stroke(0)

    strokeWeight(1)
    for (let i = 0; i < 500; i += 50) {
      line(i, 0, i + 50, 250)
    }
    strokeWeight(15)
    for (let i = 25; i < 500; i += 50) {
      line(i, 250, i + 50, 500)
    }

  }

}
