// Ecrire une fonction qui prend deux nombres en paramètres et qui retourne le résultat de leur addition.

// Donner la réponse au clic
var submitButton = document.getElementById('submit'); // Déclare la variable et lui attribue l'id submit
submitButton.onclick = function() { // Créer une fonction
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  // Additionner le "number1" avec le "number2"
  let result = (+number1) + (+number2);
    alert(result);
}
// Additionner 2 variable en ajoutant "+" devant chaque variables
