let amplitud
let cancion

function preload() {
  cancion = loadSound('musica/Polachek-Sunset.mp3')
}

function setup() {
  createCanvas(500, 500);
  amplitud = new p5.Amplitude();
}

let tiempo;
let nivel;
let divTiempo = 15000 / 4;
let subir;
let lineaFinal = 1;
function draw() {

  tiempo = round(millis() % 15000)
  //tiempo = 14000
  background(255)

  if (tiempo < divTiempo) {
      background(255)
      stroke(0)
      subir = 300;
      for (let i = -10; i <= 50 ; i++) {
          nivel = amplitud.getLevel()
          let finalLinea1 = map(nivel,0,1,100,500)
          let colorStroke1 = map(nivel,0,1,0,255)
          let grosorStroke = map(nivel,0,1,15,25)
          strokeWeight(grosorStroke)
          stroke(colorStroke1,0,100,100)
          line( i * 45, 0, i * 45, finalLinea1)
          nivel = amplitud.getLevel()
  
          let finalLinea2 = map(nivel,0,1,200,500)
          let grosorStroke2 = map(nivel,0,1,15,20)
          let colorStroke2 = map(nivel,0,1,0,255)
  
          strokeWeight(grosorStroke2)
          stroke(colorStroke2,0,100,150)
          line( i * 45 + 30, 0, i * 45 + 30, finalLinea2)
  
          nivel = amplitud.getLevel()
          let finalLinea3 = map(nivel,0,1,300,500)
          let grosorStroke3 = map(nivel,0,1,15,25)
          let colorStroke3 = map(nivel,0,1,0,255)
  
          strokeWeight(grosorStroke3)
          stroke(0,colorStroke3,100,150)
          line( i * 45 + 15, 0, i * 45 + 15, finalLinea3)
  
      }
  
    } else if (tiempo < divTiempo * 2) {
      //ellipses
      ellipseMode(CENTER)
      stroke(0)
  
      for (let i = 1; i <= 10; i++) {
        noFill()
        nivel = amplitud.getLevel()
        let strokeW = map(nivel,0,1,1,80)
        strokeWeight(strokeW)
        stroke(100,0,random(100),100)
        ellipse(250, 250, 65 * i)
      }
      nivel = amplitud.getLevel()
  
      let diametro = map(nivel,0,1,100,250)
      fill(0)
      ellipse(width/2, height/2, diametro)
  
    } else if (tiempo < divTiempo * 3) {
      //diagonal de elipses
      noFill()
      nivel = amplitud.getLevel()
      let diametroElipses = map(nivel,0,1,50,500)
      for (let i = 25; i < 500; i += 50) {
        if (i > 200) {
          stroke(random(100),0,100)
          strokeWeight(10)
        }else{
          stroke(0,random(100),0,100)
          strokeWeight(5)
  
        }
        ellipse(i, 500 - i, diametroElipses)
        ellipse(i+30, 500 - i, diametroElipses)
        ellipse(i-30, 500 - i, diametroElipses)
  
      }
  
    } else {
      nivel = amplitud.getLevel()
      let strokeLineas = map(nivel,0,1,10,20)
      stroke(100,0,100,100)
      strokeWeight(strokeLineas)
      for (let i = 0; i < 500; i += 10) {
        line(i, 0, i , 500)
      }
      nivel = amplitud.getLevel()
      let strokeLinea = map(nivel,0,1,100,300)
      strokeWeight(strokeLinea)
      stroke(100,0,0,100)
      for (let i = 25; i < 500; i += 50) {
        line(i, 250 , i + 50, 500)
      }
      stroke(180,0,0,100)
      for (let i = 25; i < 500; i += 50) {
        line(i, 300 , i + 50, 500)
      }
      stroke(255,100)
      for (let i = 25; i < 500; i += 50) {
        line(i, 350 , i + 50, 500)
      }
  
    }
  



}


function mousePressed() {
  if (!cancion.isPlaying()) {
    cancion.play()
  } else {
    cancion.pause()
  }

}