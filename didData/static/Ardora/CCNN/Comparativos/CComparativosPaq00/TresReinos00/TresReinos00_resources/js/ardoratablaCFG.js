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
var timeOnMessage=2; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var d=[[0,0,0,0,0,0,0],[0,1,1,1,1,1,1],[0,1,1,1,1,1,1],[0,1,1,1,1,1,1]];
var vCell=[["0","0","0","0","0","0","0"],["0","3","3","3","3","3","3"],["0","3","3","3","3","3","3"],["0","3","3","3","3","3","3"]];
var a0Cell=[["Q2FyYWN0ZXLtc3RpY2E","VGlwbyBkZSBD6Wx1bGFz","QURO","TrAgZGUgQ+lsdWxhcw","TnV0cmljafNu","RW5lcmftYSBxdWUgVXRpbGl6YW4","UmVwcm9kdWNjafNu"],["TU9ORVJB","UHJvY2FyaW90YXM","Q2lyY3VsYXI","VW5pY2VsdWxhcg","QXV083Ryb2Zvcw","UXXtbWljYTsgTHVtaW5vc2E","QXNleHVhbA"],["UFJPVE9DVElTVEE","RXVjYXJpb3Rhcw","TGluZWFs","VW5pY2VsdWxhcjsgUGx1cmljZWx1bGFy","SGV0ZXLzdHJvZm9zOyBBdXTzdHJvZm9z","UXXtbWljYTsgTHVtaW5vc2E","QXNleHVhbDsgU2V4dWFs"],["RlVOR0k","RXVjYXJpb3Rhcw","TGluZWFs","VW5pY2VsdWxhcjsgUGx1cmljZWx1bGFy","SGV0ZXLzdHJvZm9z","UXXtbWljYQ","QXNleHVhbDsgU2V4dWFs"]];
var c=[[14,15,3,13,9,20,12],[6,11,8,10,10,17,7],[11,10,6,24,24,17,15],[5,10,6,24,12,7,15]];
var c1=[[0,0,0,0,0,0,0],[0,10,6,12,12,7,6],[0,11,8,10,12,8,7],[0,11,8,10,10,8,6]];
var c2=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,12,10,0,0],[0,0,0,12,0,0,0]];
var c3=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
var a1Cell=[["Q2FyYWN0ZXLtc3RpY2E","VGlwbyBkZSBD6Wx1bGFz","QURO","TrAgZGUgQ+lsdWxhcw","TnV0cmljafNu","RW5lcmftYSBxdWUgVXRpbGl6YW4","UmVwcm9kdWNjafNu"],["TU9ORVJB","RXVjYXJpb3Rhcw","TGluZWFs","UGx1cmljZWx1bGFy","SGV0ZXLzdHJvZm9z","UXXtbWljYQ","U2V4dWFs"],["UFJPVE9DVElTVEE","UHJvY2FyaW90YXM","Q2lyY3VsYXI","VW5pY2VsdWxhcg","SGV0ZXLzdHJvZm9z","THVtaW5vc2E","QXNleHVhbA"],["RlVOR0k","UHJvY2FyaW90YXM","Q2lyY3VsYXI","VW5pY2VsdWxhcg","QXV083Ryb2Zvcw","THVtaW5vc2E","U2V4dWFs"]];
var a2Cell=[["Q2FyYWN0ZXLtc3RpY2E","VGlwbyBkZSBD6Wx1bGFz","QURO","TrAgZGUgQ+lsdWxhcw","TnV0cmljafNu","RW5lcmftYSBxdWUgVXRpbGl6YW4","UmVwcm9kdWNjafNu"],["TU9ORVJB","UHJvY2FyaW90YXM","Q2lyY3VsYXI","VW5pY2VsdWxhcg","QXV083Ryb2Zvcw","UXXtbWljYTsgTHVtaW5vc2E","QXNleHVhbA"],["UFJPVE9DVElTVEE","RXVjYXJpb3Rhcw","TGluZWFs","UGx1cmljZWx1bGFy","QXV083Ryb2Zvcw","UXXtbWljYTsgTHVtaW5vc2E","QXNleHVhbDsgU2V4dWFs"],["RlVOR0k","RXVjYXJpb3Rhcw","TGluZWFs","UGx1cmljZWx1bGFy","SGV0ZXLzdHJvZm9z","UXXtbWljYQ","QXNleHVhbDsgU2V4dWFs"]];
var a3Cell=[["Q2FyYWN0ZXLtc3RpY2E","VGlwbyBkZSBD6Wx1bGFz","QURO","TrAgZGUgQ+lsdWxhcw","TnV0cmljafNu","RW5lcmftYSBxdWUgVXRpbGl6YW4","UmVwcm9kdWNjafNu"],["TU9ORVJB","UHJvY2FyaW90YXM","Q2lyY3VsYXI","VW5pY2VsdWxhcg","QXV083Ryb2Zvcw","UXXtbWljYTsgTHVtaW5vc2E","QXNleHVhbA"],["UFJPVE9DVElTVEE","RXVjYXJpb3Rhcw","TGluZWFs","VW5pY2VsdWxhcjsgUGx1cmljZWx1bGFy","SGV0ZXLzdHJvZm9zOyBBdXTzdHJvZm9z","UXXtbWljYTsgTHVtaW5vc2E","QXNleHVhbDsgU2V4dWFs"],["RlVOR0k","RXVjYXJpb3Rhcw","TGluZWFs","VW5pY2VsdWxhcjsgUGx1cmljZWx1bGFy","SGV0ZXLzdHJvZm9z","UXXtbWljYQ","QXNleHVhbDsgU2V4dWFs"]];
var wordsGame="VHJlc1JlaW5vczAw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cols=4; var rows=7;var showC=true;
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
