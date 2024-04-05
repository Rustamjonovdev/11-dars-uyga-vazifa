const url = "http://localhost:3000/recipies"
const template = document.querySelector("template")
const ul = document.querySelector('ul')
fetch(url).then((data) =>{
    return data.json()
}).then((recipies) =>{
    updateUi(recipies)
}).catch((error) =>{
    console.log(error);
})

function updateUi(recipies){
    console.log(recipies);

    recipies.forEach(recipe => {
        const clone = template.content.cloneNode(true)
        const image = clone.querySelector('img')
        const title = clone.querySelector('h2')
        const text = clone.querySelector('p')
        image.src = recipe.imageUrl
        title.textContent = recipe.title        
        text.textContent = recipe.cookingTime         
        ul.append(clone)
    });

}

