
// SIMULATEUR DE PANIER D’ACHAT
const panier = [];
const catalogue = [
{ id: "A1", nom: "Pomme", prix: 1.5, promo: false },
{ id: "A2", nom: "Banane", prix: 2, promo: true },
{ id: "B1", nom: "Lait", prix: 3.5, promo: false }
];
// TON DÉFI : Crée ces fonctions
function ajouterAuPanier(idProduit, quantité) {
const prd=catalogue.find(elm=>elm.id===idProduit);
if(!prd){
    console.log("produit inrovable");
    return 
}

const prdPanier=panier.find(elm=>elm.id===idProduit);

if(prdPanier){
    prdPanier.quantité+=quantité;
}else{
    panier.push({
         ...prd,
        quantité : quantité
  });
}
}
function calculerTotal() {
 return panier.reduce((totale,produit)=>{
    return totale+prix*quantité;
 })
}
function appliquerPromotion() {
panier.forEach(produit=>{
    if(produit.promo===true){
    produit.prix=produit.prix*0.9;
    }
})
}
function produitsChers(seuil) {
  return panier.filter(
    produit => produit.prix * produit.quantité > seuil
  );
}

