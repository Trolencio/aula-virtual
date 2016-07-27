//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=14; attempts=0; attemptsMax=1;
var score=0; scoreMax=14; scoreInc=1; scoreDec=1
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
var indexTXT=0; var txtC=['<img class="imaLeft" src="TestMetales04_resources/media/dolmen00.jpg" alt="Ima"  align="left"><p>La principal manifestación artística de la Edad de los Metales fueron los llamados - monumentos <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly>.  </p><p> Megalito significa <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly>.  </p><p> Los monumentos megalíticos fueron construcciones  formadas por grandes bloques de piedra que fueron utilizadas como <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly> colectivas o <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly> religiosos.</p>','<img class="imaLeft" src="TestMetales04_resources/media/megalit02.jpg" alt="Ima"  align="left"><p>MENHIR, o piedra <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly> en el suelo, con una función conmemorativa o territorial. </p><p> DOLMEN, varias piedras <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly> sostienen otra <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly>, como sepulcro colectivo. </p><p> CRÓMLECH, círculos <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly> de piedras, como lugares de culto. </p><p> SEPULCRO DE CORREDOR, variedad del dolmen con un <input type="text" name="item9" id="item9" class="ardoraDropInput" readonly> que antecede a la cámara propiamente dicha, y con la misma función.</p>','<img class="imaLeft" src="TestMetales04_resources/media/megalit02.jpg" alt="Ima"  align="left"><p><input type="text" name="item10" id="item10" class="ardoraDropInput" readonly>, o piedra hincada en el suelo, con una función conmemorativa o territorial. </p><p> <input type="text" name="item11" id="item11" class="ardoraDropInput" readonly>, varias piedras verticales sostienen otra horizontal, como sepulcro colectivo. </p><p> <input type="text" name="item12" id="item12" class="ardoraDropInput" readonly>, círculos concéntricos de piedras, como lugares de culto. </p><p> <input type="text" name="item13" id="item13" class="ardoraDropInput" readonly>, variedad del dolmen con un pasillo que antecede a la cámara propiamente dicha, y con la misma función. </p><p> Son tipos de monumentos <input type="text" name="item14" id="item14" class="ardoraDropInput" readonly></p>'];
var answers=["verticales","hincada","DOLMEN","tumbas","santuarios","piedra enorme","concéntricos","horizontal","pasillo","MENHIR","CRÓMLECH","SEPULCRO DE CORREDOR","megalíticos","megalíticos"];
var a=["Ng","NQ","MTE","Mw","NA","Mg","OA","Nw","OQ","MTA","MTI","MTM","MTQ","MQ"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="VGVzdE1ldGFsZXMwNA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
