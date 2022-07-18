// colore della carrozzeria, numero porte, cilindrata, trazione, marca, modello, cambio
const auto = {
    "colore della carrozzeria": 'verde',
    "numero porte": 3,
    "cilindrata": 2000, // uguale a cilindrata: 2000 senza virgolette!
    trazione: '4x4',
    marca: 'Fiat',
    modello: 'Panda',
    'cambio': 'manuale'
};

// stampo tutte le chiavi ed i valori di auto
for (let chiave in auto) {
    // per ottenere tutte le chiavi
    console.log(chiave);
    // accedo al valore grazie alla relativa chiave, come avrei fatto con un array alla posizione indicata dentro le parentesi quadre
    console.log(auto[chiave]); //sintassi simil array
}

//voglio accedere alla proprietà modello della mia auto
console.log(auto.modello);

//voglio accedere alla proprietà cambio della mia auto
console.log(auto.cambio); // anche se la chiave è definita tra apici, posso accedere con la dot notation in quanto la chiave è formata da un unica parola

//voglio accedere alla proprietà colore della carrozzeria della mia auto
console.log(auto['colore della carrozzeria']); // sono costretto ad usare la sintassi simil array in quanto la chiave è formata da più parole


//per aggiungere una nuova coppia chiave/valore alla mia auto:
auto['velocita massima'] = 200; //visto che ci sono spazi, uso le parentesi quadre
auto.kml = 10; // posso scrivere con dot notation in quanto la chiave è senza spazi


// se voglio modificare il valore di una chiave
auto.cambio = 'automatico'; // consentita anche la sintassi con le parentesi quadre, quindi auto['cambio'] = 'automatico';



