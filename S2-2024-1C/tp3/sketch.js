let sorteo
let lado = 100
let x = 0
let y = 0
let ladoCanvas = 6

function setup() {
  createCanvas(lado * ladoCanvas, lado * ladoCanvas)
  background(0)
  frameRate(2)
  angleMode(DEGREES)
}

function draw() {
  // numero random del 0 al 0.99 - cara (hasta 0.50)o seca (desde 0.5 hasta 0.99)
  sorteo = random(0, 1)

  //pintamos el cuadrado celeste de fondo
  noStroke()
  fill('#A3E4D7')
  rect(x, y, lado)

  if (sorteo < 0.5) {
    // cara (sorteo menor a 0.5)
    // Módulo 1
    strokeWeight(5)

    fill('#F5B7B1')
    stroke('#FCF3CF')
    arc(x,y,100,100,0,90)
    
    noFill()
    stroke(255)
    arc(x ,y,80,80,0,90)

    noFill()
    stroke('#FCF3CF')
    arc(x,y,100,100,0,90)

    fill('#D6EAF8')
    noStroke()
    arc(x+100 ,y+100 ,120,120,180,270)

    noFill()
    stroke(255)
    arc(x+100 ,y+100 ,100,100,180,270)

    stroke('#FCF3CF')
    noFill()
    arc(x+100 ,y+100 ,120,120,180,270)

  } else {
    // seca (sorteo mayor o igual a 0.5)
    // Modulo 2
    strokeWeight(5)

    fill('#F1948A')
    stroke('#FCF3CF')
    arc(x+50,y,100,100,0,180)

    fill('#F5B7B1')
    stroke('#FCF3CF')
    arc(x+100,y+50,90,100,90,270)

    fill('#FDEDEC')
    stroke('#FCF3CF')
    arc(x+100,y+100,100,100,180,270)

    noFill()
    stroke(255)
    arc(x,y+100,80,100,-90,0)
    
  }

  // incremento x
  x = x + lado

  // si llego al límite derecho
  // bajo de línea de la trama (incremento y)
  // también reinicio x
  if (x >= width) {
    y = y + lado
    x = 0
  }
}

/* Cuando clickeamos reiniciamos el proceso */
function mousePressed() {

  //saveCanvas('thumbnail', 'png')
}
