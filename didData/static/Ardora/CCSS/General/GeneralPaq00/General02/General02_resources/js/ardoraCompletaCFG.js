//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
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
var timeOnMessage=2; messageOk=""; messageTime=""; messageError=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<img class="imaLeft" src="General02_resources/media/civiliz01.jpg" alt="Ima"  align="left"><p>Las sociedades salidas de este nuevo modelo <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly>, imbuidas por un profundo espíritu <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly> y plenamente <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly>, vieron cómo sus <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly> aldeas se convertían en <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly> ciudades y, pronto, se toparon con la necesidad de poner <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly> a su complejo funcionamiento interno.</p>','<img class="imaLeft" src="General02_resources/media/grecia00.jpg" alt="Ima"  align="left"><p>Esto aumentó el <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly> de aquellas personas que habían dirigido y coordinado el progreso colectivo y, de tal suerte, aparecieron los primeros <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly> políticos y religiosos.</p>'];
var answers=["económico","jerarquizadas","religioso","antiguas","poder","líderes","grandes","orden"];
var a=["MQ","Mw","Mg","NA","Nw","OA","NQ","Ng"];
var itemCorr=["0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="R2VuZXJhbDAy"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#5E651F";colorBack="#FEFEF0";colorSele="#EAD77E";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
