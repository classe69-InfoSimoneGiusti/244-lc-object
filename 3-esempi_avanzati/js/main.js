// censisco gli studenti di una classe


/*
    Un oggetto si definisce cosi:

    {
        'chiave': 'valore'
    }

*/

const studenti =    [

                        {
                            'nome': 'Mario',
                            'cognome': 'Rossi',
                            'eta': 40,
                            'linguaggi': ['c', 'java', 'python']
                        },

                        {
                            'nome': 'Elisa',
                            'cognome': 'Bianchi',
                            'eta': 30,
                            'linguaggi': ['python', 'php', 'js']
                        }

                    ];


studenti.push(  
    {    
        'nome': 'Paolo',
        'cognome': 'Verdi',
        'eta': 20    ,
        'linguaggi': ['js', 'html', 'css', 'php']
    }
);

const linguaggiConosciutiDallaClasse = [];

//voglio stampare tutti i linguaggi conosciuti dagli studenti, anche se ci sono ripetizioni

for (let i = 0; i < studenti.length; i++) {
    const linguaggiConosciutiDaStudente = studenti[i].linguaggi;
    for (let c = 0; c < linguaggiConosciutiDaStudente.length; c++ ) {
        linguaggiConosciutiDallaClasse.push(linguaggiConosciutiDaStudente[c]);
    }
}



studenti.push(linguaggiConosciutiDallaClasse);


console.log(studenti);


const classe =  {
                    'studenti': [

                        {
                            'nome': 'Mario',
                            'cognome': 'Rossi',
                            'eta': 40,
                            'linguaggi': ['c', 'java', 'python']
                        },

                        {
                            'nome': 'Elisa',
                            'cognome': 'Bianchi',
                            'eta': 30,
                            'linguaggi': ['python', 'php', 'js']
                        }

                    ],

                    'linguaggiConosciuti': ['ruby', 'pascal']

                }


console.log(classe);

alert(classe);



















