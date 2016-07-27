//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=37; attempts=0; attemptsMax=1;
var score=0; scoreMax=37; scoreInc=1; scoreDec=1
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
var fActi="'Arial Black', Gadget, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Actividad Finalizada"; messageTime=""; messageError="Intenta Nuevamente"; messageErrorG="Intenta Nuevamente"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["YWJhY28","YWN1cHVudHVyYQ","ZnVuZGljafNuIGRlbCBicm9uY2U","YnL6anVsYQ","dXNvIGRlbCBjYXJi824","aW1wcmVudGE","bWVkaWNpbmEgbmF0dXJhbA","TXVyYWxsYSBDaGluYQ","cGFnb2Rh","cGFwZWw","cPNsdm9yYQ","cG9yY2VsYW5h","cmVsb2ogZGUgc29tYnJh","c2VkYQ","YmFsYW56YQ","c2lzdGVtYSBkZWNpbWFs","bGFtcGFyYXMgZGUgYWNlaXRl","bW9taWZpY2FjaW9u","cGxvbWFkYQ","cG9sZWE","c2llcnJhIGRlIG1ldGFs","dGFsYWRybyBkZSBhcmNv","dGVqaWRvcyBkZSBsaW5v","dmlkcmlv","cGlyYW1pZGVz","YXJhZG8","Ym90ZSB5IHZlbGE","Ym92ZWRh","Y+FsY3VsbyBtYXRlbeF0aWNv","Y2FsZW5kYXJpbyBsdW5hcg","ZXNjcml0dXJhIGN1bmVpZm9ybWU","Z2VvbWV0cu1h","aXJyaWdhY2nzbiBhcnRpZmljaWFs","cHJpbWVyYXMgbGV5ZXM","c2lzdGVtYSBzZXhhZ2VzaW1hbA","bWV0YWx1cmdpYQ","bW9uZWRh"];
var img_G=["abaco.jpg","acupuntura.jpg","broce.jpg","brujula.jpg","carbon.jpg","imprenta.jpg","medicina00.jpg","muralla.jpg","pagoda.jpg","papel.jpg","polvora.jpg","porcelana.jpg","relojsombra.jpg","seda.jpg","balanza.jpg","decimal.jpg","lamparas.jpg","momificacion.jpg","plomada.jpg","polea.jpg","sierra.jpg","taladrodearco.jpg","telaregipcio.jpg","vidriosoplado.jpg","piramides.jpg","arado01.jpg","botevela.jpg","boveda.jpg","calculo02.jpg","calendario.jpg","escritura.jpg","geometria01.jpg","irrigacion.jpg","leyes.jpg","sexagesimal.jpg","metalurgia.jpg","moneda.jpg"];
var mp3_G=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var ogg_G=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var n_G=["MQ","MQ","MQ","MQ","MQ","MQ","MQ","MQ","MQ","MQ","MQ","MQ","MQ","MQ","Mw","Mw","Mw","Mw","Mw","Mw","Mw","Mw","Mw","Mw","Mw","Mg","Mg","Mg","Mg","Mg","Mg","Mg","Mg","Mg","Mg","Mg","Mg"];
var e_G=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var txtGr=["China","Mesopotamia","Egipto"];
var imgGr=["china00.jpg","mesopotamia00.jpg","egipto00.jpg"];
var mp3Gr=["","",""];
var oggGr=["","",""];
var ram_G=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
var messageErrorG="Intenta Nuevamente";
var dirMedia="Legado00_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="TGVnYWRvMDA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
