//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=9; attempts=0; attemptsMax=1;
var score=0; scoreMax=9; scoreInc=1; scoreDec=1
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
var indexTXT=0; var txtC=['<img class="imaLeft" src="CompleteGeneral08_resources/media/liquenes01.jpg" alt="Ima"  align="left"><p>LIQUENES </p><p> Son organismos extraños constituidos por <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly>, son seres dobles, que contienen cada uno alga y más hongo, ambos componentes viven juntos, son el resultado de la <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly> de un alga y un hongo. El alga propociona <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly> al hongo y a su vez este la <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly> de la deshidratación.</p>','<img class="imaLeft" src="CompleteGeneral08_resources/media/liquenes02.jpg" alt="Ima"  align="left"><p>LIQUENES </p><p> Gracias al alga, los lìquenes son <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly>. </p><p> Tradicionalmente se ha considerado que los líquenes son un ejemplo de <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly>: el alaga realiza la <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly>, produciendo alimento para <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly> simbiontes; a cambio obtienen agua y minerales a partir de <input type="text" name="item9" id="item9" class="ardoraDropInput" readonly>.</p>'];
var answers=["alimento","autotrofos","ambos","simbiosis","hongo","fotosíntesis","protege","mutualismo","algas y hongos"];
var a=["Mw","NQ","OA","Mg","OQ","Nw","NA","Ng","MQ"];
var itemCorr=["0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="Q29tcGxldGVHZW5lcmFsMDg"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
