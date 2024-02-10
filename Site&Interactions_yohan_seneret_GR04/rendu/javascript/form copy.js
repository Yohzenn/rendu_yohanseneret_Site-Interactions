var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "../image/sun.png";
  } else {
    icon.src = "../image/moon.png";
  }
};

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  // Annule le comportement par défaut (envoie du formulaire)
  event.preventDefault();

  // Conteneur des erreurs
  let errorContainer = document.querySelector(".message-error");
  // Liste des erreurs
  let errorList = document.querySelector(".message-error ul");

  //On vide les erreurs et on cache le conteneur
  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  //On récupère le champ email
  let email = document.querySelector("#email");

  // Si l'email est vide
  if (email.value == "") {
    // On affiche le conteneur des erreurs et supprime le succès
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    //créer un <li></li> dans le HTML
    let err = document.createElement("li");
    err.innerText = "Le champ email ne peut pas être vide";

    // On ajoute le li dans la liste des erreurs
    errorList.appendChild(err);
  } else {
    email.classList.add("success");
  }

  // -------------------------- Nom -----------------------
  //On récupère le champ pseudo
  let pseudo = document.querySelector("#pseudo");

  // Si le pseudo est vide
  if (pseudo.value == "") {
    // On affiche le conteneur des erreurs et supprime le succès
    errorContainer.classList.add("visible");
    pseudo.classList.remove("success");

    //créer un <li></li> dans le HTML
    let err = document.createElement("li");
    err.innerText = "Le champ Nom ne peut pas être vide";

    // On ajoute le li dans la liste des erreurs
    errorList.appendChild(err);
  } else {
    pseudo.classList.add("success");
  }

  // -------------------------- Prénom -----------------------
  //On récupère le champ prénom
  let prenom = document.querySelector("#prenom");

  // Si le pseudo est vide
  if (prenom.value == "") {
    // On affiche le conteneur des erreurs et supprime le succès
    errorContainer.classList.add("visible");
    prenom.classList.remove("success");

    //créer un <li></li> dans le HTML
    let err = document.createElement("li");
    err.innerText = "Le champ Prénom ne peut pas être vide";

    // On ajoute le li dans la liste des erreurs
    errorList.appendChild(err);
  } else {
    prenom.classList.add("success");
  }

  // -------------------------- Password -----------------------
  let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );
  let password = document.querySelector("#password");

  if (password.value.length < 10 || passCheck.test(password.value) === false) {
    // On affiche le conteneur des erreurs et supprime le succès
    errorContainer.classList.add("visible");
    password.classList.remove("success");

    //créer un <li></li> dans le HTML
    let err = document.createElement("li");
    err.innerText =
      "Le mot de passe ne peut pas être inférieur à 10 caractères et doit contenir des caractères spéciaux";

    // On ajoute le li dans la liste des erreurs
    errorList.appendChild(err);
  } else {
    password.classList.add("success");
  }

  //On récupère le champ password2
  let passwordConfirm = document.querySelector("#password2");

  // Si le pseudo est vide
  if (
    passwordConfirm.value !== password.value ||
    passwordConfirm.value === ""
  ) {
    // On affiche le conteneur des erreurs et supprime le succès
    errorContainer.classList.add("visible");
    passwordConfirm.classList.remove("success");

    //créer un <li></li> dans le HTML
    let err = document.createElement("li");
    err.innerText = "Les deux mots de passes doivent être identiques";

    // On ajoute le li dans la liste des erreurs
    errorList.appendChild(err);
  } else {
    passwordConfirm.classList.add("success");
  }
  //Arrivé ici tous les checks sont passés

  let successContainer = document.querySelector(".message-success");
  successContainer.classList.remove("visible");
  if (
    email.classList.contains("success") &&
    pseudo.classList.contains("success") &&
    password.classList.contains("success") &&
    passwordConfirm.classList.contains("success") &&
    prenom.classList.contains("success")
  ) {
    successContainer.classList.add("visible");
  }
});
