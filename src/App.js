const Root = document.getElementById("root")

function createElement(element, contentElement, className = ""){
  const newElement = document.createElement(element)
  const newContentElement = document.createTextNode(contentElement)
  newElement.appendChild(newContentElement)

  if(className) {
    newElement.classList.add(className)
  }

  return newElement;
}

function prevValue(v) {
  return () => v
}

// create button conter

let count = 0

const heading1 =  createElement('h1', `Count : ${count}`, "head1")
const alertP = createElement('p', "", "alert")

const buttonIncrease = createElement('button', 'Increase')
const buttonDecrease = createElement('button', 'Decrease')



buttonIncrease.addEventListener("click", function() {
  count++;
  heading1.textContent = `Count : ${count}`
})

buttonDecrease.addEventListener("click", function() {
  count--;
  if(count < 0 || count === -1) {
    alertP.textContent = "Limit !!"
    Root.appendChild(alertP)

    return false
  }

  heading1.textContent = `Count : ${count}`
})


Root.appendChild(heading1)
Root.appendChild(buttonIncrease)
Root.appendChild(buttonDecrease)

