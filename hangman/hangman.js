var password = "Kto szuka ten znajdzie";
password = password.toUpperCase();

var hit_sound = new Audio("yes.wav");
var miss_sound = new Audio("no.wav");
var miss = 0;
var passwordlength = password.length;
var password1 = "";

for (i=0;i<passwordlength;i++) {
	if (password.charAt(i) == " ") password1 =password1 + " ";
	else password1 =password1 + "-";
}

function print_password() {
	document.getElementById("board").innerHTML = password1;
}

window.onload = start_game; 

var lettersTable = new Array(35);
lettersTable[0] = "A";
lettersTable[1] = "Ą";
lettersTable[2] = "B";
lettersTable[3] = "C";
lettersTable[4] = "Ć";
lettersTable[5] = "D";
lettersTable[6] = "E";
lettersTable[7] = "Ę";
lettersTable[8] = "F";
lettersTable[9] = "G";
lettersTable[10] = "H";
lettersTable[11] = "I";
lettersTable[12] = "J";
lettersTable[13] = "K";
lettersTable[14] = "L";
lettersTable[15] = "Ł";
lettersTable[16] = "M";
lettersTable[17] = "N";
lettersTable[18] = "Ń";
lettersTable[19] = "O";
lettersTable[20] = "Ó";
lettersTable[21] = "P";
lettersTable[22] = "Q";
lettersTable[23] = "R";
lettersTable[24] = "S";
lettersTable[25] = "Ś";
lettersTable[26] = "T";
lettersTable[27] = "U";
lettersTable[28] = "V";
lettersTable[29] = "W";
lettersTable[30] = "X";
lettersTable[31] = "Y";
lettersTable[32] = "Z";
lettersTable[33] = "Ż";
lettersTable[34] = "Ź";

function start_game() {
	var allLetters = "";
	for(i=0; i<35; i++){
	var element = "lett" + i;	
	
	allLetters = allLetters + 
	'<div class="letter" onclick=check('+i+') id = "'+element+'">'+lettersTable[i]+'</div>';	
	
	if((i+1)%7==0) allLetters = allLetters + '<div style = "clear:both;"></div>'
	}

	document.getElementById("alphabeth").innerHTML = allLetters;
	
	print_password();
}

String.prototype.replaceChar = function(charPosition, newChar){
	if (charPosition>this.length -1) return this.toString();
	else return this.substr(0, charPosition) + newChar + this.substr(charPosition+1);
}

function check(numb) {
	var struck = false;
for(i=0; i<passwordlength; i++){
	if(password.charAt(i) == lettersTable[numb]) {
		password1 = password1.replaceChar(i, lettersTable[numb]);
	struck = true;
	}
}

if(struck==true){
	hit_sound.play();
	var element = "lett" + numb;
	document.getElementById(element).style.background = "#003300";
	document.getElementById(element).style.color = "#00C000";
	document.getElementById(element).style.border = "3px solid #00C000";
	document.getElementById(element).style.cursor = "default";
print_password();
}else{
	miss_sound.play();
	var element = "lett" + numb;
	document.getElementById(element).style.background = "#330000";
	document.getElementById(element).style.color = "#C00000";
	document.getElementById(element).style.border = "3px solid #C00000";
	document.getElementById(element).style.cursor = "default";
	document.getElementById(element).setAttribute("onclick",";");

	miss++;
	var picture = "img/s"+miss+".jpg";
	document.getElementById("gallows").innerHTML = '<img src="'+picture+'"alt=""/>';
}

if(password==password1){
	document.getElementById("alphabeth").innerHTML = "BRAWO! UNIKNĄŁEŚ SZUBIENICY!"+
	'<br/><br/><span class = "restart" onclick="location.reload()">CHCESZ ZAGRAĆ JESZCZE RAZ?</span>';
}

if(miss==9){
	document.getElementById("alphabeth").innerHTML = "NIESTETY! NIE UDAŁO SIĘ!"+
	'<br/><br/><span class = "restart" onclick="location.reload()">CHCESZ ZAGRAĆ JESZCZE RAZ?</span>';
}

}