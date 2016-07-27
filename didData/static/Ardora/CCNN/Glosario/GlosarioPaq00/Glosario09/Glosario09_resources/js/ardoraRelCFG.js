//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
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
var fActi="Arial, Helvetica, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Actividad Finalizada!!!"; messageTime=""; messageError="Intenta Nuevamente"; messageErrorG="Intenta Nuevamente"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="R2xvc2FyaW8wOQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Adsorción</p>","<p>Micosis</p>","<p>Mitosis</p>","<p>Tiña</p>","<p>Pie de Atleta</p>","<p>Roya</p>","<p>Escabiasis</p>","<p>Seborrea</p>"];
var iL=["<div  align='center'><img src='Glosario09_resources/media/adsorcion.jpg'></div>","<div  align='center'><img src='Glosario09_resources/media/piedeatleta.jpg'></div>","<div  align='center'><img src='Glosario09_resources/media/Morfologia.jpg'></div>","<div  align='center'><img src='Glosario09_resources/media/TineaCorporis4.jpg'></div>","<div  align='center'><img src='Glosario09_resources/media/PieAtleta.jpg'></div>","<div  align='center'><img src='Glosario09_resources/media/roya01.jpg'></div>","<div  align='center'><img src='Glosario09_resources/media/EscabiasisSarna.jpg'></div>","<div  align='center'><img src='Glosario09_resources/media/Seborrea.jpg'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>La dermatitis seborreica es una enfermedad cutánea inflamatoria bastante común que provoca la formación de «escamas» blancas o amarillentas en áreas grasas como el cuero cabelludo, la cara o el interior del oído. Puede ocurrir con o sin enrojecimiento cutáneo.</p>","<p>es una infección que se produce a nivel de los pies causada por un hongo, también es conocida como Tiña Pedis. En esta afección es muy contagiosa y ocurre la invasión de la capa de queratina de piel y las uñas por hongos del tipo dermatofitos, estos son adquiridos al caminar descalzo en sitios públicos en donde existan áreas húmedas contaminadas, también puede ocurrir al usar un zapato contaminado</p>","<p>Enfermedad infecciosa y muy contagiosa producida por hongos microscópicos.</p>","<p>La escabiosis o sarna es una enfermedad de la piel causada por el ácaro parásito Sarcoptes scabiei, llamado comúnmente arador de la sarna. Es una ectoparasitosis de distribución mundial en todas las razas. Es una afección cosmopolita, extremadamente contagiosa, que se observa en particular en las personas que viajan a menudo.</p>","<p>Atracción y retención, por parte de un sólido o un líquido, de las moléculas de un gas o de un líquido o cuerpos disueltos o dispersos en él.</p>","<p>deriva de un término griego que significa “tejer”, es la segmentación de una célula que tiene lugar después de que se haya duplicado el material genético, lo que permite que cada una de las células generadas dispongan de la totalidad de los cromosomas.</p>","<p>Puede ocurrir a cualquier edad pero es más frecuente en niños, sobre todo durante el verano y en el área rural. Se presenta como una o pocas lesiones anulares de borde activo, que se extienden centrífugamente al tiempo que se van curando por el centro. El borde es bien definido y sobreelevado, con escamas, vesiculo-pústulas y a veces incluso ampollas.</p>","<p>Hongo parásito con aspecto de polvo amarillento que se cría en los cereales y en otras plantas.Enfermedad de los cereales y plantas provocada por estos hongos parásitos. Ataca cultivos de café, frijol, trigo.</p>"]; ansRL=["NA","Mg","NQ","Ng","MQ","Nw","Mw","MA"];
var iR=["","","","","","","",""];
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
