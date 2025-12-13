// CHALLENGE 1 : Les 3 Visages d’une Méthode
// Pour chaque méthode, trouve 3 utilisations différentes :
// Exemple pour .filter() :
// // SUR UN TABLEAU
// const étudiants = [
// { nom: “Alice”, note: 15, présent: true },
// { nom: “Bob”, note: 8, présent: false },
// { nom: “Charlie”, note: 18, présent: true }
// ];
// // Mon code :
// const présents = étudiants.filter(étudiant => étudiant.présent);
// // Résultat attendu : [{Alice}, {Charlie}]
// // SUR UNE STRING
// const phrase = “Je suis développeur web”;
// // Mon code :
// const motsLongs = phrase.split(’ ').filter(mot => mot.length > 3);
// // Résultat attendu : [“suis”, “développeur”]
// // SUR UN OBJET
// const config = { theme: “dark”, lang: “fr”, notifications: true };
// // Mon code :
// const configActives = Object.entries(config)
// .filter(([clé, valeur]) => valeur === true)
// .reduce((acc, [clé, valeur]) => ({ …acc, [clé]: valeur }), {});
// // Résultat attendu : {notifications: true}
// Attention ! Certaines méthodes ne fonctionnent pas directement sur les strings ou objets. Trouve des astuces !