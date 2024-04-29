// console.log("Cualquier string");

// Ejecuta tu código escribiendo en la terminal: $ node script.js

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

let dominio = [];

// for (let i = 0; i < pronoun.length; i++) {
//   for (let x = 0; x < adj.length; x++) {
//     for (let y = 0; y < noun.length; y++) {
//       dominio.push(pronoun[i] + adj[x] + noun[y] + '.com');
//     }
//   }
// }

// console.log(dominio);


// pronoun.forEach((elem)=>
//     adj.forEach((elem1)=>
//         noun.forEach((elem2)=>
//             dominio.push(elem+elem1+elem2+".com")
//         )
//     )
// );
// console.log(dominio);


let domains = pronoun.map(elem =>
    adj.map(elem1 =>
      noun.map(elem2 =>
        elem+elem1+elem2+"com")
    )
  ).flat(3);
  console.log(domains);
