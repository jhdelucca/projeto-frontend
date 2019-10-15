var esquerda = 37, cima = 38, direita = 39 , baixo = 40;  // inicializa as variaves com seus keyCode;
var canvas = document.querySelector("canvas")
var cx = canvas.getContext("2d");
var quadrado = {
	x:10,
	y:10
};

renderizar();

window.addEventListener("keydown", manipulador); // funçao para quando apertar a tecla, fazer alguma coisa

function manipulador(e) {
	var chave = e.keyCode; // var chave recebe o codigo das teclas de direção
	
	if(chave == esquerda) {
		quadrado.x--;
	}
	if(chave == direita) {
		quadrado.x++;
	}
	if(chave == cima) {
		quadrado.y--;
	}
	if(chave == baixo) {
		quadrado.y++;
	}
	
	renderizar();
}



function renderizar() {
	cx.clearRect(0,0,canvas.width,canvas.height);
	cx.fillRect(quadrado.x,quadrado.y,50,50)
}

