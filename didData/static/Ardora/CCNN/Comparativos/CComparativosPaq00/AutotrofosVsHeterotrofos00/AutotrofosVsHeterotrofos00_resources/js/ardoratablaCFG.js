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
var d=[[0,0,0,0,0],[0,1,1,1,1,1],[0,1,1,1,1,1]];
var vCell=[["4","0","0","0","0","0"],["0","2","2","2","2","2"],["0","2","2","2","2","2"]];
var a0Cell=[["Mg","VG9tYW4gbWF0ZXJpYSBpbm9yZ2FuaWNhIGRlbCBleHRlcmlvcg","VG9tYW4gbWF0ZXJpYSBvcmdhbmljYSBkZWwgZXh0ZXJpb3I","UHJvZHVjZW4gbWF0ZXJpYSBvcmfhbmljYSBhIHBhcnRpciBkZSBtYXRlcmlhIGlub3Jn4W5pY2E","VXNhbiBlbmVyZ+1hIHNvbGFyIHBhcmEgcHJvZHVjaXIgbWF0ZXJpYSBvcmfhbmljYQ","VXNhbiBlbmVyZ+1hIHF17W1pY2EgYWN1bXVsYWRhIGVuIGxhIG1hdGVyaWEgb3Jn4W5pY2E"],["QXV083Ryb2Zvcw","MQ","MA","MQ","MQ","MQ"],["SGV0ZXLpdHJvZm9z","MQ","MQ","MA","MA","MQ"]];
var c=[[0,37,35,56,49,53],[10,1,1,1,1,1],[12,1,1,1,1,1]];
var c1=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
var c2=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
var c3=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
var a1Cell=[["","VG9tYW4gbWF0ZXJpYSBpbm9yZ2FuaWNhIGRlbCBleHRlcmlvcg","VG9tYW4gbWF0ZXJpYSBvcmdhbmljYSBkZWwgZXh0ZXJpb3I","UHJvZHVjZW4gbWF0ZXJpYSBvcmfhbmljYSBhIHBhcnRpciBkZSBtYXRlcmlhIGlub3Jn4W5pY2E","VXNhbiBlbmVyZ+1hIHNvbGFyIHBhcmEgcHJvZHVjaXIgbWF0ZXJpYSBvcmfhbmljYQ","VXNhbiBlbmVyZ+1hIHF17W1pY2EgYWN1bXVsYWRhIGVuIGxhIG1hdGVyaWEgb3Jn4W5pY2E"],["QXV083Ryb2Zvcw","MQ","MA","MQ","MQ","MQ"],["SGV0ZXLpdHJvZm9z","MQ","MQ","MA","MA","MQ"]];
var a2Cell=[["","VG9tYW4gbWF0ZXJpYSBpbm9yZ2FuaWNhIGRlbCBleHRlcmlvcg","VG9tYW4gbWF0ZXJpYSBvcmdhbmljYSBkZWwgZXh0ZXJpb3I","UHJvZHVjZW4gbWF0ZXJpYSBvcmfhbmljYSBhIHBhcnRpciBkZSBtYXRlcmlhIGlub3Jn4W5pY2E","VXNhbiBlbmVyZ+1hIHNvbGFyIHBhcmEgcHJvZHVjaXIgbWF0ZXJpYSBvcmfhbmljYQ","VXNhbiBlbmVyZ+1hIHF17W1pY2EgYWN1bXVsYWRhIGVuIGxhIG1hdGVyaWEgb3Jn4W5pY2E"],["QXV083Ryb2Zvcw","MQ","MA","MQ","MQ","MQ"],["SGV0ZXLpdHJvZm9z","MQ","MQ","MA","MA","MQ"]];
var a3Cell=[["","VG9tYW4gbWF0ZXJpYSBpbm9yZ2FuaWNhIGRlbCBleHRlcmlvcg","VG9tYW4gbWF0ZXJpYSBvcmdhbmljYSBkZWwgZXh0ZXJpb3I","UHJvZHVjZW4gbWF0ZXJpYSBvcmfhbmljYSBhIHBhcnRpciBkZSBtYXRlcmlhIGlub3Jn4W5pY2E","VXNhbiBlbmVyZ+1hIHNvbGFyIHBhcmEgcHJvZHVjaXIgbWF0ZXJpYSBvcmfhbmljYQ","VXNhbiBlbmVyZ+1hIHF17W1pY2EgYWN1bXVsYWRhIGVuIGxhIG1hdGVyaWEgb3Jn4W5pY2E"],["QXV083Ryb2Zvcw","MQ","MA","MQ","MQ","MQ"],["SGV0ZXLpdHJvZm9z","MQ","MQ","MA","MA","MQ"]];
var wordsGame="QXV0b3Ryb2Zvc1ZzSGV0ZXJvdHJvZm9zMDA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cols=3; var rows=6;var showC=true;
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
