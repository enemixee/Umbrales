let objs = [];
let colors = ['#FF5200', '#9C2BFC', '#701C47', '#ebebeb', '#FFFFFF', '#FF5200'];

function setup() {
    createCanvas(windowWidth, windowHeight-(windowHeight/3));
    rectMode(CENTER);
    INIT();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight-(windowHeight/3)); // Ajusta el tamaño del canvas
}
function draw() {
    background('#F01759');

    // Dibuja los objetos interactivos
    for (let i of objs) {
        i.show();
        i.move();
    }

    if (frameCount % 95 === 0) {
        INIT();
    }

    // Dibuja la línea que rota hacia el mouse
    drawRotatingLine();
}

function INIT() {
    objs = [];
    let num1 = int(random(5, 10)); // Ajusta el número de círculos centrales
    for (let i = 0; i < num1; i++) {
        objs.push(new OMP());
    }
}

function easeOutQuart(x) {
    return 1 - Math.pow(1 - x, 4);
}

function easeInQuart(x) {
    return x * x * x * x;
}

class OMP {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.d = 0;
    
        if (width <= 740) {
            this.d1 = width * random(0.1, 0.5); // Ajusta el tamaño de los círculos
        } else {
            this.d1 = width * random(0.1, 0.3); // Ajusta el tamaño de los círculos
        }

        this.t = -int(random(20));
        this.t1 = 40;
        this.t2 = this.t1 + 40;
        this.col = random(colors);
    }

    show() {
        fill(this.col);
        noStroke();
        circle(this.x, this.y, this.d);
    }

    move() {
        if (0 < this.t && this.t < this.t1) {
            let n = norm(this.t, 0, this.t1 - 1);
            this.d = lerp(0, this.d1, easeOutQuart(n));
        } else if (this.t1 < this.t && this.t < this.t2) {
            let n = norm(this.t, this.t1, this.t2 - 1);
            this.d = lerp(this.d1, 0, easeInQuart(n));
        }
        this.t++;
    }
}

function drawRotatingLine() {
    push();
    translate(width / 2, height / 2); // Traslada el origen al centro del canvas

    let angle = atan2(mouseY - height / 2, mouseX - width / 2); // Calcula el ángulo hacia el mouse
    rotate(angle); // Rota según el ángulo calculado

    stroke('#fffff'); // Color púrpura
    strokeWeight(2); // Grosor de la línea
    line(-width , 0, width , 0); // Línea completa dibujada en ambos sentidos hasta los bordes
    pop();
}
