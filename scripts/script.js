const root = document.querySelector('.root');

const render = (json) => {
    json.forEach((el) => {
   
    const card = document.createElement('div');
    const titleElem = document.createElement('p');
    const completedElem = document.createElement('p');

    titleElem.innerText = el.title;
    completedElem.innerText = el.completed;

    card.classList.add('card')

    card.append(titleElem, completedElem);
    root.append(card);     
    });
}


fetch('https://jsonplaceholder.typicode.com/todos')
.then(resp => resp.json()) 
.then(json => render(json))