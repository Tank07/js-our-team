// Per la pagina 'Chi siamo' del nostro sito aziendale, dobbiamo sviluppare la sezione "Il nostro team".
// Definiamo un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Milestone 1: stampare in console l'elenco dei membri del team, scrivendo separatamente i dettagli di ciascun componente.
// Milestone 2: stampare i dati all'interno di un contenitore nella pagina html in modo dinamico, creando per ciascun membro del team un elemento che conterrà i suoi dati.
// BONUS: stilizziamo la sezione realizzando le card di ciascun membro del team, come nel mockup allegato.

let ourTeam = [

    {
        'nome' : 'Wayne Barnett',
        'ruolo' : 'dFounder & CEO',
        'foto' : '1.jpg'
    },

    {
        'nome' : 'Angela Caroll',
        'ruolo' : 'Chief Editor',
        'foto' : '2.jpg'
    },

    {
        'nome' : 'Tancredi Carluccio',
        'ruolo' : 'Disoccupato',
        'foto' : '3.jpg'
    },

    {
        'nome' : 'Angela Lopez',
        'ruolo' : 'Social Media Manager',
        'foto' : '4.jpg'
    },

    {
        'nome' : 'Scott Estrada',
        'ruolo' : 'Developer',
        'foto' : '7.jpg'
    },

    {
        'nome' : 'Pancrazio ',
        'ruolo' : 'Nullafacente',
        'foto' : '9.jpg'
    }


];

console.log(ourTeam)


for (let i = 0; i < ourTeam.length; i++) {
    
    for ( let key in ourTeam[i]) {
        console.log(`${key} => ${ourTeam[i][key]}`)
        
    }
    
}

for (let x = 0; x < ourTeam.length; x++) {
    document.getElementById("esito").innerHTML += `
    <div class="card m-3 col-6" style="width: 18rem;">
    <img src="./images/${ourTeam[x]["foto"]}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${ourTeam[x]["nome"]}</h5>
      <p class="card-text text-muted">${ourTeam[x]["ruolo"]}</p>
    </div>
  </div>`
    
}
