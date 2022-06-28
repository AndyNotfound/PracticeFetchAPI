function requestApi() {
    fetch('https://animechan.vercel.app/api/random')
      .then((response) => {
          if (response.ok){
              return response.json();
          } else{
              throw new Error ('Network Response Error');
          }
      })
      .then(quotes => {
          console.log(quotes);
          displayQuotes(quotes);

      })
      .catch((e) => console.log('Fetch Error:', e));
}


function displayQuotes (quoteTaken){
    //Destructuring the object passed
    const {anime: tittle, character, quote: word} = quoteTaken;

    
    const char = document.createElement('p');
    const paragraph = document.createElement('p');
    const tittleEl = document.createElement('h5');

    // Anime tittle
    tittleEl.innerHTML = tittle;
    const tittleDiv = document.getElementById('tittle');
    tittleDiv.className="text-black text-2xl leading-tight font-medium mb-4";
    tittleDiv.appendChild(tittleEl);

    // Quotes paragraph
    paragraph.innerHTML = word;
    const wordDiv = document.getElementById('someword');
    wordDiv.className="text-gray-700 text-black mb-4";
    wordDiv.appendChild(paragraph);

    // Character who said it
    char.innerHTML = `~ ${character}`;
    const charDiv = document.getElementById('character');
    charDiv.className="text-gray-700 text-black";
    charDiv.appendChild(char);
};


const button = document.getElementById('nextButton');
const body = document.body;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

button.addEventListener('click', () => {
    const number = [1, 2, 3, 4, 5];
    let randomNumber = getRandomInt(5);
    backgroudImage = `bg-${number[randomNumber]}`;
    number.forEach(num =>{
        if (body.classList.contains(`bg-${num}`)){
            body.classList.remove(`bg-${num}`)
        }
        body.classList.add(backgroudImage)
    })
})