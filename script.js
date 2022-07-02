const myJoke = document.querySelector('.joke-section');
const error = document.querySelector('.error');
const btn = document.querySelector('button');

let jokeFunction = async () => {
    try{
        const URL =  "https://api.chucknorris.io/jokes/random";
        const response = await fetch(URL)
        const data = await response.json()
        myJoke.innerHTML = data.value + " 😂";
    }catch(err){
        error.innerHTML = err;
    }
}

window.addEventListener("load",()=>{
    jokeFunction();
});

btn.addEventListener('click',()=>{
    jokeFunction();
})
