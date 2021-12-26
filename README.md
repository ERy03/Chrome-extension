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
