//go to dad jokes api 
//GET https://icanhazdadjoke.com/


const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");
//By using Promise fetch then
// const generateJokes = () => {
//     //api se html me data araha hai to hmen header set krna hoga
//     const setHeader = {
//         headers : {
//             Accept : "application/json"
//         }
//     }

// //fetch and then
//     fetch('https://icanhazdadjoke.com', setHeader)
//     .then((res) => res.json()
//     )
//     .then((data) => {
//         jokes.innerHTML = data.joke;
//     })
    
    
//     .catch((err) => {
//         console.log(err);
//     })
// }





//By using async await
const generateJokes = async () => {
    try{

        //api se html me data araha hai to hmen header set krna hoga
        const setHeader = {
            headers : {
                Accept : "application/json"
            }
        }
    
    
      const res = await fetch('https://icanhazdadjoke.com', setHeader)
      const data = await res.json();
      jokes.innerHTML = data.joke;
    }
    catch(err){
        console.log(`The Error is ${err}`);
    }



    }


jokeBtn.addEventListener('click', generateJokes);

generateJokes();
