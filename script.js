// seletores
const input = document.getElementById("add-item");
const form = document.querySelector("form");
const itemsContainer = document.querySelector(".items-container");
const deleteAlert = document.querySelector(".delete-alert");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = input.value.trim();
    if(inputValue == "") return;


    let label = document.createElement("label");
    label.classList.add("item");
    label.innerHTML = newItem(inputValue);
    itemsContainer.append(label);

    input.value = "";
});

itemsContainer.addEventListener("click", (e) => {
    if(e.target.closest('.delete-btn')) {
        const item = e.target.closest(".item");
        if(item) item.remove(); 
        alert();
    }

});

function newItem(text) {
    return `
        <input type="checkbox" class="checkbox">
        <span>${text}</span>
        <button class="delete-btn">
            <i class="bi bi-trash3"></i>
        </button>
    `;
}

function alert() {
    deleteAlert.classList.remove("hidden");
  
    setTimeout(() => {
      deleteAlert.classList.add("hidden");
    }, 2000);
  }
  