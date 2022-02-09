const init = () => {

    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(event);
        const inputValue = event.target.searchByID.value;
        const inputValue2 = event.target.querySelector('#searchByID').value;
        const inputValue3 = event.target.children[1].value;
        const input = document.querySelector('input#searchByID').value;
        console.log(inputValue +" "+  inputValue2 + " " + inputValue3  + " " + input);

        fetch(`http://localhost:3000/movies/${input}`)
        .then(function (response){
            return response.json();})   
        .then(function (json) {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
            title.textContent = json.title;
            summary.innerText = json.summary;

        })
    });
    
}

document.addEventListener('DOMContentLoaded', init);