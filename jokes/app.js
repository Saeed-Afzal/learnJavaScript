//go to dad jokes api 
//GET https://icanhazdadjoke.com/


const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

const generateJokes = () => {
    //api se html me data araha hai to hmen header set krna hoga
    const setHeader = {
        headers : {
            Accept : "application/json"
        }
    }

//fetch and then
    fetch('https://icanhazdadjoke.com', setHeader)
    .then((res) => res.json()
    )
    .then((data) => {
        jokes.innerHTML = data.joke;
    })
    
    
    .catch((err) => {
        console.log(err);
    })
}



jokeBtn.addEventListener('click', generateJokes);

generateJokes();
