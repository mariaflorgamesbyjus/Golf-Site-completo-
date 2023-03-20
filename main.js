
var canvas = new fabric.Canvas("myCanvas")

//Defina as posições iniciais da bola e do buraco.

ball_y = 0;
ball_x = 0;
hole_y = 400;
hole_x = 800;

block_image_width = 5;
block_image_height = 5;

function loadImg() {

	fabric.Image.fromURL("golf-h.png", function (Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top: hole_y,
			left: hole_x

		});
		canvas.add(hole_obj);

	});
	newImage();

	// Escreva o código para enviar a imagem da bola de golfe ao canvas

    
	
}

function newImage() {
	fabric.Image.fromURL("ball.png", function (Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top: ball_y,
			left: ball_x

		});
		canvas.add(ball_obj);

	});

}
// Escreva o código para enviar a imagem da bola ao canvas


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique a condição das imagens da bola e do buraco para finalizar o jogo. 
	E se a id coordenadas coincidem, para remover a imagem da bola
	e exibir "Você atingiu o objetivo!!!" 
	além de tornar a borda do canvas vermelha 'red'. */





	if (ball_x == hole_x && ball_y == hole_y){
		canvas.remove(ball_obj)
		document.getElementById("myCanvas").style.borderColor="red"
	}
	
	else {
		if (keyPressed == '38') {
			up();
			console.log("up");
		}
		if (keyPressed == '40') {
			down();
			console.log("down");
		}
		if (keyPressed == '37') {
			left();
			console.log("left");
		}
		if (keyPressed == '39') {
			right();
			console.log("right");
		}
	}

	function up() {
		// Escreva o código para mover a bola para cima.

		ball_y = ball_y-10
		canvas.remove(ball_obj)
		
        newImage()

	}

	function down() {
		// Escreva o código para mover a bola para baixo.

		ball_y = ball_y+10
		canvas.remove(ball_obj)

		newImage()
	}

	function left() {
		if (ball_x > 5) {
			// Escreva o código para mover a bola para a esquerda.[
		
			ball_x = ball_x-10
		canvas.remove(ball_obj)

		newImage()
		}
	}

	function right() {
		if (ball_x <= 1050) {
			// Escreva o código para mover a bola para a direita.
			ball_x = ball_x+10
		canvas.remove(ball_obj)

		newImage()
		}
	}

}

