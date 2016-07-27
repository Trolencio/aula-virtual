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
var wordsGame="R2xvc2FyaW8wNA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Parásito</p>","<p>Eucarionte</p>","<p>Procarionte</p>","<p>Autótrofo</p>","<p>Heterótrofo</p>","<p>Saprófito</p>","<p>Simbioisis</p>","<p>Mutualismo</p>"];
var iL=["<div  align='center'><img src='Glosario04_resources/media/parasitos.jpg'></div>","<div  align='center'><img src='Glosario04_resources/media/Eucariota.jpg'></div>","<div  align='center'><img src='Glosario04_resources/media/procarionte00.jpg'></div>","<div  align='center'><img src='Glosario04_resources/media/autorofos.jpg'></div>","<div  align='center'><img src='Glosario04_resources/media/heterotrofos.JPG'></div>","<div  align='center'><img src='Glosario04_resources/media/saprofitos.jpg'></div>","<div  align='center'><img src='Glosario04_resources/media/simbiosis.jpg'></div>","<div  align='center'><img src='Glosario04_resources/media/mutualismoremoras.jpg'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>aquellas células que no disponen de un núcleo celular definido, o sea que su material genético estará disperso en el citoplasma y reunido en una zona que se denomina como nucleoide. En tanto, el nucleoide, región de apariencia irregular, es donde se contiene y compacta al ADN, que en este caso especial de las procariotas consiste en una única molécula, de forma circular y con doble filamento.</p>","<p>El término heterótrofo proviene del griego, idioma en el cual el prefijo hetero significa diferente y trofos significa alimentación. Son todos los seres vivos que requieren de otros para alimentarse, es decir, que no son capaces de producir su alimento dentro de su organismo si no que deben consumir elementos de la naturaleza ya constituidos como alimentos, ya sintetizados por otros organismos.</p>","<p>fruto de la suma de dos palabras griegas: El adjetivo “saprós”, que es equivalente a “podrido” y el sustantivo “fitos”, que puede traducirse como “planta”. Saprofito es el adjetivo que se emplea para calificar a los organismos cuya alimentación consiste en ingerir sustancias orgánicas en estado de descomposición.</p>","<p>Estos organismos viven a costa de otras especies, de las cuales se alimentan sin llegar a la matarlas.</p>","<p>Organismos que generan su propio alimento a partir de sustancias inorgánicas tales como los elementos no vivos del planeta (luz, agua, etc.). Entre los organismos autótrofos más importantes y comunes encontramos a las plantas ya que las mismas realizan su propia síntesis alimentaria, utilizando elementos tales como el agua y la luz solar para elaborar su alimento.</p>","<p>células de un organismo vivo que poseen una membrana que las recubre y protege del ambiente exterior, pero especialmente por tener un núcleo celular definido y delimitado también dentro de la célula por una capa protectora o membrana nuclear.</p>","<p>colaboración entre dos personas o entidades, así como a la fusión de dos tendencias de carácter creativo en una nueva manifestación. Proviene del vocablo en latín symbiosis que a su vez viene del griego symbiósis y que significa condición de vida conjunta. El prefijo griego sym expresa la fusión de dos entidades, simetría o sinapsis. Y biosis viene de bio que quieredecir vida.</p>","<p>se produce cuando dos animales se convierten en \"aliados\" de conveniencia, tal y como sucede con algunos sapos y las arañas, que conviven en armonía y sin agredirse porque gracias a los sapos las arañas se libran del peligro de algunas plagas.</p>"]; ansRL=["Mw","NQ","MA","NA","MQ","Mg","Ng","Nw"];
var iR=["","","","","","","",""];
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
