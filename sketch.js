var newX, newY;
var flower1;
var flower2;
var sliderD;
var sliderN;
	var flower = function(){
		this.x = 40;
		this.y = 100;
		this.d = 8;
		this.n = 5;
	};
	flower.prototype.move = function(newX,newY){
		this.x = newX;
		this.y = newY;
	};
	flower.prototype.dn = function(d, n){
		this.d = d;
		this.n = n;
};
flower.prototype.create = function(){

	var k = this.n / this.d;
		push();
		translate(width / 2, height / 2);

		beginShape();
		stroke(25);
		noFill();
		strokeWeight(6);
		for (var a = 0; a < TWO_PI * reduceDenominator(this.n, this.d); a += 0.02) {
			var r = 200 * cos(k * a);
			var x = r * cos(a) + this.x;
			var y = r * sin(a) + this.y;
			vertex(x, y);
		}
		endShape(CLOSE);
		pop();
		noLoop();
	};

function setup() {
  createCanvas(400, 400);
  sliderD = createSlider(1, 60, 10, 1);
  sliderN = createSlider(1, 20, 10, 1);
  sliderD.input(draw);
  sliderN.input(draw);
  flower1 = new flower();
	flower2 = new flower();


}

function draw() {
	background(100);
 	var d = sliderD.value();
  var n = sliderN.value();
	flower1.dn(d,n);
	flower2.dn(d,n);
	flower1.move(-200,40);
	flower2.move(newX,newY);
	flower1.create();
	flower2.create();
}
function mousePressed(){
		
		newX = mouseX-500;
	newY = mouseY-200;
	draw();
}
function reduceDenominator(numerator, denominator) {
    function rec(a, b) {
        return b ? rec(b, a % b) : a;
    }
    return denominator / rec(numerator, denominator);
}
