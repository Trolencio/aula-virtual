//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=19; attempts=0; attemptsMax=1;
var score=0; scoreMax=19; scoreInc=1; scoreDec=1
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
var indexTXT=0; var txtC=['<img class="imaLeft" src="Mesopotamia04_resources/media/math.jpg" alt="Ima"  align="left"><p>MATEMATICAS. El cálculo floreció en Mesopotamia mediante un sistema de numeración <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly> y sistema <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly>, cuya primera aplicación fue en el <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly>. Además de la <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly> conocían la multiplicación y la división.</p>','<img class="imaLeft" src="Mesopotamia04_resources/media/geometria01.jpg" alt="Ima"  align="left"><p>A partir del II milenio a. C. desarrollaron una matemática que permitía resolver <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly> hasta de tercer grado. Conocían asimismo un valor aproximado del número π, de <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly>, y eran capaces de calcular <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly> y superficies de las principales figuras <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly>.</p>','<img class="imaLeft" src="Mesopotamia04_resources/media/leyes.jpg" alt="Ima"  align="left"><p>LAS LEYES:  Son creadores de tratados legales, el rey <input type="text" name="item9" id="item9" class="ardoraDropInput" readonly>, escribe el llamado \"Código de Hammurabi\", todo un tratado de <input type="text" name="item10" id="item10" class="ardoraDropInput" readonly>, donde explica como se debe <input type="text" name="item11" id="item11" class="ardoraDropInput" readonly> en caso de delitos</p>','<img class="imaLeft" src="Mesopotamia04_resources/media/irrigacion.jpg" alt="Ima"  align="left"><p>CULTURA HIDRÁULICA: Ellos comenzaran a <input type="text" name="item12" id="item12" class="ardoraDropInput" readonly> a otros culturas posteriores la importancia del <input type="text" name="item13" id="item13" class="ardoraDropInput" readonly>. Los ríos Tigris y Eufrates serán los <input type="text" name="item14" id="item14" class="ardoraDropInput" readonly> de esta civilización, en torno a ellos crecen los <input type="text" name="item15" id="item15" class="ardoraDropInput" readonly>, se hacen <input type="text" name="item16" id="item16" class="ardoraDropInput" readonly> y producen <input type="text" name="item17" id="item17" class="ardoraDropInput" readonly> para vivir y comerciar. De hecho son los primeros <input type="text" name="item18" id="item18" class="ardoraDropInput" readonly> que realizan <input type="text" name="item19" id="item19" class="ardoraDropInput" readonly> caravaneras para intercambiar sus productos.</p>'];
var answers=["agua","protagonistas","cultivos","Hammurabi","enseñar","excedentes","derecho","geométricas","sedentarios","ecuaciones","la raíz y la potencia","comerciantes","actuar","rutas","decimal","sexagesimal","comercio","suma y resta","volúmenes"];
var a=["MTM","MTQ","MTU","OQ","MTI","MTc","MTA","OA","MTY","NQ","Ng","MTg","MTE","MTk","MQ","Mg","Mw","NA","Nw"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="TWVzb3BvdGFtaWEwNA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#5E651F";colorBack="#FEFEF0";colorSele="#EAD77E";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
