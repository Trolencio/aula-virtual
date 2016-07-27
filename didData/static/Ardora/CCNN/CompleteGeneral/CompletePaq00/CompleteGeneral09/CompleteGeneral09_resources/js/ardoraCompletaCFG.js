//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=1;
var score=0; scoreMax=7; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=false;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Actividad Finalizada!!"; messageTime=""; messageError="Intenta Nuevamente"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<img class="imaLeft" src="CompleteGeneral09_resources/media/micosis00.jpg" alt="Ima"  align="left"><p>Perjuicios que producen algunos hongos: </p><p> Hay hongos que se desarrollan de forma <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly>, causando enfermedades en los organismos hospedadores.  </p><p> Las infecciones por hongos se llaman <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly>. Este tipo de hongos vive en la capa superficial de la <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly>, sobre todo en las zonas <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly> del cuerpo (entre los dedos de los pies, por ejemplo, a causa del sudor que puede haber). Las micosis suelen causar inflamación, <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly> y descamación en la piel. </p><p> También existen hongos como el denominado la <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly> que atacan <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly> de cereales –arroz, trigo y maíz.</p>'];
var answers=["parásita","ampollas","roya","Micosis","húmedas","piel","cultivos"];
var a=["MQ","NQ","Ng","Mg","NA","Mw","Nw"];
var itemCorr=["0","0","0","0","0","0","0"];
var itemHelp=["","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="Q29tcGxldGVHZW5lcmFsMDk"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
