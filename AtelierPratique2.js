
const produits = [
{ id: 1, nom: "Ordinateur", prix: 9, catégorie: "électronique", stock: 5 },
{ id: 2, nom: "T-shirt", prix: 25, catégorie: "vêtement", stock: 0 },
{ id: 3, nom: "Livre JS", prix: 35, catégorie: "ivre", stock: 12 }
];
console.log(produits);

//  1. Trouve tous les produits en stock (stock > 0)

function trouvePrd(produits){
    return produits.filter(Element=>Element.stock>0);
   
}
console.log(trouvePrd(produits));


// 2. Calcule le prix total de tous les produits
function prixTot(){
    let total=0;
  produits.forEach(element => {
    total+=element.prix;    
    });
    return total;
}
console.log(prixTot());

// 3. Crée un tableau des noms de produits en majuscules
function NomMaj(){
    const NomMaj=[];
    produits.forEach(element=>{
       NomMaj.push(element.nom.toUpperCase());
    })
    return NomMaj;
}
console.log(NomMaj());

// 4. Vérifie si tous les produits coûtent plus de 20€
function verifier(){
    const ver=produits.every(element=>element.prix>20);
    if(ver)
    console.log("OUi,tous les produits coûtent plus de 20€");
  else
     console.log("No, no tous les produits coûtent plus de 20€");

}
verifier()

// 5. Trouve le produit avec l’id 2
function trouve(){
    produits.forEach(element=>{
        if(element.id==2)
        console.log(element);
    })
}
trouve();

// 6. Ajoute un nouveau produit à la fin
function ajouterAlaFin(prduit){
produits.push(prduit)
}
const prduit1={ id: 4, nom: "PcPortazble", prix: 779, catégorie: "électronique", stock: 2 }
ajouterAlaFin(prduit1)
console.log(produits)

// 7. Enlève le premier produit
function removeItem(){
    produits.splice(1,1);
}

removeItem()
console.log(produits)

// 8. Trie les produits par prix (croissant) 
 function triParPrix(){
     let temp=0;
    for(let i=0;i<produits.length-1;i++){
         for(let j=i;j<produits.length;j++){
            if(produits[i].prix>produits[j].prix){
                 temp=produits[i].prix;
                 produits[i].prix=produits[j].prix;
                 produits[j].prix=temp;
             }
         }
     }
 }
triParPrix()
console.log(produits)