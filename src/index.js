document.addEventListener('DOMContentLoaded', () => {
    
    fetch('http://localhost:3000/pups')
      .then( res => res.json() )
      .then( dogs => {
        dogs.forEach(renderDog);
      })
})

// const displayPup = (dog) => {
//     const dogInfo = document.getElementById('dog-info')
//     const image = document.createElement('img')
//     image.src = dog.image
//     const name = document.createElement('h2')
//     name.textContent = dog.name
//     const btn = document.createElement('button')
//     btn.textContent = dog.isGoodDog ? 'Good Dog!' : 'Bad Dog!'

//     dogInfo.append(image, name, btn)
// }

// const toggleButton = () => {
//     fetch(`http://localhost:3000/pups/${dog.id}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//         },
//         body: JSON.stringify({
//             isGoodDog: !${dog.isGoodDog}
//         })
//     })
//       .then( res => res.json() )
//       .then ()

//     if ( dog.isGoodDog ) {
//         btn.textContent = 'Bad Dog!'
//     }
//     else {
//         btn.textContent = 'Good Dog!'
//     }
// }

const renderDog = (dog) => {
    const dogBar = document.getElementById('dog-bar')
    const nameSpan = document.createElement('span')
    nameSpan.addEventListener('click', () => {
        const dogInfo = document.getElementById('dog-info')
        const image = document.createElement('img')
        image.src = dog.image
        const name = document.createElement('h2')
        name.textContent = dog.name
        const btn = document.createElement('button')
        btn.textContent = dog.isGoodDog ? 'Good Dog!' : 'Bad Dog!'
        btn.addEventListener('click', () => {
            fetch(`http://localhost:3000/pups/${dog.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    isGoodDog: !dog.isGoodDog
                })
            })
                .then( res => res.json() )
                .then( newDog => {
                    btn.textContent = newDog.isGoodDog ? 'Good Dog!' : 'Bad Dog!'
                })
        })
        // btn.textContent = dog.isGoodDog ? 'Good Dog!' : 'Bad Dog!'
    
        dogInfo.append(image, name, btn)
    })
    nameSpan.textContent = dog.name
    dogBar.append(nameSpan)
}