//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=13; attempts=0; attemptsMax=1;
var score=0; scoreMax=13; scoreInc=1; scoreDec=1
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
var indexTXT=0; var txtC=['<img class="imaLeft" src="CompleteGeneral15_resources/media/bacteriofago00.jpg" alt="Ima"  align="left"><p>infeccion viral: Es el término utilizado para describir el ciclo de <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly> de los virus. Este consta generalmente de las siguientes fases: fijación y entrada en la célula, eclipse, multiplicación y liberación del virus. Los virus son formas <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly> que no pueden reproducirse por <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly> en el exterior; para ello requieren introducirse en células donde controlarán sus <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly> reproductivos.</p>','<img class="imaLeft" src="CompleteGeneral15_resources/media/CICLOBACTERIOFAGO.jpg" alt="Ima"  align="left"><p>FASES </p><p>  </p><p> Fijación: El virus se adhiere a la membrana de la <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly> </p><p>  </p><p> Entrada en la célula: producen una <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly> en la membrana celular del hospedador en uno de los puntos de anclaje.  A través de la rotura, el tubo central <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly> el ADN vírico</p>','<img class="imaLeft" src="CompleteGeneral15_resources/media/ciclolitico01.jpg" alt="Ima"  align="left"><p>FASES (Continuación) </p><p> Eclipse: el ácido nucleico vírico procede inmediatamente a la <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly> de su mensaje genético en los ARN necesarios para su multiplicación, y prosigue rápidamente el ciclo vital </p><p> La multiplicación del virus consta de la <input type="text" name="item9" id="item9" class="ardoraDropInput" readonly> de su material genético, de la <input type="text" name="item10" id="item10" class="ardoraDropInput" readonly> de su mensaje en una molécula de ARN y de la <input type="text" name="item11" id="item11" class="ardoraDropInput" readonly> del mensaje para producir proteínas víricas </p><p> Liberación: Después de la multiplicación del virus tiene lugar la salida de los <input type="text" name="item12" id="item12" class="ardoraDropInput" readonly>, que saldrán con capacidad de <input type="text" name="item13" id="item13" class="ardoraDropInput" readonly> nuevas células.</p>'];
var answers=["célula","transcripción","acelulares","si mismos","nuevos individuos","inyecta","mecanismos","replicación","transcripción","infectar","reproducción","traducción","ruptura"];
var a=["NQ","OA","Mg","Mw","MTI","Nw","NA","OQ","MTA","MTM","MQ","MTE","Ng"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="Q29tcGxldGVHZW5lcmFsMTU"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
