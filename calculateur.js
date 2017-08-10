/*
 * To add this calculator on your site:
 * 1) this calculator requires jQuery. If needed, see there 
 * https://www.w3schools.com/jquery/jquery_get_started.asp how to add jQuery to your html page
 * 2) add a link to this script in the html page (usually before the </body> tag),
 * like <script type="text/javascript" src="calculateur.js"></script>
 * 3) add a tag on your html page with id='calculateur' (a section or a div tag should work). If necessary,
 * you can change this id if you also change the value of 'parentId' in this script. 
 */


function Table(id,caption,data,ckbxValue,onclickFun){
	if (data.length == ckbxValue.length){
		this.id = id;
		this.caption = caption;
		this.data = data;
		this.ckbxValue = ckbxValue;
		this.onclickFun = onclickFun;
	}
	else {
		var msg = 'Données de longeur différentes dans la table "' + id + '"';
		console.log(msg)
	}
	
	Table.prototype.createTable = function () {
		var fun = this.onclickFun;
		var tab = document.createElement('table');
		tab.id = this.id;
		var caption = tab.appendChild(document.createElement('caption'));
		caption.innerHTML = this.caption;
		var tbody = tab.appendChild(document.createElement('tbody'));
		var ln1 = tbody.appendChild(document.createElement('tr'));
		var ln2 = tbody.appendChild(document.createElement('tr'));
		var td1,td2,button;
		for (var i = 0, c = this.data.length; i < c; i++) {
			td1 = ln1.appendChild(document.createElement('td'));
			td1.innerHTML = this.data[i];
			td1.id = 'row1_' + this.id + '_' + (i+1);
			td2 = ln2.appendChild(document.createElement('td'));
			button = td2.appendChild(document.createElement('input'));
			button.type = "radio";
			button.name = 'but_' + this.id;
			button.onclick= function(){fun();};
			button.id = 'but_' + this.id + '_' + (i+1);
			button.value = this.ckbxValue[i];
		}
		return tab;
	}
}


function sumValues(tables){
	var sum = 0;
	var name,value;
	for (var i=0,c=tables.length;i<c;i++){
		name = 'but_' + (tables[i].id);
		value = $('input[name='+name+']:checked').val();
		if (typeof value == 'undefined'){
			sum = -1;
			break
		}
		else {
			sum += parseFloat(value);
		}
	}
	return sum
}

function risqueRecidive(){
	var sum = sumValues([table1,table2,table3,table4,table5,table6,table7,table8]);
	var risque2,risque5;
	if (sum != -1){
		if (sum<=12){
			risque2 = "moins de 10";
			risque5 = "moins de 10";
		} else if (sum > 12 && sum <= 14){
			risque2 = "moins de 10";
			risque5 = "10";
		} else if (sum > 14 && sum <= 16){
			risque2 = "10";
			risque5 = "12";
		} else if (sum > 16 && sum <= 18){
			risque2 = "12";
			risque5 = "16";
		} else if (sum > 18 && sum <= 20){
			risque2 = "15";
			risque5 = "18";
		} else if (sum > 20 && sum <= 22){
			risque2 = "18";
			risque5 = "22";
		} else if (sum > 22 && sum <= 24){
			risque2 = "20";
			risque5 = "28";
		} else if (sum > 24 && sum <= 26){
			risque2 = "24";
			risque5 = "32";
		} else if (sum > 26 && sum <= 28){
			risque2 = "28";
			risque5 = "36";
		} else if (sum > 28 && sum <= 30){
			risque2 = "34";
			risque5 = "42";
		} else if (sum > 30 && sum <= 32){
			risque2 = "40";
			risque5 = "50";
		} else if (sum > 32 && sum <= 34){
			risque2 = "45";
			risque5 = "58";
		} else if (sum > 34 && sum <= 36){
			risque2 = "52";
			risque5 = "62";
		} else if (sum > 36 && sum <= 38){
			risque2 = "60";
			risque5 = "70";
		} else if (sum > 38 && sum <= 40){
			risque2 = "66";
			risque5 = "78";
		} else if (sum > 40 && sum <= 42){
			risque2 = "74";
			risque5 = "84";
		} else if (sum > 42 && sum <= 44){
			risque2 = "80";
			risque5 = "90";
		} else if (sum > 44 && sum <= 46){
			risque2 = "84";
			risque5 = "plus de 90";
		} else if (sum > 46 && sum <= 48){
			risque2 = "90";
			risque5 = "plus de 90";
		} else if (sum > 48){
			risque2 = "plus de 90";
			risque5 = "plus de 90";
		}
		$('#risque_recurrence_2').html(risque2 + '&nbsp;%');
		$('#risque_recurrence_5').html(risque5 + '&nbsp;%');
		$('#risque_recurrence').css('display','block');		
	} else {
		$('#risque_recurrence').css('display','none');
	}
}

function risque10ans(){
	var sum = sumValues([table9,table10,table11,table12,table13,table14,table15,table16]);
	var risque10;
	if (sum != -1){
		if (sum <= 14){
			risque10 = "plus de 99";
		} else if (sum > 14 && sum <= 16){
			risque10 = "99";
		} else if (sum > 16 && sum <= 18){
			risque10 = "98";
		} else if (sum > 18 && sum <= 20){
			risque10 = "97";
		} else if (sum > 20 && sum <= 22){
			risque10 = "95";
		} else if (sum > 22 && sum <= 24){
			risque10 = "91";
		} else if (sum > 24 && sum <= 26){
			risque10 = "89";
		} else if (sum > 26 && sum <= 28){
			risque10 = "81";
		} else if (sum > 28 && sum <= 30){
			risque10 = "72";
		} else if (sum > 30 && sum <= 32){
			risque10 = "62";
		} else if (sum > 32 && sum <= 34){
			risque10 = "50";
		} else if (sum > 34 && sum <= 36){
			risque10 = "40";
		} else if (sum > 36){
			risque10 = "moins de 40";
		}
		$('#chance_10ans').html(risque10 + '&nbsp;%');
		$('#chance_sansrecurrence').css('display','block');
	} else {
		$('#chance_sansrecurrence').css('display','none');
	}
}

function onClick1(){
	risqueRecidive();
	(function (){
		var fromTab,toTab,id,name,index,value,toTabI;
		for (var i=0,c=corTabs[0].length;i<c;i++){
			fromTab = corTabs[0][i];
			toTab = corTabs[1][i];
			name = 'but_' + (fromTab.id);
			id = $('input[name='+name+']:checked').attr('id');
			if (typeof id != 'undefined'){
				index = id.split('_');
				index = index[index.length-1] - 1;
				value = fromTab.data[index];
				toTabI = toTab.data.indexOf(value);
				if (~toTabI){
					$('#but_' + toTab.id + '_' + (toTabI+1)).prop("checked", true);
				} else {
					if (typeof value == 'string') {
						value = parseInt(value.match(/[0-9]+/));
						toTabI = toTab.data.indexOf(value);
						if (!~toTabI){
							$('#but_' + toTab.id + '_' + (toTab.data.length)).prop("checked", true);
						}
					} else {						
						$('#but_' + toTab.id + '_' + (toTab.data.length)).prop("checked", true);
					}
					
				}
			}
		}
		risque10ans();
	})();
}

function onClick2(){
	risque10ans();
	(function (){
		var fromTab,toTab,id,name,index,value,toTabI;
		for (var i=0,c=corTabs[1].length;i<c;i++){
			fromTab = corTabs[1][i];
			toTab = corTabs[0][i];
			name = 'but_' + (fromTab.id);
			id = $('input[name='+name+']:checked').attr('id');
			if (typeof id != 'undefined'){
				index = id.split('_');
				index = index[index.length-1] - 1;
				value = fromTab.data[index];
				toTabI = toTab.data.indexOf(value);
				if (~toTabI){
					$('#but_' + toTab.id + '_' + (toTabI+1)).prop("checked", true);
				} else {
					if (typeof value == 'string') {
						value = parseInt(value.match(/[0-9]+/));
						toTabI = toTab.data.indexOf(value);
						if (!~toTabI){
							$('#but_' + toTab.id + '_' + (toTab.data.length)).prop("checked", true);
						}
					} else {						
						$('#but_' + toTab.id + '_' + (toTab.data.length)).prop("checked", true);
					}
					
				}
			}
		}
		risqueRecidive();
	})();
}

var parentId = "calculateur";
var parentId_sel = '#'+parentId;
var calcClass = "calculateur";
var table1 = new Table('table1', 
		"Ancienneté de l'épilepsie avant disparition des crises (en années)&nbsp;:", 
		[0,1,2,3,4,5,6,7,8,10,15,20,25,30,35,'&ge;40'], 
		[0,1.7,3.65,4.8,6,6.7,7.5,7.8,8.2,8.5,8.7,9.2,9.5,9.9,10.2,10.5],
		onClick1);
var table2 = new Table('table2', 
		"Durée de la période sans crise avant l'arrêt du traitement (en années)&nbsp;:", 
		['&ge;24',23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,'&le;2'], 
		[0,1,2,2.9,3.8,4.7,5.7,6.6,7.5,8.5,9.5,10.5,11.3,12.2,13.2,14.2,15.2,16,17,18,18.8,19.6,20],
		onClick1);
var table3 = new Table('table3', 
		"Âge du début des crises&nbsp;:", 
		[0,1,2,3,4,5,6,7,8,9,10,25,35,40,45,50,55,60,65,70,75,'&ge;80'], 
		[2.6,1.5,0.5,0,0,0.7,2.1,3.5,4.8,5.7,6.3,6.8,7.1,7.5,7.1,8.5,8.9,9.3,9.7,10.2,10.7,11.2],
		onClick1)
var table4 = new Table('table4',
		"Antécédent de crises fébriles&nbsp;:",
		["non","oui"],
		[0,3.5],
		onClick1);
var table5 = new Table('table5',
		"Nombre estimé de crises avant leur disparition complète&nbsp;:",
		["&le;9","&ge;10"],
		[0,3.4],
		onClick1);
var table6 = new Table('table6',
		"Crises de type rolandique&nbsp;:",
		["oui","non"],
		[0,5.9],
		onClick1);
var table7 = new Table('table7',
		"Retard de développement psychomoteur (QI < 70 ou impression clinique)&nbsp;:",
		["non","oui"],
		[0,2.1],
		onClick1);
var table8 = new Table('table8',
		"Anomalies EEG avant l'arrêt du traitement&nbsp;:",
		["absence d'EEG","non","oui"],
		[0,0,4],
		onClick1);

var table9 = new Table('table9',
		"Ancienneté de l'épilepsie avant disparition des crises (en années)&nbsp;:",
		[0,1,2,3,4,5,6,7,'&ge;8'],
		[0,1.2,2.5,3.3,4.2,4.5,5,5.1,5.2],
		onClick2);
var table10 = new Table('table10',
		"Durée de la période sans crise avant l'arrêt du traitement (en années)&nbsp;:",
		['&ge;24',23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0],
		[0,0.7,1.5,2.2,3,3.7,4.5,5.1,6,6.7,7.5,8.2,9,9.7,10.5,11.2,12,12.7,13.5,14.2,15,16,17,18.5,20],
		onClick2);
var table11 = new Table('table11',
		"Nombre de traitements antiépileptiques avant l'arrêt du traitement&nbsp;:",
		[1,2,3,4,5,6,7,8,9],
		[0,1.5,2.9,4.2,5.7,7.5,8.7,10.2,11.5],
		onClick2);
var table12 = new Table('table12',
		"Sexe&nbsp;:",
		['homme','femme'],
		[0,1.5],
		onClick2);
var table13 = new Table('table13',
		"Antécédents familiaux d'épilepsie chez les parents au premier ou deuxième degré&nbsp;:",
		['non','oui'],
		[0,2.2],
		onClick2);
var table14 = new Table('table14',
		"Nombre estimé de crises avant leur disparition complète&nbsp;:",
		["&le;9","&ge;10"],
		[0,2.2],
		onClick2);
var table15 = new Table('table15',
		"Crises partielles&nbsp;:",
		['non','oui'],
		[0,2.7],
		onClick2);
var table16 = new Table('table16',
		"Anomalies EEG avant l'arrêt du traitement&nbsp;:",
		["absence d'EEG","non","oui"],
		[0,0,2],
		onClick2);

var corTabs = [[table1,table2,table5,table8],[table9,table10,table14,table16]];

$(function(){
	$(document.createElement('article')).appendTo(parentId_sel);
	var article_sel = parentId_sel + ' article:first';
	$(article_sel).append('<h1>Risque de récurrence de crise après arrêt d’un traitement antiépileptique</h1>');
	$(table1.createTable()).appendTo(article_sel);
	$(table2.createTable()).appendTo(article_sel);
	$(table3.createTable()).appendTo(article_sel);
	$(table4.createTable()).appendTo(article_sel);
	$(table5.createTable()).appendTo(article_sel);
	$(table6.createTable()).appendTo(article_sel);
	$(table7.createTable()).appendTo(article_sel);
	$(table8.createTable()).appendTo(article_sel);
	var risk = $(document.createElement('p'));
	risk.attr('id',"risque_recurrence").css({'display':'none','color':'black'}).html('Le risque de récurrence des crises est de <em id="risque_recurrence_2"></em> après 2 ans et de <em id="risque_recurrence_5"></em> après 5 ans');
	risk.appendTo(article_sel);
	$('#risque_recurrence em').css({'background-color':'#ffcccc','font-size':'150%','font-style': 'normal'});	
})

$(function(){
	$(document.createElement('article')).appendTo(parentId_sel);
	var article_sel = parentId_sel + ' article:last';
	$(article_sel).append('<h1>Chance de ne plus avoir de crise pendant au moins un an après 10 ans sans traitement</h1>');
	$(table9.createTable()).appendTo(article_sel);
	$(table10.createTable()).appendTo(article_sel);
	$(table11.createTable()).appendTo(article_sel);
	$(table12.createTable()).appendTo(article_sel);
	$(table13.createTable()).appendTo(article_sel);
	$(table14.createTable()).appendTo(article_sel);
	$(table15.createTable()).appendTo(article_sel);
	$(table16.createTable()).appendTo(article_sel);
	var risk = $(document.createElement('p'));
	risk.attr('id',"chance_sansrecurrence").css({'display':'none','color':'black'}).html('La chance de ne pas avoir de crise pendant 1 an après 10 ans d\'arret des antiépileptiques est de <em id="chance_10ans"></em>');
	risk.appendTo(article_sel);
	$('#chance_sansrecurrence em').css({'background-color':'#ffcccc','font-size':'150%','font-style': 'normal'});
})

$(function(){$(parentId_sel + ' table').wrap($(document.createElement('div')).css('overflow-x','auto'));})

$(function(){ //mofidy css properties to ajust the appearance of the calculator - change it as you like
	$(parentId_sel + " *").addClass(calcClass);	
	$('.calculateur table').css({'text-align':'center','width':'80%','margin':'10px'});
	$('.calculateur tbody tr:first-child').css({'background-color':'#efefef'});
	$('.calculateur tbody tr:last-child').css({'background-color':'#cfe2f3'});
})

$(function(){
	$('span').each(function(){
		var txt = $(this).text().replace('@MrFDA69','<a href="https://twitter.com/MrFDA69" target="_blank">@MrFDA69</a>');
		$(this).html(txt);
	});
})