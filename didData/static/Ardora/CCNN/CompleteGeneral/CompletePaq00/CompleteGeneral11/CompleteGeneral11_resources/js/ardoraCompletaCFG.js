//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=1;
var score=0; scoreMax=4; scoreInc=1; scoreDec=1
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
var indexTXT=0; var txtC=['<img class="imaLeft" src="CompleteGeneral11_resources/media/materiadescomp00.jpg" alt="Ima"  align="left"><p>Utilización de los hongos </p><p>  </p><p> Algunos hongos pueden ser utilizados como abono <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly> </p><p> Existen más de 200 especies de hongos <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly>. Sin embargo, muchas especies que se consideraban dudosos, e incluso venenosos, han resultado se <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly>. </p><p> Los venenos contenidos en los hongos varían según las <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly>. Entre ellas tenemos amanita faloide, boleto de Satanás, lepiota de carne rojiza, entre otras.</p>'];
var answers=["orgànico","venenosos","comestibles","especies"];
var a=["MQ","Mg","Mw","NA"];
var itemCorr=["0","0","0","0"];
var itemHelp=["","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="Q29tcGxldGVHZW5lcmFsMTE"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
