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

### DOM manipulation comes with a cost

What does that mean?

``` javascript
for (let i = 0; i < myLeads.length; i++>) {
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}
```
Manipulating DOM multiple times... instead

``` javascript
let listItems = ""
for (let i = 0; i < myLeads.length; i++>) {
  listItems += "<li>" + myLeads[i] + "</li>"
}
ulEl.innerHTML = listItems
```

Manipulate the DOM only one time = less cost

### localStorage

What's our current problem with our chrome extension?
-> When we refresh the page, our links are not being saved

localStorage exists in Window object

Try
Inspect -> Application -> Local Storage

`localStorage` is a global variable that we can access

``` javascript
localStorage.clear()

// localStorage.setItem(key, value)
localStorage.setItem("myLeads", "www.blah.com")

// localStorage.getItem(key)
localStorage.getItem("myLeads")
// returns "www.blah.com"
```
key and value pairs ( ⚠️ Both need to be a string)

What's another problem?
Local Storage only supports strings...

What can we do?
use `JSON.stringify()` and `JSON.parse()`

``` javascript
let myLeads = `["www.awesomelead.com"]`

// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
myLeads.push("Hello")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads) // string
```

``` javascript
let myLeads = []
localStorage.setItem("leads", JSON.stringify(myLeads))

//...
let storedLeads = JSON.parse(localStorage.getItem("leads"))
```

### Truthy or Falsy

``` javascript
let trueOrFalse = Boolean("hello")
console.log(trueOrFalse) // true

let trueOrFalse = Boolean("")
console.log(trueOrFalse) // false
```
