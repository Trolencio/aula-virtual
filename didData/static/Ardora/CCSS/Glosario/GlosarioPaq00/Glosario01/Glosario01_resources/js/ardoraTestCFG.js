//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=25; attempts=0; attemptsMax=1;
var score=0; scoreMax=25; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
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
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Felicidades!!!"; messageTime=""; messageError="Error..."; messageErrorG="Error..."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="R2xvc2FyaW8wMQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["Abreviatura que significa \"antes de Cristo\". Nuestra era, la Cristiana, sitúa como año \"1\" el del nacimiento de Cristo, por lo que los años anteriores a este hecho se acompañan con la abreviatura","Oquedad en las paredes rocosas que sirven para protegerse de las inclemencias del tiempo.","Conjunto de órganos y personas que se encargan de aplicar las leyes y cuidar de los intereses públicos.","Término empleado para designar un bloque constructivo hecho de tierra arcillosa y secado al sol.","(del latín, anima, 'aliento' o 'alma') Creencia en seres espirituales.","(del griego antropo \"hombre\" y morfo \"forma\") Todo aquello que tiene o recuerda a la figura humana.","En la mitología egipcia, dios de los muertos. Era considerado el inventor del embalsamamiento, el guardián de las tumbas y un juez de los muertos. Los egipcios creían que en el juicio de las almas él contrapesaba el corazón de los muertos con la pluma de la verdad. En el arte se le representa con cabeza de chacal. Anubis era a veces identificado con Hermes en la mitología griega.","Grado superior que puede alcanzar algo.","El más antiguo de entre los períodos de una etapa.","Forma de gobierno en que el poder se halla en manos de las clases altas de la sociedad.","Ciencia que estudia las civilizaciones antiguas, a través de sus restos monumentales, objetos diversos e inscripciones que han perdurado a lo largo del tiempo.","Aleación de cobre y estaño, más resistente que ambos.","Recopilación de leyes o estatutos de un país.","Establecimiento fundado por un conjunto de personas que van a poblar un territorio alejado, pero que continúan perteneciendo a su patria.","Estatua que excede mucho del tamaño natural.","Que tiene forma de cuña o clavo. Se aplica a un tipo de escritura a base de marcas en forma de cuña, propia de los antiguos pueblos de Asia.","Serie de reyes pertenecientes a una familia.","(del latín, scribere, 'escribir') En la antigüedad, hombre que actuaba no sólo como copista, sino como redactore e intérprete de la Ley.","Cada uno de los reyes del antiguo Egipto.","(del latín fluvio \"río\") Relativo al río.","Relativo al enterramiento de un ser humano.","(en griego Hellas, tierra de helenos), nombre que recibió la antigua Grecia, incluía también a las islas griegas y a sus colonias.","Interés en, fervor por, e imitación de la cultura e ideales dominantes y característicos en la Grecia clásica, en particular como se desarrolló en Atenas en los siglos V y IV a.C.","Se denomina así a la Ciencia que estudia la evolución de la humanidad y los acontecimientos acaecidos en el pasado.También se denomina Historia al periodo de tiempo transcurrido entre la aparición de la escritura hasta nuestros días.","Antiguo pueblo de Asia Menor y Oriente Próximo, que habitó la tierra de Hatti en la meseta central de lo que actualmente es Anatolia (Turquía), y algunas zonas del norte de Siria."];
var answers1=["MUEuQy4","MEQuQw"];
var answers2=["MUN1ZXZh","MENob3ph"];
var answers3=["MUFkbWluaXN0cmFjafNuIFD6YmxpY2E","MFJlbGlnafNu"];
var answers4=["MUFkb2Jl","MENvbmNyZXRv"];
var answers5=["MUFuaW1pc21v","MFNlZGVudGFyaW8"];
var answers6=["MUFudHJvbW9yZmljbw","MEFudHJvcG9mYWdv"];
var answers7=["MUFudWJpcw","MFZlbnVz"];
var answers8=["MUFwb2dlbw","MERlY2FkZW5jaWE"];
var answers9=["MUFyY2FpY28","MENvbnRlbXBvcuFuZW8"];
var answers10=["MUFyaXN0b2NyYWNpYQ","MEZhcmFvbg"];
var answers11=["MUFycXVlbG9n7WE","MEFzdHJvbm9t7WE"];
var answers12=["MUJyb25jZQ","MEhpZXJybw"];
var answers13=["MUPzZGlnbw","MEhpc3Rvcmlh"];
var answers14=["MUNvbG9uaWE","MEFzZW50YW1pZW50bw"];
var answers15=["MUNvbG9zbw","MEJ1c3Rv"];
var answers16=["MUN1bmVpZm9ybWU","MEdlcm9nbO1maWNv"];
var answers17=["MURpbmFzdO1h","MEZldWRhbGlzbW8"];
var answers18=["MUVzY3JpYmE","MEZhcmFvbg"];
var answers19=["MUZhcmFvbg","MFJh"];
var answers20=["MUZsdXZpYWw","MFZlcnRpZW50ZQ"];
var answers21=["MUZ1bmVyYXJpbw","MEZhbGxlY2lkbw"];
var answers22=["MUjpbGFkZQ","MEhlbGVubw"];
var answers23=["MUhlbGVuaXNtbw","MENyaXN0aWFuaXNtbw"];
var answers24=["MUhpc3Rvcmlh","MEVkYWQgZGUgUGllZHJh"];
var answers25=["MUhpdGl0YXM","MEJhcmJhcm9z"];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7,answers8,answers9,answers10,answers11,answers12,answers13,answers14,answers15,answers16,answers17,answers18,answers19,answers20,answers21,answers22,answers23,answers24,answers25];
var err=["","","","","","","","","","","","","","","","","","","","","","","","",""];
var ima=["images.jpg","cuevas.jpg","escritura.jpg","catalhuyc.jpg","religion.jpg","paleolitico.jpg","CreenciasEgipto.jpg","civiliz01.jpg","cavver.jpg","egipto_sociedad.jpg","armas00.jpg","bronce01.jpg","SociedadEgipto.jpg","EdadMetal01.jpg","dolmen00.jpg","escritura.jpg","ciudadprohibida.jpg","escritura.jpg","piramide00.jpg","dondenacieronmapa01.jpg","momificacion.jpg","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="Glosario01_resources/media/";
colorText="#444444";colorButton="#276B9C";colorBack="#FFFFFF";colorSele="#5DB3F0";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
