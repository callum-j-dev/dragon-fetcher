//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  //const choice = document.querySelector('input').value
  //const url = 'https://pokeapi.co/api/v2/pokemon/'+choice
  const url = 'https://api.magicthegathering.io/v1/cards/?subtypes=dragon'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        let ind = Math.floor(Math.random() * data.cards.length);
        console.log(data.cards);

        let dragon = data.cards[ind];
        console.log(dragon);

        document.querySelector('img').src = dragon.imageUrl;
        document.querySelector('h2').innerText = dragon.name;
        document.querySelector('#rulestext').innerText = dragon.text;
        document.querySelector('#pt').innerText = `${dragon.power} / ${dragon.toughness}`;


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}