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
var wordsGame="R2xvc2FyaW8wNg"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Tuberculosis</p>","<p>Espirilos</p>","<p>Cocos</p>","<p>Interacción</p>","<p>Fotosíntesis</p>","<p>Líquenes</p>","<p>Bacilos</p>","<p>Lepra</p>"];
var iL=["<div  align='center'><img src='Glosario06_resources/media/Tuberculosis.jpg'></div>","<div  align='center'><img src='Glosario06_resources/media/espirilos.jpg'></div>","<div  align='center'><img src='Glosario06_resources/media/bacilos.jpg'></div>","<div  align='center'><img src='Glosario06_resources/media/competencia.jpg'></div>","<div  align='center'><img src='Glosario06_resources/media/autorofos.jpg'></div>","<div  align='center'><img src='Glosario06_resources/media/liquenes.jpg'></div>","<div  align='center'><img src='Glosario06_resources/media/patogeno.jpg'></div>","<div  align='center'><img src='Glosario06_resources/media/lepra.jpg'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>describe una acción que se desarrolla de modo recíproco entre dos o más organismos, objetos, agentes, unidades, sistemas, fuerzas o funciones. Desde el plano de la medicina, una interacción farmacológica se produce cuando se alteran los efectos de los fármacos debido a la ingesta de alimentos o del consumo de otros medicamentos; la acción de estos últimos puede ser antagónica o sinérgica</p>","<p>En este caso bajo dicha categoría se incluyen las bacterias que tienen una apariencia curva helicoidal.</p>","<p>Las bacterias que reciben dicho nombre son aquellas que poseen forma redondeada y cuentan con la posibilidad de que pueden presentarse aisladas, en pares o bien en forma de cadena arracimada.</p>","<p>Enfermedad causada por bacterias (bacilo de koch). Puede presentarse de formas diferentes de acuerdo al órgano afectado. Es habitual que afecte a los pulmones, aunque también puede atacar al sistema circulatorio, el sistema nervioso central, los huesos y la piel, por ejemplo. Entre los síntomas más frecuentes, se encuentra la tos con flema y/o sangre, la fiebre, los mareos y la pérdida de peso.</p>","<p>proceso a través del cual las plantas, las algas y algún tipo de bacteria captan la energía de la luz que emana el sol y la utilizan para transformar la materia inorgánica de su medio externo en materia orgánica que les resultará fundamental a la hora de su crecimiento y desarrollo.</p>","<p>Organismo formado por la simbiosis de un hongo y un alga, que crece en lugares húmedos y sin contaminar, sobre las rocas o los troncos de los árboles  en un liquen, el alga cede al hongo los productos obtenidos por fotosíntesis, mientras que el hongo proporciona el agua y las sales minerales que el alga necesita para vivir; los líquenes carecen de hojas, flores y raíces</p>","<p>bacterias de cuerpo alargado en forma de bastón y que pueden encontrarse en distintos ambientes.</p>","<p>es una enfermedad infecciosa crónica causada por el bacilo de Hansen, cuyo nombre científico es Mycobacterium leprae. Se caracteriza por los síntomas nerviosos y cutáneos, con la aparición de manchas, tubérculos y úlceras. A lo largo de la historia, la lepra ha sido un estigma para aquéllos que la han padecido.</p>"]; ansRL=["Mw","MQ","Mg","MA","NA","NQ","Ng","Nw"];
var iR=["","","","","","","",""];
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
