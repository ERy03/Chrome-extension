let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

tabBtn.addEventListener("click", function() {
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    if (myLeads.includes(tabs[0].url)) {
      alert("Link already copied!")
    } else {
      myLeads.push(tabs[0].url)
      localStorage.setItem("myLeads", JSON.stringify(myLeads))
      render(myLeads)
    }
  })
})


function render(leads) {
  let listItems = ""
  for(let i = 0; i < leads.length; i ++) {
    listItems += `
    <li>
      <button class="deleteOne-btn" onclick="remove(this)">
        <i class="far fa-trash-alt"></i>
      </button>
      <a href= '${leads[i]}' target='_blank'>
        ${leads[i]}
      </a>
    </li>
    `
  }
  ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("click", function() {
  if (window.confirm('Are you sure?')) {
    localStorage.clear()
    myLeads = []
    render(myLeads)
  }
})

inputBtn.addEventListener("click", function() {
  if (inputEl.value !== '' && !myLeads.includes(inputEl.value)) {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  } else {
    alert("Please enter a valid input")
  }
})

function remove(event) {
  const removingLead = event.parentNode.children[1].innerText
  const removingIndex = myLeads.indexOf(removingLead)
  myLeads.splice(removingIndex,1)
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
}
