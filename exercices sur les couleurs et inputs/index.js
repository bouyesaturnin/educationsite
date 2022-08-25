
function dessiner(){
   const rows = document.querySelector('#rows').value;
  const cols =  document.querySelector('#cols').value;
  const ecran = document.querySelector('#ecran');
  ecran.innerHTML = makeTable(rows, cols);

  document.querySelector('#rows').style.backgroundColor = 'yellow';

}

var color ='black';

function makeTable(r, c){
    var table = "<table border='1'>";
      for(var i=0; i<r; i++){
        table += "<tr>";

        for(var j=0; j<c; j++){
            //table+= "<td>" + i + "," + j + "<td>"
            table +="<td onmouseover='colorer(this, event)'></td>";
          }
          table += "</tr>";
      }

   


      table +="</table>";
      return table;
}


function colorer(td, evt){
    td.style.backgroundColor=color;
}

const button = document.querySelector("button");
const parag = document.querySelector(".parag");


//button.addEventListener("click", () =>{
//    parag.classList.add('active');
//})


const panier = ["banane", "plantain", "oranges", "mangues"];

function isPresent(monFruit){
    for(let fruit of panier){

    if(fruit === monFruit)
        return true;
    }
    return false;
}

//console.log(isPresent('banane'))

//console.log(panier.includes('banane'));

const phrase = "je suis un artiste";

console.log(phrase.includes("artiste"));

// si on veut savoir à quelle position se trouve notre fruit
 
//console.log(phrase.indexOf("je"));

function isPresent(tableau, lettre){
    if(tableau.indexOf(lettre) != -1)
      console.log('la lettre est presente'); 
      else console.log("la lettre n'est pas presente");
    }
  
  isPresent(phrase,"je");


  //-----------------------------------

  //dans une classe de 5eme
  

  //la question est de savoir si existe un jade dans la classe

  const phrase2 = ["viviane", "sophie", "mariette", "jade", "cedric"];
  function existe(tableau, nom){
    if(tableau.indexOf(nom) != -1)
    console.log('le prenom jade existe dans la classe');
    else("le prenom n'existe pas pas");
  }

  existe(phrase2, "jade");


  //function existe(tableau, nom){
   // if(tableau.includes(mot) == true) //if(tableau.incluses(mot))
    //console.log('le prenom jade existe dans la classe');
   // else("le prenom n'existe pas pas");
  //}

// je veux trouver le premier element qui est inférieur à 50. Ceci prend la fonction colback
  const nombres = [1, 2, 47, 22, 49, 50, -56, 85, 99];

 console.log( nombres.find(nombre => nombre > 50));
 // pour trouver le premier nombre impair

 console.log( nombres.find(nombre => nombre%2 == 1)); //le premier nombre impair 
 console.log( nombres.find(nombre => nombre%2 == 0)); // le premier nombre pair



 const nombres2 = [0, 12, 45, -85, 1, -21];
 console.log( nombres2.find(nombre => nombre<0 )); //le premier nombre impair


 const salariés = [
    {
        name: "john",
        salaire: 200000
    },
    {
        name: "john",
        salaire: 100000
    },
    {
        name: "john",
        salaire: 300000
    },
    {
        name: "john",
        salaire: 250000
    },
 ]

console.log(salariés.find(salarié => salarié.salaire > 50000));
console.log(salariés.findIndex(salarié => salarié.salaire > 50000));


//-------------------------------------------------------------
//la boucle filter
// réaliser un tableau qui ne contient que les nombres négatif

const nombres3 = [1, -5, 45, -85, 78, -12];

//nombreNegatif = [];

//for(nombre of nombres3){
   // if(nombre < 0) nombreNegatif.push(nombre) 
//}

//console.log(nombreNegatif);




const negatifs = nombres3.filter(nbre => nbre<0);

console.log(negatifs);



const positifs = nombres3.filter(nombre => nombre>0);

console.log(positifs);

const sal = salariés.filter(salaires => salaires.salaire);

console.log(sal);


const nombres4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const paires = nombres4.filter(nombre => nombre%2 == 0); // les nombres paire
console.log(paires);

const impaires = nombres4.filter(nombre => nombre%2 == 1); // les nombres impaire
console.log(impaires);

const nombres5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const carré = [];

for(let nombre of nombres5){
    carré.push(nombre*nombre)
}

console.log(carré);



const multiplié = nombres5.map(nombre => nombre*nombre) //avec la boucle map

console.log(multiplié);


//index

const carrézero = nombres5.map((nombre, index) =>{
    if(index%2 ==0) return 0;
    return(nombre*nombre)
});

console.log(carrézero);



const datas = [
    {
        name: "john",
        salaire: 200000
    },
    {
        name: "john",
        salaire: 100000
    },
    {
        name: "john",
        salaire: 300000
    },
    {
        name: "john",
        salaire: 250000
    },
 ]



const listSalariés = datas.map(list => list.name) //avec la boucle map
console.log(listSalariés);


nomSalarié = [];

for( nom of datas){
    nomSalarié.push(nom.name)
}

console.log(nomSalarié);

const nombres6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sommeNobre = 0;
//la somme des nombres

for(let somme of nombres6){
  sommeNobre += somme;
}

console.log(sommeNobre);

const total = nombres6.reduce((a,b) => a+b);  //additionner tous les nombres avec la boucle reduce
 console.log(total);

 const sous = nombres6.reduce((a,b) => b-a);
 console.log(sous); 

 const moyenne = total/nombres6.length;

 console.log(moyenne);

 const produit = nombres6.reduce((a,b) => a*b);
 console.log(produit);

 console.log(Math.max(5,48,3, 78, 7)); // le nombre maximun

 const nombers7 = [5, 48, 3, 78, 7]; 

 console.log(Math.max(...nombers7));

 function plusGrandQue (a,b){
    if(a>b) return a;
    return b;
 }
 console.log(nombers7.reduce(plusGrandQue)); //nombre maximun avec reduce;

 //minimun

 function minimun (a,b){
    if(a<b) return a;
    return b;
 }

 console.log(nombers7.reduce(minimun));


 const notes = [
    {
        matière: "français",
        note : 10
    },
    {
        matière: "math",
        note : 13
    },    {
        matière: "sport",
        note : 17
    },
 ]

 const moyenneNote = notes.reduce((a,b) => a+b.note, 0)/notes.length;

 console.log(moyenneNote);