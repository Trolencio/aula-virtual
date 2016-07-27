//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
if (tiAval){parent.iniciaActividade()} paintBoard();if ((tiTime) && (tiButtonTime)){paintButtonTime();}
}
function paintBoard(){for (i=0;i<cols;i++){for (j=0; j<rows; j++){if (parseInt(vCell[i][j])==3){
var nArr = [];nArr.push(tablaWords(a0Cell[i][j]).substring(0, c[i][j]));nArr.push(tablaWords(a1Cell[i][j]).substring(0, c1[i][j]));nArr.push(tablaWords(a2Cell[i][j]).substring(0, c2[i][j]));nArr.push(tablaWords(a3Cell[i][j]).substring(0, c3[i][j]));
nArr=nArr.unique();nArr = $.grep(nArr,function(n){return(n);});nArr=nArr.sort(function(){return Math.random()-0.5});for (z=0; z<nArr.length; z++){$("#select"+i.toString()+j.toString()).append('<option value="'+nArr[z]+'">'+nArr[z]+'</option>');
}}}}calcCan();}
function calcCan(){var canWidth=$("#ardoraAct").css("width").replace("px", "");
var canHeight=$("#ardoraAct").css("height").replace("px", "");$("#ardoraActCanvas").attr({"width": canWidth,"height":canHeight});}
function randomSort(){
}
function isCorrect(){var correct=true;for (i = 0; i < cols; i++) {for (j = 0; j < rows; j++) {if (parseInt(vCell[i][j])<4 && d[i][j]==1){var iC=true;
if (parseInt(vCell[i][j])==0){var cV=$("#input"+i.toString()+j.toString()).val();if (!cV){correct=false;iC=false;}var cV1=tablaWords(a0Cell[i][j]).substring(0, c[i][j]);var cV2=tablaWords(a1Cell[i][j]).substring(0, c1[i][j]);
var cV3=tablaWords(a2Cell[i][j]).substring(0, c2[i][j]);var cV4=tablaWords(a3Cell[i][j]).substring(0, c3[i][j]);if (cV1.localeCompare(cV)!=0 && cV2.localeCompare(cV)!=0 && cV3.localeCompare(cV)!=0 && cV4.localeCompare(cV)!=0) {
correct = false;iC = false;}}
if (parseInt(vCell[i][j])==1){var cV=$("#input"+i.toString()+j.toString()).val().trim().toUpperCase();if (!cV){correct=false;iC=false;}var cV1=tablaWords(a0Cell[i][j]).substring(0, c[i][j]).toUpperCase();
var cV2=tablaWords(a1Cell[i][j]).substring(0, c1[i][j]).toUpperCase();var cV3=tablaWords(a2Cell[i][j]).substring(0, c2[i][j]).toUpperCase();var cV4=tablaWords(a3Cell[i][j]).substring(0, c3[i][j]).toUpperCase();
if (cV1.localeCompare(cV)!=0 && cV2.localeCompare(cV)!=0 && cV3.localeCompare(cV)!=0 && cV4.localeCompare(cV)!=0){
correct=false;iC=false;}}
if (parseInt(vCell[i][j])==2){var cB=0;if ($("#checkbox"+i.toString()+j.toString()).is(":checked")){cB=1;}if (tablaWords(a0Cell[i][j]).substring(0,1).localeCompare(cB)!=0){correct=false; iC=false;}}
if (parseInt(vCell[i][j])==3){var cV=$("#select"+i.toString()+j.toString()).val();if (tablaWords(a0Cell[i][j]).substring(0,c[i][j]).localeCompare(cV)!=0){correct=false; iC=false;}}
if (iC && showC){d[i][j]=0;if (parseInt(vCell[i][j])!=2){$("#cell"+i.toString()+j.toString()).text(tablaWords(a0Cell[i][j]).substring(0,c[i][j]));}else{
if (cB==1){$("#cell"+i.toString()+j.toString()).html("&#10004;");}else{$("#cell"+i.toString()+j.toString()).html("&#10065;");}}}}}}
if (correct) {score=score+scoreInc;timeAct=timeAct+timeBon;successes++;showMessage("Ok");} else {attempts++;score = score - scoreDec;
if (tiAttempts){if (attempts > attemptsMax) {showMessage("Attempts");}else{showMessage("Error");}}else{showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function tablaWords(input) {var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = "";var i = 0;
var btest = /[^A-Za-z0-9\+\/\=]/g; if (btest.exec(input)) { alert("Invalid characters");} input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do { enc1 = wordsStr.indexOf(input.charAt(i++)); enc2 = wordsStr.indexOf(input.charAt(i++)); enc3 = wordsStr.indexOf(input.charAt(i++)); enc4 = wordsStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);chr3 = ((enc3 & 3) << 6) | enc4;
output = output + String.fromCharCode(chr1);if (enc3 != 64) {output = output + String.fromCharCode(chr2);} if (enc4 != 64) {output = output + String.fromCharCode(chr3);}
chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = "";} while (i < input.length);return unescape(output);}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
Array.prototype.unique=function(a){return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0});
