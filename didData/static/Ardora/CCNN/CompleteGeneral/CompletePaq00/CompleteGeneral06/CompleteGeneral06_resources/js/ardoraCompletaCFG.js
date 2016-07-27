//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1
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
var indexTXT=0; var txtC=['<img class="imaLeft" src="CompleteGeneral06_resources/media/algas00.jpg" alt="Ima"  align="left"><p>BENEFICIOS </p><p> Las <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly> producen grandes cantidades de oxígeno. Este compuesto es necesario para la vida en el <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly>.  </p><p> Algunos Protozoarios, sirven de <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly> a otros animales pequeños.  </p><p> Otros secretan sustancias minerales que llegan a formar depósitos en los mares formando la <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly> y el Pedernal, de uso INDUSTRIAL.</p>','<img class="imaLeft" src="CompleteGeneral06_resources/media/piramide00.jpg" alt="Ima"  align="left"><p>Hay Protistas que ayudan al ganado vacuno en la <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly> de los alimentos y a las <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly> les permiten digerir la madera que comen.  </p><p> Han existido especies de Protozoos, dentro de la Clase de los Rizopodarios, como los NUMMULITES, cuyas cáscaras calcáreas acumuladas en grandes cantidades a través de los años, constituyeron la <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly> utilizada en la construcción de las Pirámides de <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly>.</p>','<img class="imaLeft" src="CompleteGeneral06_resources/media/sarro00.jpg" alt="Ima"  align="left"><p>La AMIBA PROTEUS, que actúa como saprófaga en el sarro de los <input type="text" name="item9" id="item9" class="ardoraDropInput" readonly>.  </p><p> La AMIBA COLI, que actúa como saprófaga en el <input type="text" name="item10" id="item10" class="ardoraDropInput" readonly> grueso del hombre.</p>'];
var answers=["alimento","Piedra Caliza","MASA CALCÁREA","digestión","Termitas","Egipto","dientes","Intestino","Algas Verdes","Planeta"];
var a=["Mw","NA","Nw","NQ","Ng","OA","OQ","MTA","MQ","Mg"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="Q29tcGxldGVHZW5lcmFsMDY"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
