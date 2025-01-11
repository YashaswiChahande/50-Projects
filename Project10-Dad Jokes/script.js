//icanhazdadjoke.com can be used as an API for fetching a random joke, a specific joke, or searching for jokes in a variety of formats.

//API response format
//All API endpoints follow their respective browser URLs, but we adjust the response formatting to be more suited for an API based on the provided HTTP Accept header.

//Just for this API. All APISs are different


const jokeEl = document.getElementById('joke');

const jokeBtn = document.getElementById('jokeBtn');


jokeBtn.addEventListener('click', generateJoke)


generateJoke();


//using async await
async function generateJoke() {

    const config = {
        headers: {
            'Accept' : 'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke;
    
}

//Axios library

//using .then() promises
// function generateJoke() {

//     const config = {
//         headers: {
//             'Accept' : 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())//
//     .then((data) => {
//         jokeEl.innerHTML = data.joke;
//     })
// }