$('document').ready(function(){
//notre code ici

var $pseudo=$('#pseudo'),
	$mdp=$('#mdp'),
	$confirmation=$('#confirmation'),
	$mail=$('#mail'),
	$envoi=$('#envoi'),
	$rafraichir=$('#rafraichir'),
	$erreur=$('#erreur'),
	$champ=$('#champ');
	
});


// Vérification des caractères dans les champs

$champ.keyup(function(){
	if($(this).val().length < 5){ // si la chaine de caractères est inf à 5
		$(this).css({ // on rend le champ rouge
			borderColor:'red',
			color:'red'
			});
	}
	else{
		$(this).css({ // si tout est ok, on rend le champ vert
			borderColor:'green',
			color:'green'
			});
	}
});

//Confirmation du mot de passe

$confirmation.keyup(function(){
	if($(this).val() != $mdp.val()){ // si la confirmation est différente du mot de passe
		$(this).css({ // on rend le champ rouge
			borderColor : 'red', 
			color : 'red'
		});
	}
	else{
		$(this).css({ // si tout est bon, on le rend vert
			borderColor : 'green',
			color : 'green'
		});
	}
});

//Vérification du contenu des champs
function verifier(champ){
	if(champ.val() == ""){ // si le champ est vide
		$erreur.css('display', 'block'); // on affiche le message d'erreur
		champ.css({ // on rend le champ rouge
			borderColor : 'red',
			color : 'red'
		});
	}
}


//Bouton d'envoi et vérification de chaque champ
$envoi.click(function(e){
	e.preventDefault(); // on annule la fonction par défaut du bouton d'envoi
// puis on lance la fonction de vérification sur tous les champs :
		verifier($pseudo);
		verifier($mdp);
		verifier($confirmation);
		verifier($mail);
});


//Bouton Refresh, et annulation des styles CSS (réinitialisation des styles)
$reset.click(function(){
	$champ.css({ // on remet le style des champs comme on l'avait défini dans le style CSS
		borderColor : '#ccc', color : '#555'
		});
	$erreur.css('display', 'none'); // on prend soin de cacher le message d'erreur
});