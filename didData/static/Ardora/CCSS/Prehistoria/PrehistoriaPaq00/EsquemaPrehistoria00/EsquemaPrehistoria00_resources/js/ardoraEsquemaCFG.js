//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
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
var timeOnMessage=2; messageOk="Actividad Finalizada!!!"; messageTime="Tiempo Fuera"; messageError="Intenta Nuevamente"; messageErrorG="Intenta Nuevamente"; messageAttempts="Intentos fuera"; isShowMessage=false;
var urlOk="C:/Users/Orlando2004/Desktop/SitioArdora/CCSS/Prehistoria/EsquemaSolucion/EsquemaSolucion.htm"; urlTime="C:/Users/Orlando2004/Desktop/SitioArdora/CCSS/Prehistoria/EsquemaSolucion/EsquemaSolucion.htm"; urlError="C:/Users/Orlando2004/Desktop/SitioArdora/CCSS/Prehistoria/EsquemaSolucion/EsquemaSolucion.htm"; urlAttempts="C:/Users/Orlando2004/Desktop/SitioArdora/CCSS/Prehistoria/EsquemaSolucion/EsquemaSolucion.htm";
var goURLOk="_self"; goURLTime="_self"; goURLAttempts="_self"; goURLError="_self"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="RXNxdWVtYVByZWhpc3RvcmlhMDA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var depth=-1;var nodeCount=0;
var nodeF=["UHJlaGlzdG9yaWE","RWRhZCBkZSBQaWVkcmE","RWRhZCBkZSBQaWVkcmE","RWRhZCBkZSBQaWVkcmE","TmVvbO10aWNv","UHJlaGlzdG9yaWE","RWRhZCBkZSBsb3MgTWV0YWxlcw","RWRhZCBkZSBsb3MgTWV0YWxlcw","RWRhZCBkZSBsb3MgTWV0YWxlcw"];
var nodeFS=[11,14,14,14,10,11,19,19,19];
var nodeE=["RWRhZCBkZSBQaWVkcmE","UGFsZW9s7XRpY28","TWVzb2ztdGljbw","TmVvbO10aWNv","UmV2b2x1Y2lvbiBkZWwgTmVvbO10aWNv","RWRhZCBkZSBsb3MgTWV0YWxlcw","Q29icmU","QnJvbmNl","SGllcnJv"];
var nodeES=[14,12,11,10,25,19,5,6,6];
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
