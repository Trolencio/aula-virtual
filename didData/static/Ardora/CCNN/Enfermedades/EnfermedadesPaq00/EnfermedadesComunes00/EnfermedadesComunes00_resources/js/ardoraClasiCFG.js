//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=29; attempts=0; attemptsMax=1;
var score=0; scoreMax=29; scoreInc=1; scoreDec=1
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
var txt_G=["Q/NsZXJh","VGV0YW5vcw","VG9zIEZlcmluYQ","QW1pYmlhc2lz","TWFsYXJpYQ","TWljb3Npcw","Um95YQ","R3JpcGU","UmFiaWE","TW9zYWljbw","Qm90dWxpc21v","TGVwcmE","TmV1bW9u7WEgQmFjdGVyaWFuYQ","VG94b3BsYXNtb3Npcw","RW5mZXJtZWRhZCBkZWwgU3Vl8W8","Q3J5cHRvc3BvcmlkaXVt","R2FzdHJvZW50ZXJpdGlzIHZpcmFs","VHJpY29zcG9yb25vc2lz","Q29uanVudGl2aXRpcyBWaXJhbA","SGVycGVzIGxhYmlhbA","VmFyaWNlbGE","RGVuZ3Vl","RmllYnJlIGFtYXJpbGxh","U2lkYQ","VmVycnVnYXM","SGVwYXRpdGlz","Q2FuY2Vy","UG9saW8","Q2l0b21lZ2Fsb3ZpcnVz"];
var img_G=["colera00.jpg","tetano00.jpg","tosferina.jpg","amibiasis00.jpg","malaria00.jpg","micosis00.jpg","roya00.jpg","gripe01.jpg","rabia04.jpg","mosaico02.jpg","botulismo00.jpg","lepra.jpg","neumonia00.jpg","toxo00.jpg","suenio.jpg","cryptosporidium.jpg","Gastroenteritis.jpg","Tricosporonosis.jpg","Conjuntivitis.jpg","Herpes.jpg","Varicela.jpg","Dengue.jpg","AmarillaF.jpg","sida.jpg","verrugas.jpg","Hepatitis.jpg","Cancer.jpg","Polio.jpg","Citomegalovirus.jpg"];
var mp3_G=["","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var ogg_G=["","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var n_G=["Mg","Mg","Mg","Mw","Mw","NA","NA","MQ","MQ","MQ","Mg","Mg","Mg","Mw","Mw","Mw","MQ","NA","MQ","MQ","MQ","MQ","MQ","MQ","MQ","MQ","MQ","MQ","MQ"];
var e_G=["","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var txtGr=["Virus","Bacterias","Protista","Hongos"];
var imgGr=["virus01.jpg","bacteriapeligrosa00.jpg","protistasclasificacion01.jpg","Fungi00.jpg"];
var mp3Gr=["","","",""];
var oggGr=["","","",""];
var ram_G=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
var messageErrorG="Intenta Nuevamente";
var dirMedia="EnfermedadesComunes00_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="RW5mZXJtZWRhZGVzQ29tdW5lczAw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
