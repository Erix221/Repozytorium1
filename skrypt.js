let plansza = document.querySelector('canvas');
let ctx = plansza.getContext('2d');
let k = new kulka(random(0,1000),random(200,400),22,random(4,6),random(4,6),"red",0);
let b = new belka(920,785,225,50,"black");
let pr = false;// stan klawiszy
let lw = false; 
let koniec = false; // stan gry
let wygrana = false;
let ax1,ay1,ax2,ay2,bx1,by1,bx2,by2,cx1, cy1, cx2, cy2; // do funkcji kolizja_belka i kolizja_blok
let tab; // tablica z klockami do niszczenia
tab= [  new klocek(50,50,100,20,random_rgb()),
		new klocek(151,50,100,20,random_rgb()),
		new klocek(252,50,100,20,random_rgb()),
		new klocek(353,50,100,20,random_rgb()),
		new klocek(454,50,100,20,random_rgb()),
		new klocek(555,50,100,20,random_rgb()),
		new klocek(656,50,100,20,random_rgb()),
		new klocek(757,50,100,20,random_rgb()),
		new klocek(858,50,100,20,random_rgb()),
		new klocek(50,71,100,20,random_rgb()),
		new klocek(151,71,100,20,random_rgb()),
		new klocek(252,71,100,20,random_rgb()),
		new klocek(353,71,100,20,random_rgb()),
		new klocek(454,71,100,20,random_rgb()),
		new klocek(555,71,100,20,random_rgb()),
		new klocek(656,71,100,20,random_rgb()),
		new klocek(757,71,100,20,random_rgb()),
		new klocek(858,71,100,20,random_rgb()),
		new klocek(50,92,100,20,random_rgb()),
		new klocek(151,92,100,20,random_rgb()),
		new klocek(252,92,100,20,random_rgb()),
		new klocek(353,92,100,20,random_rgb()),
		new klocek(454,92,100,20,random_rgb()),
		new klocek(555,92,100,20,random_rgb()),
		new klocek(656,92,100,20,random_rgb()),
		new klocek(757,92,100,20,random_rgb()),
		new klocek(858,92,100,20,random_rgb()),
		new klocek(50,113,100,20,random_rgb()),
		new klocek(151,113,100,20,random_rgb()),
		new klocek(252,113,100,20,random_rgb()),
		new klocek(353,113,100,20,random_rgb()),
		new klocek(454,113,100,20,random_rgb()),
		new klocek(555,113,100,20,random_rgb()),
		new klocek(656,113,100,20,random_rgb()),
		new klocek(757,113,100,20,random_rgb()),
		new klocek(858,113,100,20,random_rgb())];	


		
		
//funkcje wykrywania klawiszy		
document.onkeydown = function(e){
	if(e.keyCode === 65){
		lw = true;
	}
	if(e.keyCode === 68){
		pr = true;
	}
	if(e.keyCode === 32){
		if(koniec) nowa_gra();
	}
}

document.onkeyup = function(e){
	if(e.keyCode === 65){
		lw = false;
	}
	if(e.keyCode === 68){
		pr = false;
	}
}

function nowa_gra(){ // zaczyna gre od poczatku
	out.innerHTML = "";
	ptk.innerHTML = "0";
	koniec = false;
	tab= [
	    new klocek(50,50,100,20,random_rgb()),
		new klocek(151,50,100,20,random_rgb()),
		new klocek(252,50,100,20,random_rgb()),
		new klocek(353,50,100,20,random_rgb()),
		new klocek(454,50,100,20,random_rgb()),
		new klocek(555,50,100,20,random_rgb()),
		new klocek(656,50,100,20,random_rgb()),
		new klocek(757,50,100,20,random_rgb()),
		new klocek(858,50,100,20,random_rgb()),
		new klocek(50,71,100,20,random_rgb()),
		new klocek(151,71,100,20,random_rgb()),
		new klocek(252,71,100,20,random_rgb()),
		new klocek(353,71,100,20,random_rgb()),
		new klocek(454,71,100,20,random_rgb()),
		new klocek(555,71,100,20,random_rgb()),
		new klocek(656,71,100,20,random_rgb()),
		new klocek(757,71,100,20,random_rgb()),
		new klocek(858,71,100,20,random_rgb()),
		new klocek(50,92,100,20,random_rgb()),
		new klocek(151,92,100,20,random_rgb()),
		new klocek(252,92,100,20,random_rgb()),
		new klocek(353,92,100,20,random_rgb()),
		new klocek(454,92,100,20,random_rgb()),
		new klocek(555,92,100,20,random_rgb()),
		new klocek(656,92,100,20,random_rgb()),
		new klocek(757,92,100,20,random_rgb()),
		new klocek(858,92,100,20,random_rgb()),
		new klocek(50,113,100,20,random_rgb()),
		new klocek(151,113,100,20,random_rgb()),
		new klocek(252,113,100,20,random_rgb()),
		new klocek(353,113,100,20,random_rgb()),
		new klocek(454,113,100,20,random_rgb()),
		new klocek(555,113,100,20,random_rgb()),
		new klocek(656,113,100,20,random_rgb()),
		new klocek(757,113,100,20,random_rgb()),
		new klocek(858,113,100,20,random_rgb())];		
	k = new kulka(200,200,22,6,6,"red",0);
    b = new belka(920,785,225,50,"black");
	Calosc();
}

kulka.prototype.kolizja_blok=function (){ // kolizja kulki z klockami
	 ax1 = this.x-this.r;
	 ay1 = this.y-this.r;
	 ax2 = this.x+this.r;
	 ay2 = this.y+this.r;
	for(let i = 0; i < tab.length; i++){
		bx1 = tab[i].x;
		by1 = tab[i].y;
		bx2 = tab[i].x+tab[i].width;
		by2 = tab[i].y+tab[i].height;
		if(!(ax2 <= bx1 || bx2 <= ax1 || ay2 <= by1 || by2 <= ay1)){
			poprzX = this.x - this.dx - this.r;
			poprzY = this.y - this.dy - this.r;
			if((poprzX > bx2 || poprzX < bx1) && poprzY >= by1 && poprzY <= by2){
				this.dx = -this.dx;	
			} else {
				this.dy = -this.dy;
			}
			tab.splice(i,1);
			this.score = this.score + 100;
			ptk.innerHTML = k.score;
			
			//return;
		}
	}
}

//
belka.prototype.Sterowanie = function(){ // sterowanie belka
	if(pr){
		if(this.xPr < this.max){
			this.xPr += this.A;	
		} else {
			this.xPr = this.max;
		}
	} else {
		if(this.xPr > 0){
			this.xPr -= this.D;
			if(this.xPr < 0) this.xPr = 0;
		}
	}
	if(lw){
		if(this.xPr > -this.max){
			this.xPr -= this.A;	
		} else {
			this.xPr = -this.max;
		}
	} else {
		if(this.xPr < 0){
			this.xPr += this.D;
			if(this.xPr > 0) this.xPr = 0;
		}
	}
	this.x+=this.xPr;
}
		
function Mapa(){ // rysuje mape
	for(let i = 0; i < tab.length; i++){
		ctx.fillStyle = tab[i].color;
		ctx.fillRect(tab[i].x,tab[i].y,tab[i].width,tab[i].height);
	
	}
}				
// obiekty		
function kulka(x,y,r,vx,vy,color,score){
	this.x = x;
	this.y = y;
	this.r = r;
	this.vx = vx;
	this.vy = vy;
	this.color = color;
	this.score = score;
}		
				
function klocek(x,y,width,height,color){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;
}
			
function belka(x,y,width,height,color){ //
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;
	this.max = 10;
    this.A = 0.75; // przyśpieszenie
	this.D = 0.75; // spowolnienie 
	this.xPr = 0; // aktualne przyspieszenie 

}
// losowe kolory
function random_rgb() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}			
							
kulka.prototype.rysuj=function() // rysuje kulke
{	
    
	ctx.beginPath();
	ctx.fillStyle=this.color;
	ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}
belka.prototype.rysuj=function() // rysuje belke którą porusza gracz(na razie statyczne, później użyte zostaną tu prędkości)
{	
    
	ctx.beginPath();
    ctx.fillStyle=this.color;
	ctx.rect(this.x,this.y,this.width,this.height);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}
kulka.prototype.ruch=function() // zmienia pozycja kulki 
{
this.x+=this.vx;
this.y+=this.vy;
}

kulka.prototype.kolizja_tlo=function() // sprawdza czy kulka nie uderza o krawędzi ekranu
{
	if(this.x+this.r<=0){ // prawa i lewa  strona 
		this.vx=-this.vx;
}
	if(this.x+this.r>=canvas.width){
		this.vx=-this.vx
}
	if(this.y + this.r > canvas.height){
		koniec = true;
		wygrana = false;
}
	if(this.y+this.r<=0){
		this.vy=-this.vy;
}
}

kulka.prototype.kolizja_belka= function(){ // funkcja sprawdzajaca kolicja kulki z belka
	ax1 = this.x-this.r;
	ay1 = this.y-this.r;
	ax2 = this.x+this.r;
	ay2 = this.y+this.r;
	cx1 = b.x;
	cy1 = b.y;
	cx2 = b.x+b.width;
	cy2 = b.y+b.height;
	if(!(cx2 <= ax1 || ax2 <= cx1 || cy2 <= ay1 || ay2 <= cy1)){
		this.vy = -(this.vy);
	}
}
belka.prototype.kolizja_tlo=function (){ // funkcja sprawdzajaca czy belka nie wychodzi za ekran
	if(this.x < 0){
		this.x = 0;
	} else{ 
	if(this.x + this.width > canvas.width){
		this.x = canvas.width - this.width;
	}
	}
}


function Wygrana_spr(){ // funkcja sprawdza czy wygrales
	if(tab.length < 1){
		koniec = true;
		wygrana = true;
	}
}

function random(min,max){ // funkcja wybierajaca losowa liczbe z zakresu
	return Math.random()*(max-min)+min;
}	

function Tlo(){ // funkcja czyszczaca tlo
	ctx.clearRect(0,0,canvas.width,canvas.height);
}

function Calosc(){ // Całość funkcja gry
b.Sterowanie();
b.kolizja_tlo();
k.kolizja_belka();
k.kolizja_tlo();
k.kolizja_blok();
Tlo();
b.rysuj();
k.ruch();
k.rysuj();
Mapa();
Wygrana_spr();
if(koniec === false){
	requestAnimationFrame(Calosc);
	} else {
	if(wygrana){
		out.innerHTML += "<b>Wygrałeś, kliknij spację jeśli chcesz zacząć od nowa!</b>";
		Win();
	}
	else{
	out.innerHTML += "<b>Przegrałeś :( , kliknij spację żeby zacząć od nowa.</b>";
	}
	b.Sterowanie();
}
		
}
Calosc();