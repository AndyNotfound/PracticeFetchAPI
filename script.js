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

function displayQuotes (quoteTaken){
    //Destructuring the object passed
    const {anime: tittle, character, quote: word} = quoteTaken;

    // Anime tittle
    const tittleEl = document.createElement('h5');
    tittleEl.innerHTML = tittle;
    const tittleDiv = document.getElementById('tittle');
    tittleDiv.className="text-black text-2xl leading-tight font-medium mb-4";
    tittleDiv.appendChild(tittleEl);

    // Quotes paragraph
    const paragraph = document.createElement('p');
    paragraph.innerHTML = word;
    const wordDiv = document.getElementById('someword');
    wordDiv.className="text-gray-700 text-black mb-4";
    wordDiv.appendChild(paragraph);

    // Character who said it
    const char = document.createElement('p');
    char.innerHTML = `~ ${character}`;
    const charDiv = document.getElementById('character');
    charDiv.className="text-gray-700 text-black";
    charDiv.appendChild(char);
};