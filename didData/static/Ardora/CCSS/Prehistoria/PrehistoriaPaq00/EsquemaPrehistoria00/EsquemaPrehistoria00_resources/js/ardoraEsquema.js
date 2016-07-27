//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
// Based on the work of Mark Lee http://www.capricasoftware.co.uk
// and Wes Nolte http://twitter.com/wesnolte
function initAct(){
if (tiAval){parent.iniciaActividade()}
makeChart($("#org"),depth);
$(".nodeNew").draggable({cursor:"move",distance: 40,helper:"clone",opacity:0.8,revert:"invalid",revertDuration:100,snap:"div.node.expanded",snapMode:"inner",stack:"div.node"});
}
function randomSort(){
var opt2=new Array();for (i=0;i<nodeES.length;i++){opt2[i]="~";}for (i=0;i<nodeES.length;i++){var num=Math.floor((Math.random()*nodeES.length));
while (opt2[num]!="~"){num++;if (num>nodeES.length-1){num = 0;}}opt2[num]=EsquemaWords(nodeE[i]).substring(0,nodeES[i]);}
var lineHtml="";for (i=0;i<nodeES.length;i++){lineHtml = lineHtml + "<div id='n" + i.toString() + "' class='nodeNew'>" + opt2[i] + "</div>";}
$("#nodesBar").html(lineHtml);}
function isCorrect(){
var correct=true;for (k=0;k<nodeES.length;k++) {var tablinks=document.getElementById("org").getElementsByTagName("li");
for (var i=0;i<tablinks.length;i++){var nodeHtml=tablinks[i].innerHTML;var nodeName="";if (nodeHtml.indexOf("<ul>")!=-1){
nodeName=nodeHtml.substring(0,nodeHtml.indexOf("<ul>"));nodeHtml=nodeHtml.substring(nodeHtml.indexOf("<ul>")+4,nodeHtml.length);}else{nodeName=nodeHtml;nodeHtml="";}
if (nodeName.localeCompare(EsquemaWords(nodeF[k]).substring(0,nodeFS[k]))==0){var deep=0;var nodeChild="";var z=0;
while ( z<nodeHtml.length){if (nodeHtml.substr(z,4).localeCompare("<ul>")==0){deep++; z=z+4;}if (nodeHtml.substr(z,5).localeCompare("</ul>")==0){deep--; z=z+5;}
if (deep==0){nodeChild=nodeChild+nodeHtml.substr(z,1);}z++;}
nodeChild=$.trim(nodeChild);nodeChild=nodeChild.replace(/ /g,"+");nodeChild=nodeChild.replace(/<li>/g,"");var nodesChilds=nodeChild.split("</li>");
var nodeTest=$.trim(EsquemaWords(nodeE[k]).substring(0, nodeES[k]));nodeTest=nodeTest.replace(/ /g,"+");var isSol=false;for (t=0;t<nodesChilds.length;t++){
if (nodeTest.localeCompare(nodesChilds[t])==0){isSol=true;}}if (!isSol){correct = false;}}}}
if (correct) {score=score+scoreInc;timeAct=timeAct+timeBon;showMessage("Ok");} else {attempts++;score=score-scoreDec;
if (tiAttempts) {if (attempts>attemptsMax) {showMessage("Attempts");} else {showMessage("Error");}} else {showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function EsquemaWords(input) {var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = "";var i = 0;
var btest = /[^A-Za-z0-9\+\/\=]/g; if (btest.exec(input)) { alert("Invalid characters");} input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do { enc1 = wordsStr.indexOf(input.charAt(i++)); enc2 = wordsStr.indexOf(input.charAt(i++)); enc3 = wordsStr.indexOf(input.charAt(i++)); enc4 = wordsStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);chr3 = ((enc3 & 3) << 6) | enc4;
output = output + String.fromCharCode(chr1);if (enc3 != 64) {output = output + String.fromCharCode(chr2);} if (enc4 != 64) {output = output + String.fromCharCode(chr3);}
chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = "";} while (i < input.length);return unescape(output);}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
function makeChart(idDiv,depth){var $appendTo = $("#chart");var $container = $("<div class='cChart'/>");buildNode(idDiv.find("li:first"), $container, 0,depth);
$appendTo.append($container);$("div.node").draggable({cursor:"move",distance:40,helper:"clone",opacity:0.8,revert:"invalid",revertDuration:100,snap:"div.node.expanded",snapMode:"inner",stack:"div.node"});
$("div.node").droppable({accept:".node,.nodeNew",activeClass:"drag-active",hoverClass:"drop-hover"});
$("div.node").bind("dragstop", function handleDragStop( event, ui ){$("#chart").children().remove();makeChart(idDiv,depth);});
$("div.node").bind("drop", function handleDropEvent( event, ui ) {if ($(ui.draggable).hasClass("node")){var targetID = $(this).data("tree-node");
var targetLi = idDiv.find("li").filter(function() { return $(this).data("tree-node") === targetID; } );var targetUl = targetLi.children("ul");
var sourceID = ui.draggable.data("tree-node");var sourceLi = idDiv.find("li").filter(function() { return $(this).data("tree-node") === sourceID; } );var sourceUl = sourceLi.parent("ul");
if (targetUl.length > 0){targetUl.append(sourceLi);} else {targetLi.append("<ul></ul>");targetLi.children("ul").append(sourceLi);}
if (sourceUl.children().length === 0){sourceUl.remove();}}
if ($(ui.draggable).hasClass("nodeNew")){if ($(this).html().trim().indexOf("<ul>") == -1) {var nodeDrop=$(this).text().trim();}else{var nodeDrop=$(this).html().trim().substr(0,$(this).html().trim().indexOf("<ul>")).trim();}
$("li").each(function(i,e) {if ($(this).html().trim().indexOf("<ul>") == -1) {var nodeText=$(e).text().trim();}else{var nodeText=$(e).html().trim().substr(0,$(e).html().trim().indexOf("<ul>")).trim();}
if (nodeDrop.localeCompare(nodeText)==0){var targetUl=$(e).children("ul");if (targetUl.length > 0){targetUl.append("<li>"+$(ui.draggable).text()+"</li>");} else {
$(e).append("<ul></ul>");$(e).children("ul").append("<li>"+$(ui.draggable).text()+"</li>");}
$(ui.draggable).remove();$("#chart").html("");makeChart($("#org"),depth);}});}});}
function buildNode($node, $appendTo, level,depth) {var $table=$("<table cellpadding='0' cellspacing='0' border='0'/>");var $tbody = $("<tbody/>");
var $nodeRow = $("<tr/>").addClass("node-cells");var $nodeCell = $("<td/>").addClass("node-cell").attr("colspan", 2);var $childNodes=$node.children("ul:first").children("li");var $nodeDiv;
if($childNodes.length > 1) {$nodeCell.attr("colspan", $childNodes.length * 2);}
var $nodeContent = $node.clone().children("ul,li").remove().end().html();
nodeCount++;$node.data("tree-node", nodeCount);$nodeDiv=$("<div>").addClass("node").data("tree-node",nodeCount).append($nodeContent);
if ($childNodes.length > 0) {$nodeDiv.click(function() {var $this=$(this);var $tr=$this.closest("tr");
if($tr.hasClass("contracted")){$this.css("cursor","n-resize");$tr.removeClass("contracted").addClass("expanded");$tr.nextAll("tr").css("visibility", "");
$node.removeClass("collapsed");}else{$this.css("cursor","s-resize");$tr.removeClass("expanded").addClass("contracted");$tr.nextAll("tr").css("visibility", "hidden");$node.addClass("collapsed");}});}
$nodeCell.append($nodeDiv);$nodeRow.append($nodeCell);$tbody.append($nodeRow);
if($childNodes.length > 0) {$nodeDiv.css("cursor","n-resize");if(depth == -1 || (level+1 < depth)) {var $downLineRow = $("<tr/>");
var $downLineCell = $("<td/>").attr("colspan", $childNodes.length*2);$downLineRow.append($downLineCell);$downLine = $("<div></div>").addClass("line down");
$downLineCell.append($downLine);$tbody.append($downLineRow);var $linesRow = $("<tr/>");$childNodes.each(function() {
var $left = $("<td>&nbsp;</td>").addClass("line left top");var $right = $("<td>&nbsp;</td>").addClass("line right top");$linesRow.append($left).append($right);});
$linesRow.find("td:first").removeClass("top").end().find("td:last").removeClass("top");$tbody.append($linesRow);
var $childNodesRow = $("<tr/>");$childNodes.each(function() {var $td = $("<td class='node-container'/>");$td.attr("colspan", 2);
buildNode($(this), $td, level+1,depth);$childNodesRow.append($td);});}$tbody.append($childNodesRow);}
if ($node.attr("class") != undefined) {var classList = $node.attr("class").split(/\s+/);$.each(classList, function(index,item) {
if (item=="collapsed") {console.log($node);$nodeRow.nextAll("tr").css("visibility","hidden");$nodeRow.removeClass("expanded");$nodeRow.addClass("contracted");$nodeDiv.css("cursor","s-resize");} else {$nodeDiv.addClass(item);}});}
$table.append($tbody);$appendTo.append($table);$nodeDiv.children("a").click(function(e){console.log(e);e.stopPropagation();});};
