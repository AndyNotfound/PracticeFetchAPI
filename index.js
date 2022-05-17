const insertHere = document.getElementById('#quote');

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
    const word = quoteTaken.quote;
    const wordDiv = document.getElementById('someword');
    const theQuotes = word.quote;
    const paragraph = document.createElement('p');
    paragraph.innerHTML = word;
    wordDiv.appendChild(paragraph);
};