
const studente =    {
                        'nome': 'Mario',
                        'cognome': 'Rossi',
                        diciCiao: function() {
                            return 'Ciao Ciao!';
                        },
                        getFullName: function() {
                            return this.nome + ' ' + this.cognome;
                        }
                    };


console.log(studente.getFullName());