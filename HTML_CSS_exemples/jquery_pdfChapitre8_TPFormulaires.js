$(function(){
	$('input').focus(function(){
		qalf = $(this).attr('id');
		$('#info').html('Le champ ' + qalf + ' a le focus.');
	});
});


$(function(){
	$('input').focus(function(){
		qalf = '#' + $(this).attr('id');
		$(qalf).css('background-color','red');
	});
 
	$('input').blur(function(){
		qalf = '#' + $(this).attr('id');
		$(qalf).css('background-color','#FFFFFF');
	});
});

function Affiche(){
	var key = "";
	var NomValeur = "<tr><th>Nom</th><th>Valeur</th></tr>\n"; 
	var i=0;
	for (i=0; i<=localStorage.length-1; i++)
		{
		key = localStorage.key(i);
		NomValeur += "<tr><td>"+key+"</td>\n<td>"+localStorage.getItem(key)+"</td></tr>\n";
		}
		document.getElementById('NomValeur').innerHTML = NomValeur; 
}

function Enregistre() {
	var nom = document.forms.editor.name.value;
	var valeur = document.forms.editor.data.value;
	localStorage.setItem(nom, valeur);
	Affiche();
}

function Lit() {
	var nom = document.forms.editor.name.value; 
	document.forms.editor.data.value = localStorage.getItem(nom); 
	Affiche();
}

function Efface() {
	var nom = document.forms.editor.name.value; 
	document.forms.editor.data.value = localStorage.removeItem(nom);
	Affiche();
}

function EffaceTout() {
	localStorage.clear();
	Affiche();
}