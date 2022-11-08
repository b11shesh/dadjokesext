const getJokes = async () =>{
    try {
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await res.json();
        const chuckJokes = document.querySelector("#chuckJokes");
        chuckJokes.innerHTML = data.value;

    } catch (error) {
        
    }
}

window.addEventListener("load", ()=>{

    getJokes();
});