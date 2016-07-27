//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=9; attempts=0; attemptsMax=1;
var score=0; scoreMax=9; scoreInc=1; scoreDec=1
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
var indexTXT=0; var txtC=['<img class="imaLeft" src="CompleteGeneral02_resources/media/algas02.jpg" alt="Ima"  align="left"><p>Algas verdeazules. Son <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly> que obtienen energía gracias a un proceso de <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly> pero que difiere un poco del realizado en las plantas terrestres. Poseen bacterioclorofila y en lugar de aprovechar la <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly>, usan la de algunas reacciones <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly> para elaborar sustancias <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly>. </p><p> Las algas verdeazules son <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly> y muchas veces se asocian con organismos <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly>, lo que da lugar a los <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly>. En términos generales, se encuentran en todos los <input type="text" name="item9" id="item9" class="ardoraDropInput" readonly> acuáticos y terrestres.</p>'];
var answers=["líquenes","químicas","cianobacterias","eucariontes","energía solar","fotosíntesis","propias","simbióticas","hábitats"];
var a=["OA","NA","MQ","Nw","Mw","Mg","NQ","Ng","OQ"];
var itemCorr=["0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="Q29tcGxldGVHZW5lcmFsMDI"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
