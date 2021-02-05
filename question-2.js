const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const resultsContainer = document.querySelector(".results");

async function getGames() {
    try {
        const response = await fetch(url);
        const json = await response.json();
        const facts = json.results;

        resultsContainer.innerHTML = "";
        for (let i = 0; i < facts.length; i++) {
            console.log(facts[i].name);
            console.log(facts[i].rating);
            console.log(facts[i].tags.length);

            resultsContainer.innerHTML += `<div class="result"> Game: ${facts[i].name}. Rating: ${facts[i].rating} Tags: ${facts[i].tags.length}<div>`

            if (i === 7) {
                break;
            }
        }

    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = "An error has occured";
    } finally {
        console.log("This code will run if there is an error or not.")
    }
}


getGames();