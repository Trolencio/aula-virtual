//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=24; attempts=0; attemptsMax=1;
var score=0; scoreMax=24; scoreInc=1; scoreDec=1
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
var indexTXT=0; var txtC=['<img class="imaLeft" src="CompleteGeneral05_resources/media/malaria00.jpg" alt="Ima"  align="left"><p>Malaria </p><p> Esta enfermedad está causada por el <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly> Plasmodium. Si el mosquito pica a un ser humano, los microorganismos <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly> migran desde la saliva del animal al <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly>. Allí se provoca una división crucial <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly>, que consigue invadir la <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly> de este. </p><p> Una vez incubada los síntomas que se podrían originar son: <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly> general; Cefalea; Cansancio muy intenso; Molestias <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly>; <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly> musculares; <input type="text" name="item9" id="item9" class="ardoraDropInput" readonly>; Escalofrios.</p>','<img class="imaLeft" src="CompleteGeneral05_resources/media/Descubren_una_vacuna_contra_la_malaria.jpg" alt="Ima"  align="left"><p>La Malaria se transmite por: </p><p>  </p><p> Principalmente por la picadura del mosquito <input type="text" name="item10" id="item10" class="ardoraDropInput" readonly>, que es la hembra infectada y portadora del protozoario PLASMODIUM en su <input type="text" name="item11" id="item11" class="ardoraDropInput" readonly>. </p><p>  </p><p> <input type="text" name="item12" id="item12" class="ardoraDropInput" readonly> de sangre. </p><p>  </p><p> Jeringuillas <input type="text" name="item13" id="item13" class="ardoraDropInput" readonly>.</p>','<img class="imaLeft" src="CompleteGeneral05_resources/media/amibiasis00.jpg" alt="Ima"  align="left"><p>Amibiasis </p><p> Esta enfermedad está causada por el <input type="text" name="item14" id="item14" class="ardoraDropInput" readonly> Entamoeba Histlyca. </p><p> En el ser humano existen siete tipos de amibas que se alojan en el intestino <input type="text" name="item15" id="item15" class="ardoraDropInput" readonly>. </p><p> Es más recurrente en jóvenes y adultos con <input type="text" name="item16" id="item16" class="ardoraDropInput" readonly> defensas. Principalmente por la deshidratación que ocasiona, que puede llevar a la <input type="text" name="item17" id="item17" class="ardoraDropInput" readonly> del paciente. </p><p> Los síntomas de la Amibiasis son: Cólicos; Diarrea; Fatiga; <input type="text" name="item18" id="item18" class="ardoraDropInput" readonly> excesiva; Dolor rectal durante la <input type="text" name="item19" id="item19" class="ardoraDropInput" readonly> (tenesmo); Pérdida de <input type="text" name="item20" id="item20" class="ardoraDropInput" readonly>.</p>','<img class="imaLeft" src="CompleteGeneral05_resources/media/amibiasis00.jpg" alt="Ima"  align="left"><p>La Amibiasis Se transmite por: </p><p>  </p><p> Agua o alimentos contaminados con <input type="text" name="item21" id="item21" class="ardoraDropInput" readonly>. Por ejemplo al utilizar excrementos humanos como <input type="text" name="item22" id="item22" class="ardoraDropInput" readonly>. </p><p>  </p><p> De una persona a otra por contacto con el área <input type="text" name="item23" id="item23" class="ardoraDropInput" readonly> de una persona que haya sido <input type="text" name="item24" id="item24" class="ardoraDropInput" readonly>.</p>'];
var answers=["bajas","Dolores","múltiple","hígado","sangre","saliva","Malestar","Flatulencia","muerte","infectadas","defecación","abdominales","Fiebre","delgado","peso","Anoplales","Transfusiones","heces","fertilizantes","bucal o rectal","protozoario","infectada","protozoo","patógenos"];
var a=["MTY","OA","NA","Mw","NQ","MTE","Ng","MTg","MTc","MTM","MTk","Nw","OQ","MTU","MjA","MTA","MTI","MjE","MjI","MjM","MTQ","MjQ","MQ","Mg"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","","","","","","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="Q29tcGxldGVHZW5lcmFsMDU"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
