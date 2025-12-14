# Carnet des Methodes :

## 1-filter()

### DÉFINITION :

Est une fonction qui crée un nouveau tableau contenant les éléments qui vérifient la condition fournie.
Ne change pas le tableau principal, elle crée un nouveau tableau et le retourne.
Ne s’exécute pas sur les éléments vides.

#### synatxe:

array.filter(function(currentValue, index, arr), thisValue)

### PARAMÈTRES ACCEPTÉS :

- function() (Required) :
  Une fonction à exécuter pour chaque élément du tableau.

- currentValue (Required) :
  La valeur de l’élément courant.

- index (Optional) :
  L’index de l’élément courant.

- arr (Optional) :
  Le tableau de l’élément courant.

- thisValue (Optional, Default undefined) :
  Une valeur passée à la fonction en tant que this.

### CE QU’ELLE RETOURNE :

- Un tableau des éléments qui vérifient la condition.
- Un tableau vide si aucun élément ne vérifie la condition.

### QUAND L’UTILISER :

Quand on doit sélectionner les éléments qui vérifient une condition quelconque (comme un tri logique) :

- Filtrer des données
- Sélectionner une partie d’un tableau
- Exclure certains éléments
- Nettoyer un tableau avant de l’utiliser

### LES ERREURS À ÉVITER:

- Oublier de retourner une valeur (return) dans le callback
- Croire que filter() modifie le tableau original
- Utiliser filter() pour transformer les valeurs
- Oublier que filter() ignore les “empty slots”
- Écrire une condition trop complexe
- modifier les éléments à l’intérieur du filter

## 2-map()

### DÉFINITION :

- La méthode map() des instances de tableau, crée un nouveau tableau rempli des résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant,
  ou bien transformer un tableau en un autre tableau de même taille.

### Syntaxe :

let newArray = oldArray.map((element, index, array) => {
// traitement
});

### PARAMÈTRES ACCEPTÉS :

- element
- index(optional)
- array(optional)

### CE QU’ELLE RETOURNE :

- une nouveau tableau qui contient elements avec des valeurs sont celles retournées dans le callback

### QUAND L’UTILISER :

1. Transformer chaque élément d’un tableau
2. Créer un nouveau tableau basé sur l'ancien(Sans modifier le tableau original)
3. Lorsque tu veux un tableau de même longueur

### LES ERREURS À ÉVITER:

1. Croire que .map() fait un retour automatique lorsqu’on utilise des accolades.
2. Utiliser .map() pour filtrer.
3. Croire que .map() modifie le tableau original.
4. Utiliser .map() sur une variable qui n’est pas un tableau.
5. Croire que .map() retourne des types inattendus par erreur.

## 3-Foreach()

### DÉFINITION :

Exécute une fonction pour chaque élément du tableau.
Ne crée pas de nouveau tableau — elle sert juste à parcourir et exécuter une action.

### PARAMÈTRES ACCEPTÉS :

- currentValue
- index (optional)
- array (optional)

### CE QU’ELLE RETOURNE :

- Rien (undefined)
  Elle sert uniquement à effectuer des actions (log, modification externe, etc.)

### QUAND L’UTILISER :

- Parcourir un tableau
- Faire un console.log de chaque élément
- Exécuter un traitement sans créer de tableau
- Modifier l’extérieur (ex: push dans un autre tableau)

### LES ERREURS À ÉVITER:

- Croire qu’elle retourne un tableau
- Essayer de faire un return pour arrêter la boucle (ne marche pas)
- L’utiliser pour filtrer ou transformer les données
- Modifier le tableau original sans faire attention

## 4-find()

### DÉFINITION :

Retourne le premier élément qui vérifie une condition.
S’arrête dès qu’il trouve un match.

### PARAMÈTRES ACCEPTÉS :

- element
- index (optional)
- array (optional)

### CE QU’ELLE RETOURNE :

- Le premier élément qui vérifie la condition
- undefined si aucun élément ne correspond

### QUAND L’UTILISER :

- Trouver un élément précis dans un tableau
- Chercher un objet selon une propriété
- Récupérer le premier résultat valide

### LES ERREURS À ÉVITER:

- Penser qu’elle retourne plusieurs éléments

- Oublier que find() s’arrête dès le premier match

- Confondre avec filter()

## 5-some()

### DÉFINITION :

Teste si au moins un élément du tableau vérifie la condition.

### PARAMÈTRES ACCEPTÉS :

- element
- index (optional)
- array (optional)

### CE QU’ELLE RETOURNE :

- "true" si un élément satisfait la condition

- "false" sinon

### QUAND L’UTILISER :

- Vérifier si une condition est vraie au moins une fois
- Tester la présence d’un élément
- Vérifier une règle rapide (ex : âge > 18 existe ?)

### LES ERREURS À ÉVITER:

- Croire qu’elle retourne l’élément (elle retourne un booléen)
- La confondre avec every()
- Utiliser some() pour récupérer les valeurs

## 6-every()

### DÉFINITION :

Teste si tous les éléments du tableau vérifient la condition.

### PARAMÈTRES ACCEPTÉS :

- element
- index (optional)
- array (optional)

### CE QU’ELLE RETOURNE :

"true" si tous les éléments satisfont la condition
"false" si un seul ne la satisfait pas

### QUAND L’UTILISER :

1. Vérifier que toute la liste respecte une règle
2. Valider des données (ex : tous les champs remplis ?)
3. Vérifier une contrainte générale

### LES ERREURS À ÉVITER:

- La confondre avec some()
- Penser qu’elle retourne les éléments
- Oublier que si un seul élément échoue → false immédiat

# Atelier Pratique - Niveau 2 (Expert)

const étudiants = [ { nom: "Alice", note: 15, présent: true },
{ nom: "Bob", note: 8, présent: false }, { nom: "Charlie", note: 18, présent: true } ];

## filter()

### SUR UN TABLEAU:

```
const présents = étudiants.filter(étudiant => étudiant.présent);

```

// Résultat attendu : [{Alice}, {Charlie}]

### SUR UNE STRING

```
const phrase = “Je suis développeur web”;
// Mon code :
const motsLongs = phrase.split(’ ').filter(mot => mot.length > 3);
```

// Résultat attendu : [“suis”, “développeur”]

### SUR UN OBJET

```
const config = { theme: “dark”, lang: “fr”, notifications: true };
// Mon code :
const configActives = Object.entries(config)
.filter(([clé, valeur]) => valeur === true)
.reduce((acc, [clé, valeur]) => ({ …acc, [clé]: valeur }), {});

```

// Résultat attendu : {notifications: true}

## map()

### SUR UN TABLEAU:

```
const noms = étudiants.map(e => e.nom);
```

// Résultat attendu : ["Alice", "Bob", "Charlie"]

### 2.SUR UNE STRING

const phrase = "Je suis développeur web";

```
const majuscules = phrase
  .split(' ')
  .map(mot => mot.toUpperCase());
```

// Résultat attendu : ["JE", "SUIS", "DÉVELOPPEUR", "WEB"]

### 3.SUR UN OBJET

```
const configUpper = Object.entries(config)
  .map(([k, v]) => [k, String(v).toUpperCase()])
  .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
```

// Résultat attendu : { theme: "DARK", lang: "FR", notifications: "TRUE" }

## 2. find()

### SUR UN TABLEAU:

```
const bob = étudiants.find(e => e.nom === "Bob");
```

// Résultat attendu :{ nom: "Bob", note: 8, présent: false }

### SUR UNE STRING:

```
const motLong = phrase.split(' ').find(m => m.length > 5);
```

// Résultat attendu :"développeur"

### 3.SUR UN OBJET

```
const found = Object.entries(config).find(([_, v]) => v === true);
```

// Résultat attendu :["notifications", true]

## split()

### SUR UN TABLEAU:

```
phrase.split(' ');
```

// Résultat attendu :["Je", "suis", "développeur", "web"]

### SUR UNE CSV:

```
"HTML,CSS,JS".split(',');
```

// Résultat attendu :["HTML", "CSS", "JS"]

### 3.SUR characteres

```
"Hello".split('');
```

// Résultat attendu :["H", "e", "l", "l", "o"]

## some()

### SUR UN TABLEAU:

```
const auMoinsUnAbsent = étudiants.some(e => e.présent === false);
```

// Résultat attendu :true

### SUR UNE STRING:

```
const contientWeb = phrase.split(' ').some(m => m === "web");
```

// Résultat attendu :true

### 3.SUR UN OBJET

```
const hasTrue = Object.values(config).some(v => v === true);
```

// Résultat attendu :true

## every()

### SUR UN TABLEAU:

```
const tousPresents = étudiants.every(e => e.présent === true);
```

// Résultat attendu :false

### SUR UNE STRING:

```
const tousLongs = phrase.split(' ').every(m => m.length > 2);
```

// Résultat attendu :true

### 3.SUR UN OBJET

```
const allBool = Object.values(config).every(v => typeof v === "boolean");
```

// Résultat attendu :false

### Resources

- [W3Schools JavaScript](https://www.w3schools.com/js)
- [DevDocs JavaScript](https://devdocs.io/javascript/)
