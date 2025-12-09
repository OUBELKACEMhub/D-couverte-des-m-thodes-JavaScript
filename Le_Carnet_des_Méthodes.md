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

### PARAMÈTRES ACCEPTÉS :

### CE QU’ELLE RETOURNE :

### QUAND L’UTILISER :

### LES ERREURS À ÉVITER:

## 4-find()

### DÉFINITION :

### PARAMÈTRES ACCEPTÉS :

### CE QU’ELLE RETOURNE :

### QUAND L’UTILISER :

### LES ERREURS À ÉVITER:

## 5-some()

### DÉFINITION :

### PARAMÈTRES ACCEPTÉS :

### CE QU’ELLE RETOURNE :

### QUAND L’UTILISER :

### LES ERREURS À ÉVITER:

## 6-every()

### DÉFINITION :

### PARAMÈTRES ACCEPTÉS :

### CE QU’ELLE RETOURNE :

### QUAND L’UTILISER :

### LES ERREURS À ÉVITER:

### Resources

- [W3Schools JavaScript](https://www.w3schools.com/js)
- [DevDocs JavaScript](https://devdocs.io/javascript/)
