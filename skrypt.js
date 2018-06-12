let plansza = document.querySelector('canvas');
let ctx = plansza.getContext('2d');
let k = new kulka(100,100,15,3,3,random_rgb());
let b = new belka(600,500,50,30,3,3,random_rgb());
let bx1,by1,vbx2,vby2,kx1,ky1,vkx2,vky2; // zmienne to funkcji odbijajacej bleke
let lw = 0, pr = 0,koniec = 0;

document.onkeydown = function(e){ // funkcje sprawdzajace czy klawisz jest przytrzymywany czy puszczony
	if(e.keyCode === 37){
		lw = true;
	}
	if(e.keyCode === 39){
		pr = true;
	}
	
}

document.onkeyup = function(e){
	if(e.keyCode === 37){
		lw = 0;
	}
	if(e.keyCode === 39){
		pr = 0;
	}
}				
		
function kulka(x,y,r,vx,vy,color){
	this.x = x;
	this.y = y;
	this.r = r;
	this.vx = vx;
	this.vy = vy;
	this.color = color;
}		
				
function klocek(x,y,width,height,color){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;
}
			
function belka(x,y,width,height,vx,vy,color){ //
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;
	this.vx = vx;
	this.vy = vy;
}

function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}			
							
kulka.prototype.rysuj=function()
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
if(this.y+this.r>=canvas.height){ // dół i góra ekranu
// tutaj gra będzie kończona gdyż kulka spadnie na ziemie
}
if(this.y+this.r<=0){
this.vy=-this.vy
}
}

kulka.prototype.kolizja_belka=function() // kulka odbija sie od belki
{
   bx1 = b.x; by1 = b.y;
	 vbx2 = b.x+b.width; vby2 = b.y+b.height;
	 kx1 = this.x-this.r; ky1 = this.y-this.r;
	 vkx2 = this.x+this.r; vky2 = this.y+this.r;
	if(!(vbx2 <= kx1 || vkx2 <= bx1 || vby2 <= ky1 || vky2 <= xy1)){
		k.vy = -k.vy;
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
