// Sélectionnez le menu déroulant et les tableaux
const menuDeroulant = document.getElementById("menuDeroulant");
const tableaux = document.querySelectorAll(".tableau");

// Affichez le premier tableau au chargement de la page
if (tableaux.length > 0) {
  tableaux[0].style.display = "block";
}

// Écoutez les changements de sélection dans le menu déroulant
menuDeroulant.addEventListener("change", function () {
  // Masquez tous les tableaux
  tableaux.forEach(tableau => {
    tableau.style.display = "none";
  });

  // Affichez le tableau correspondant à la sélection
  const selectedTableauId = menuDeroulant.value;
  const selectedTableau = document.getElementById(selectedTableauId);
  if (selectedTableau) {
    selectedTableau.style.display = "block";
  }
});
