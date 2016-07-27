//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=18; attempts=0; attemptsMax=1;
var score=0; scoreMax=18; scoreInc=1; scoreDec=1
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
var indexTXT=0; var txtC=['<img class="imaLeft" src="CompleteGeneral14_resources/media/virus05.jpg" alt="Ima"  align="left"><p>Caracterísicas de los Virus: </p><p> No tienen <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly> celular. </p><p> No realizan las <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly> de nutrición y relación. </p><p> Son capaces de <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly>; pero para reproducirse, necesitan los mecanismos <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly> de una célula. </p><p> Pueden <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly>.</p>','<img class="imaLeft" src="CompleteGeneral14_resources/media/CICLOBACTERIOFAGO.jpg" alt="Ima"  align="left"><p>CICLO LITICO: </p><p> Se trata de un proceso en el cual el <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly> penetra en el interior de una <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly> y utiliza su <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly> para formar nuevas partículas <input type="text" name="item9" id="item9" class="ardoraDropInput" readonly>.</p>','<img class="imaLeft" src="CompleteGeneral14_resources/media/ciclolitico01.jpg" alt="Ima"  align="left"><p>El ciclo lítico se denomina así porque la célula infectada por un virus <input type="text" name="item10" id="item10" class="ardoraDropInput" readonly> por <input type="text" name="item11" id="item11" class="ardoraDropInput" readonly> (lisis en griego), al <input type="text" name="item12" id="item12" class="ardoraDropInput" readonly> las nuevas copias virales. El ciclo lítico es el principalmétodo de <input type="text" name="item13" id="item13" class="ardoraDropInput" readonly> viral e involucra la <input type="text" name="item14" id="item14" class="ardoraDropInput" readonly> de células <input type="text" name="item15" id="item15" class="ardoraDropInput" readonly>. </p><p> Aunque el término lítico alude al proceso de <input type="text" name="item16" id="item16" class="ardoraDropInput" readonly> con el que terminan muchos ciclos, no todos acaban así, ya que en muchos casos se produce una <input type="text" name="item17" id="item17" class="ardoraDropInput" readonly> paulatina de virus durante la cual la célula <input type="text" name="item18" id="item18" class="ardoraDropInput" readonly>.</p>'];
var answers=["víricas","reproducirse","metabólicos","funciones","estructura","evolucionar","ROTURA","virión","liberación","célula","maquinaria","sobrevive","destrucción","muere","liberarse","reproducción","infectadas","lisis celular"];
var a=["OQ","Mw","NA","Mg","MQ","NQ","MTE","Ng","MTc","Nw","OA","MTg","MTQ","MTA","MTI","MTM","MTU","MTY"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="Q29tcGxldGVHZW5lcmFsMTQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
