const joke = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const resultat = await fetch('https://icanhazdadjoke.com', config);

  const data = await resultat.json();
  console.log(data);
  joke.innerHTML = data.joke;
}
