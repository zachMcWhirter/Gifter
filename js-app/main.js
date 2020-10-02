const url = "https://localhost:5001/api/post/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAll()
        .then(posts => {
            console.log(posts);
        })
});

function getAll() {
    return fetch(url).then(resp => resp.json());
}