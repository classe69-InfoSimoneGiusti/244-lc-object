
/* 
const myArray = [1,2,3,4,5];

const myArray2 = [ 'ciao', 'mondo', 5];
 */
/* const persona = ['Simone', 'Giusti', 36, 'Pistoia'];

console.log(persona);
 */


const personaOggetto =  {
                            'nome': 'Simone',
                            'cognome': 'Giusti',
                            'eta': 36,
                            'provincia': 'Pistoia',
                            "linguaggi preferiti": ['php', 'js', 'css', 'go']
                        };


for (let chiave in personaOggetto) {
    //console.log(chiave);
    console.log(personaOggetto[chiave]);
}

                        /* 
console.log(personaOggetto); 

personaOggetto.coloreOcchi = 'verde';

personaOggetto.eta = 40;

console.log(personaOggetto);  */