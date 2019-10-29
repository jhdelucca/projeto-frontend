import '../dist/css/main.css';
import './img/favicon.ico';
var esquerda = 37, cima = 38, direita = 39 , baixo = 40;  // inicializa as variaves com seus keyCode;
var moveEsquerda = false, moveDireita = false, moveCima = false, moveBaixo = false;
var canvas = document.querySelector("canvas")
var cx = canvas.getContext("2d");
var quadrado = {
	x:10,
	y:10
};

atualizar();

window.addEventListener("keydown", apertar); // funçao para quando apertar a tecla, fazer alguma coisa

window.addEventListener("keyup",soltar); //Dirspara um evento quando uma tecla é liberada

function apertar(e) {
	let chave = e.keyCode; // var chave recebe o codigo das teclas de direção
	
	if(chave == esquerda && chave !== direita) {
		moveEsquerda = true;
	}
	if(chave == direita && chave !== esquerda) {
		moveDireita = true;
	}
	if(chave == cima && chave != baixo) {
		moveCima = true;
	}
	if(chave == baixo && chave != cima) {
		moveBaixo = true;
	}
}

function soltar(e){
			//Variável recebe o código da tecla liberada
			let chave = e.keyCode;
			//Esquerda
			if(chave == esquerda && chave !== direita){
				moveEsquerda = false;
			}
			//Direita
			if(chave == direita && chave !== esquerda){
				moveDireita = false;
			}
			//Para Cima
			if(chave == cima && chave !== baixo){
				moveCima = false;
			}
			//Para Baixo
			if(chave == baixo && chave !== cima){
				moveBaixo = false;
			}
		}

	function mover(){
			
			if(moveEsquerda){
				quadrado.x--;
			}
			
			if(moveDireita){
				quadrado.x++;
			}
			
			if(moveCima){
				quadrado.y--;
			}
			
			if(moveBaixo){
				quadrado.y++;
			}
		}

	function renderizar() {
		cx.clearRect(0,0,canvas.width,canvas.height);
		cx.fillRect(quadrado.x,quadrado.y,50,50)
	}
	
	function atualizar(){
			
			requestAnimationFrame(atualizar, canvas);
			
			mover();
			
			renderizar();
		}

