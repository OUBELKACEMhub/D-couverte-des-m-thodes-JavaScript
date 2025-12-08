# Carnet des Methodes :

## 1-filter()

### DÉFINITION :

est une fonction cree un nouvaux tableau qui contient les element qui virifier le condition qui contient .
ne change pas le tableaux principale ,il cree un neauveau tableau et le retiurner.
ne execute pas sur les les element vide .

#### synatxe:

array.filter(function(currentValue, index, arr), thisValue)

### PARAMÈTRES ACCEPTÉS :

-function(): (Required)
A function to run for each array element.

-currentValue (Required)
The value of the current element.

-index (Optional)
The index of the current element.

-arr (Optional)
The array of the current element.

-thisValue (Optional) Default undefined
A value passed to the function as its this value.

### CE QU’ELLE RETOURNE :

    tableau des elements qui virefier le condition.
    tableau  vide si aucun element  virefier le condition.

### QUAND L’UTILISER :

quant on doit selection les element qui verifier une condition quelqanque (comme une tri logique):
Filtrer des données
Sélectionner une partie d’un tableau
Exclure certains éléments
Nettoyer un tableau avant de l’utiliser

### LES ERREURS À ÉVITER:

- Oublier de retourner une valeur (return) dans le callback
- Croire que filter() modifie le tableau original
- Utiliser filter() pour transformer les valeurs
- Oublier que filter() ignore les “empty slots”
- Écrire une condition trop complexe
- modifier les éléments à l’intérieur du filter

## 2-map()

### DÉFINITION :

### PARAMÈTRES ACCEPTÉS :

### CE QU’ELLE RETOURNE :

### QUAND L’UTILISER :

### LES ERREURS À ÉVITER:

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
