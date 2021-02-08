document.addEventListener("DOMContentLoaded", () => {

})

const getDogs = () => {
  fetch("http://localhost:3000/pups")
  .then(res = res.json())
  .then(dogs => dogs.forEach((dog) => {
    renderDog(dog)
  }))
}

const renderDog = (dog) => {
  const dogBar = document.querySelector('#dog-bar')

  const dogSpan = document.createElement('span')
  dogSpan.innerText = dog.name

  dogSpan.addEventListener("click", () => {
    showDogDetails()
  })

  dogBar.append(dogSpan)
}

const showDogDetails = () => {
  const dogInfo = document.querySelector('#dog-info')
  dogInfo.innerHTML = ""

  const dogImg = document.createElement('img')
  dogImg.src = dog.image

  const dogName = document.createElement('h2')
  dogName.innerText = dog.name

  const dogBtn = document.createElement('button')
  if(dog.isGoodDog) {
    dogBtn.innerText = "Good Dog!"
  } else {
    dogBtn.innerText = "Bad Dog!"
  }

  dogBtn.addEventListener("click", () => {
    changeDogStatus(dogBtn, dog)
  })

  dogInfo.append(dogImg, dogName, dogBtn)
}

const changeDogStatus = () => {
  let newStatus = dog.isGoodDog
  if(dogBtn.innerText = "Good Dog!") {
    dogBtn.innerText = "Bad Dog!"
    newStatus = false
  } else {
    dogBtn.innerText = "Good Dog!"
    newStatus = true
  }

  fetch("http://localhost:3000/pups${dogId}", {
    method: "PATCH",
    headers: {
      "Content-type":"application/json"
    },
    body: JSON.stringify({
      isGoodDog: newStatus
    })
  })
}