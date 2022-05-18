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
    // For the quotes tittle
    const tittle = quoteTaken.anime;
    const tittleDiv = document.getElementById('tittle');
    const tittleEl = document.createElement('h5');
    tittleEl.innerHTML = tittle;
    tittleDiv.className="text-gray-900 text-xl leading-tight font-medium mb-4";
    tittleDiv.appendChild(tittleEl);

    // For the quotes paragraph
    const word = quoteTaken.quote;
    const wordDiv = document.getElementById('someword');
    const paragraph = document.createElement('p');
    paragraph.innerHTML = word;
    wordDiv.className="text-gray-700 text-base mb-4";
    wordDiv.appendChild(paragraph);

    // For the quotes character
    const character = quoteTaken.character;
    const charDiv = document.getElementById('character');
    const char = document.createElement('p');
    char.innerHTML = character;
    charDiv.className="text-gray-700 text-base mb-4";
    charDiv.appendChild(character);
};