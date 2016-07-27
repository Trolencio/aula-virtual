//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=34; attempts=0; attemptsMax=1;
var score=0; scoreMax=34; scoreInc=1; scoreDec=1
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
var timeOnMessage=2; messageOk="Fin"; messageTime=""; messageError="Error"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<img class="imaLeft" src="Egipto03_resources/media/mapaEgipto01.jpg" alt="Ima"  align="left"><p>su HISTORIA puede dividirse en cuatro etapas:  </p><p>  </p><p> IMPERIO <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly> ((2700-2200 a.C.).  </p><p> Fueron construidas las <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly> de Keops, Kefrén y Micerinos. La Capital de Egipto fue <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly>. </p><p>  </p><p> IMPERIO <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly> (2052-1786 a.C.).  </p><p> La <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly> se trasladó a <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly> y Egipto fue invadido en el año 1786 por los <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly>.</p>','<img class="imaLeft" src="Egipto03_resources/media/mapaEgipto06.jpg" alt="Ima"  align="left"><p>IMPERIO <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly> (1587-1085 a.C.).  </p><p> Época de <input type="text" name="item9" id="item9" class="ardoraDropInput" readonly> y expansión <input type="text" name="item10" id="item10" class="ardoraDropInput" readonly>, con faraones muy destacados (Amenofis, <input type="text" name="item11" id="item11" class="ardoraDropInput" readonly> y Ramsés II).  </p><p>  </p><p> BAJA <input type="text" name="item12" id="item12" class="ardoraDropInput" readonly> (1085-30 a.C.).  </p><p> Egipto se dividió en pequeños <input type="text" name="item13" id="item13" class="ardoraDropInput" readonly> y fue <input type="text" name="item14" id="item14" class="ardoraDropInput" readonly> sucesivamente por etíopes, asirios, <input type="text" name="item15" id="item15" class="ardoraDropInput" readonly>, griegos y romanos).</p>','<img class="imaLeft" src="Egipto03_resources/media/egipto_sociedad.jpg" alt="Ima"  align="left"><p>DIVISION SOCIAL de egipto </p><p> El <input type="text" name="item16" id="item16" class="ardoraDropInput" readonly> era la cabeza de todo el <input type="text" name="item17" id="item17" class="ardoraDropInput" readonly> social, político, económico y <input type="text" name="item18" id="item18" class="ardoraDropInput" readonly>. Le pertenecían las <input type="text" name="item19" id="item19" class="ardoraDropInput" readonly> y la <input type="text" name="item20" id="item20" class="ardoraDropInput" readonly>. </p><p> Los <input type="text" name="item21" id="item21" class="ardoraDropInput" readonly> administraban el estado, impartían justicia y recaudaban impuestos </p><p> Los <input type="text" name="item22" id="item22" class="ardoraDropInput" readonly> ejecutaban el ritual religioso e interpretaban la voluntad de los <input type="text" name="item23" id="item23" class="ardoraDropInput" readonly> </p><p> Los Jefes del <input type="text" name="item24" id="item24" class="ardoraDropInput" readonly> defendían el imperio y conquistaban nuevos <input type="text" name="item25" id="item25" class="ardoraDropInput" readonly></p>','<img class="imaLeft" src="Egipto03_resources/media/ESTRUCTURASOCIALEGIPTO.jpg" alt="Ima"  align="left"><p>Los <input type="text" name="item26" id="item26" class="ardoraDropInput" readonly> tenian a su cargo el gobierno de los nomos. El nomarca era el jefe supremo de la <input type="text" name="item27" id="item27" class="ardoraDropInput" readonly> local en el Antiguo Egipto, responsable de la irrigación, del rendimiento agrícola, y también de recaudar <input type="text" name="item28" id="item28" class="ardoraDropInput" readonly> y fijar los límites de las propiedades después de la <input type="text" name="item29" id="item29" class="ardoraDropInput" readonly> anual del Nilo, y era responsable de la <input type="text" name="item30" id="item30" class="ardoraDropInput" readonly> de almacenes y graneros. </p><p> Los <input type="text" name="item31" id="item31" class="ardoraDropInput" readonly> registraban los impuestos y realizaban censos </p><p> Los <input type="text" name="item32" id="item32" class="ardoraDropInput" readonly> trabajaban para el faraón y ricos particulares; Los campesinos eran la mayoría de la población y vivían pobremente. </p><p> Los <input type="text" name="item33" id="item33" class="ardoraDropInput" readonly> eran prisioneros de guerra y en su mayoría pertenecían al <input type="text" name="item34" id="item34" class="ardoraDropInput" readonly></p>'];
var answers=["estados","ANTIGUO","invadido","nomarcas","pirámides","personas","administración","Ejército","territorios","Faraón","NUEVO","inundación","esclavos","militar","persas","impuestos","sacerdores","sistema","artesanos","gestión","territorial","escribas","ÉPOCA","Menfis","faraón","Tutankamon","MEDIO","capital","riqueza","Tebas","visires","hicsos","dioses","prosperidad"];
var a=["MTM","MQ","MTQ","MjY","Mg","MTk","Mjc","MjQ","MjU","MTY","OA","Mjk","MzM","MTg","MTU","Mjg","MjI","MTc","MzI","MzA","MTA","MzE","MTI","Mw","MzQ","MTE","NA","NQ","MjA","Ng","MjE","Nw","MjM","OQ"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="RWdpcHRvMDM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
