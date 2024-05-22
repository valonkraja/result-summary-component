import data from './data.json' with {type: 'json'}

const ul = document.querySelector("ul");
const score = document.querySelector(".your-score");

data.forEach(d => {
    ul.insertAdjacentHTML('beforeend', `
        <li class="${d.category.toLowerCase()}">
       <div class="category">
        <img
            src="./assets/images/icon-${d.category}.svg"
            alt="reaction"
            class="icon"
        />
        <p>
        ${d.category}
        </p>
        </div>
        <p class="cat-score"><span>${d.score}</span>/100</p>
    </li>
    
    `)

})

const result = data.reduce((acc, el, _, arr) => {
    return acc + el.score/arr.length
}, 0)

score.innerText = Math.round(result)