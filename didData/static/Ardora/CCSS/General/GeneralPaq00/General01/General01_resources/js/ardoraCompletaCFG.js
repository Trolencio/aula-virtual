//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=26; attempts=0; attemptsMax=1;
var score=0; scoreMax=26; scoreInc=1; scoreDec=1
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
var indexTXT=0; var txtC=['<img class="imaLeft" src="General01_resources/media/cuneiforme.jpg" alt="Ima"  align="left"><p>Alrededor del 3300AC, los pueblos inventaron un sistema de <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly>. Esto les permitió llevar <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly> propios de las ciudades. Entonces empezaron a registrar: nombres de los <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly>, impuestos <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly>, <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly>. Así comenzó la <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly>.</p>','<img class="imaLeft" src="General01_resources/media/comercio02.jpg" alt="Ima"  align="left"><p>Factores que influyeron en el origen de las civilizaciones. </p><p> - El descubrimiento de la <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly> y la domesticación de <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly>. </p><p> - El nacimiento de <input type="text" name="item9" id="item9" class="ardoraDropInput" readonly>. </p><p> - El desarrollo del <input type="text" name="item10" id="item10" class="ardoraDropInput" readonly>. </p><p> - La centralización del <input type="text" name="item11" id="item11" class="ardoraDropInput" readonly> político-religioso en un rey-sacerdote poderoso. </p><p> - La creación de un <input type="text" name="item12" id="item12" class="ardoraDropInput" readonly> permanente.</p>','<img class="imaLeft" src="General01_resources/media/summer.jpg" alt="Ima"  align="left"><p>las primeras <input type="text" name="item13" id="item13" class="ardoraDropInput" readonly> de la historia se desarrollaron en egipto, mesopotamia y china  hace aproximadamente 5000 años </p><p> Reciben el nombre de Civilizaciones <input type="text" name="item14" id="item14" class="ardoraDropInput" readonly> agricolas porque surgieron en torno a grandes <input type="text" name="item15" id="item15" class="ardoraDropInput" readonly> con orillas muy <input type="text" name="item16" id="item16" class="ardoraDropInput" readonly>. </p><p> Todas reciben el nombre de civilizaciones fluviales porque se desarrollaron a la orilla de grandes ríos: el Tigris y el Eúfrates en <input type="text" name="item17" id="item17" class="ardoraDropInput" readonly>; el Nilo en <input type="text" name="item18" id="item18" class="ardoraDropInput" readonly>; el Indo en la  civilización <input type="text" name="item19" id="item19" class="ardoraDropInput" readonly>; y el río Amarillo en <input type="text" name="item20" id="item20" class="ardoraDropInput" readonly>.</p>','<img class="imaLeft" src="General01_resources/media/civiliz01.jpg" alt="Ima"  align="left"><p>Las orillas de estos ríos estaban ocupadas por <input type="text" name="item21" id="item21" class="ardoraDropInput" readonly> muy fértiles y fáciles de <input type="text" name="item22" id="item22" class="ardoraDropInput" readonly>, lo que provocó un gran desarrollo  de la <input type="text" name="item23" id="item23" class="ardoraDropInput" readonly>. El crecimiento económico produjo grandes cambios; la <input type="text" name="item24" id="item24" class="ardoraDropInput" readonly> aumentó y las hasta entonces pequeñas <input type="text" name="item25" id="item25" class="ardoraDropInput" readonly> crecieron hasta convertirse en grandes <input type="text" name="item26" id="item26" class="ardoraDropInput" readonly> con varios miles de habitantes.</p>'];
var answers=["agricultura","india","pagados","civilizaciones","ríos","escritura","fértiles","Mesopotamia","fluviales","población","bienes","aldeas","poder","ciudades","Egipto","China","agricultura","registros","tierras","regar","habitantes","historia","animales","ciudades","comercio","ejército"];
var a=["MjM","MTk","NA","MTM","MTU","MQ","MTY","MTc","MTQ","MjQ","NQ","MjU","MTE","MjY","MTg","MjA","Nw","Mg","MjE","MjI","Mw","Ng","OA","OQ","MTA","MTI"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","","","","","","","","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="R2VuZXJhbDAx"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#5E651F";colorBack="#FEFEF0";colorSele="#EAD77E";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
