//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=10; scoreDec=5
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
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
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var d=[[0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1]];
var vCell=[["0","0","0","0","0","0","0","0"],["0","2","2","2","2","2","2","2"],["0","2","2","2","2","2","2","2"]];
var a0Cell=[["Q2FyYWN0ZXLtc3RpY2E","VGllbmVuIENpdG9wbGFzbWE","VGllbmVuIENsb3JvcGxhc3Rvcw","VGllbmVuIE1lbWJyYW5h","VGllbmVuIE51Y2xlbw","VGllbmVuIE1pdG9jb25kcmlhcw","VGllbmVuIENyb21vc29tYXM","VGllbmVuIFBhcmVkIENlbHVsYXI"],["UHJvY2FyaW90YQ","MQ","MA","MQ","MA","MA","MQ","MQ"],["RXVjYXJpb3Rh","MQ","MQ","MQ","MQ","MQ","MQ","MQ"]];
var c=[[14,17,19,15,13,19,17,20],[10,1,1,1,1,1,1,1],[9,1,1,1,1,1,1,1]];
var c1=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
var c2=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
var c3=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
var a1Cell=[["Q2FyYWN0ZXLtc3RpY2E","VGllbmVuIENpdG9wbGFzbWE","VGllbmVuIENsb3JvcGxhc3Rvcw","VGllbmVuIE1lbWJyYW5h","VGllbmVuIE51Y2xlbw","VGllbmVuIE1pdG9jb25kcmlhcw","VGllbmVuIENyb21vc29tYXM","VGllbmVuIFBhcmVkIENlbHVsYXI"],["UHJvY2FyaW90YQ","MQ","MA","MQ","MA","MA","MQ","MQ"],["RXVjYXJpb3Rh","MQ","MQ","MQ","MQ","MQ","MQ","MQ"]];
var a2Cell=[["Q2FyYWN0ZXLtc3RpY2E","VGllbmVuIENpdG9wbGFzbWE","VGllbmVuIENsb3JvcGxhc3Rvcw","VGllbmVuIE1lbWJyYW5h","VGllbmVuIE51Y2xlbw","VGllbmVuIE1pdG9jb25kcmlhcw","VGllbmVuIENyb21vc29tYXM","VGllbmVuIFBhcmVkIENlbHVsYXI"],["UHJvY2FyaW90YQ","MQ","MA","MQ","MA","MA","MQ","MQ"],["RXVjYXJpb3Rh","MQ","MQ","MQ","MQ","MQ","MQ","MQ"]];
var a3Cell=[["Q2FyYWN0ZXLtc3RpY2E","VGllbmVuIENpdG9wbGFzbWE","VGllbmVuIENsb3JvcGxhc3Rvcw","VGllbmVuIE1lbWJyYW5h","VGllbmVuIE51Y2xlbw","VGllbmVuIE1pdG9jb25kcmlhcw","VGllbmVuIENyb21vc29tYXM","VGllbmVuIFBhcmVkIENlbHVsYXI"],["UHJvY2FyaW90YQ","MQ","MA","MQ","MA","MA","MQ","MQ"],["RXVjYXJpb3Rh","MQ","MQ","MQ","MQ","MQ","MQ","MQ"]];
var wordsGame="UHJvY2FyaW9udGVWc0V1Y2FyaW9udGUwMA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cols=3; var rows=8;var showC=true;
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
