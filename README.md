# Chrome-extension
save tab links with just a simple click

### Add Event listners

``` javascript
//writing JS on html
<button id="input-btn" onclick="save()">SAVE INPUT</button>

function save() {
  . . .
}

// Instead -> use add event listners
let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
  . . .
})
```

### Getting the value from a input field

use `.value`

ex.
``` javascript
const inputEl = document.getElementById("input-el")

console.log(inputEl.value)
```

### inner HTML

Adding HTML elements inside elements

``` javascript
ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
```
Another way of doing it

``` javascript
const li = document.createElement("li") // create element
li.textContent = myLeads[i] // set text content
ulEl.append(li) // append to ul
```
