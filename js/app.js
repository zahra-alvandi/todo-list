// const inputElem = document.querySelector(".todo-input");
// const submitBtn = document.querySelector(".submit-btn");
// const form = document.querySelector(".todo-form");
// const list = document.querySelector(".todo-list")


// form.addEventListener("submit", e => {
//     e.preventDefault();
//     const value = inputElem.value.trim();
//     if (value !== "") {
//         addTodo(value);
//         inputElem.value = "";
//     }
// });

// function creatSvg(icon) {
//     switch (icon) {
//         case "done":
//             return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
//   <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
// </svg>`;
//         case "edit":
//             `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
//   <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
// </svg>`;
//         case "delete":
//             `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
//   <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
//   <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
// </svg>`;
//     }
// }

// function addTodo(text, done = false) {
//     const li = document.createElement("li");
//     const span = document.createElement("span");
//     span.className = `task-test ${done ? "done" : ""}`;
//     span.textContent = text;

//     const btns = document.createElement("div");
//     btns.className = "buttons";

//     const doneBtn = document.createElement("button");
//     doneBtn.className = "icon-btn icon-done";
//     doneBtn.innerHTML = creatSvg("done");
//     doneBtn.onclick = () => {
//         span.classList.toggle("done");
//     };

//     const editBtn = document.createElement("button");
//     editBtn.className = "icon-btn icon-edit";
//     editBtn.innerHTML = creatSvg("edit");
//     editBtn.onclick = () => {
//         const newText = prompt("edit task", span.textContent);
//         if (newText) {
//             span.textContent = newText.trim();
//         }
//     };

//     const delBtn = document.createElement("button");
//     delBtn.className = "icon-btn icon-delete";
//     delBtn.innerHTML = creatSvg("delete");
//     delBtn.onclick = () => {
//         li.remove();
//         remove();
//     };

//     btns.appendChild(doneBtn);
//     btns.appendChild(editBtn);
//     btns.appendChild(delBtn);

//     li.appendChild(span);
//     li.appendChild(btns);
//     list.appendChild(li);

// }


const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

// window.onload = () => {
//     const saved = JSON.parse(localStorage.getItem("todos")) || [];
//     saved.forEach(todo => addTodo(todo.text, todo.done));
// };

form.addEventListener("submit", e => {
    e.preventDefault();
    const value = input.value.trim();
    if (value !== "") {
        addTodo(value);
        input.value = "";
    }
});

function createSVG(icon) {
    switch (icon) {
        case "done":
            return `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`;
        case "edit":
            return `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`;
        case "delete":
            return `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M19 7l-.867 12.142A2 2 0 0 1 16.138 21H7.862a2 2 0 0 1-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3m-7 0h8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`;
    }
}

function addTodo(text, done = false) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.className = `task-text ${done ? "done" : ""}`;
    span.textContent = text;

    const btns = document.createElement("div");
    btns.className = "buttons";

    const doneBtn = document.createElement("button");
    doneBtn.className = "icon-btn icon-done";
    doneBtn.innerHTML = createSVG("done");
    doneBtn.onclick = () => {
        span.classList.toggle("done");
        saveTodos();
    };

    const editBtn = document.createElement("button");
    editBtn.className = "icon-btn icon-edit";
    editBtn.innerHTML = createSVG("edit");
    editBtn.onclick = () => {
        const newText = prompt("ویرایش تسک:", span.textContent);
        if (newText) {
            span.textContent = newText.trim();
            saveTodos();
        }
    };

    const delBtn = document.createElement("button");
    delBtn.className = "icon-btn icon-delete";
    delBtn.innerHTML = createSVG("delete");
    delBtn.onclick = () => {
        li.remove();
        saveTodos();
    };

    btns.appendChild(doneBtn);
    btns.appendChild(editBtn);
    btns.appendChild(delBtn);

    li.appendChild(span);
    li.appendChild(btns);
    list.appendChild(li);
    saveTodos();
}

function saveTodos() {
    const todos = [];
    document.querySelectorAll("#todo-list li").forEach(li => {
        const text = li.querySelector(".task-text").textContent.trim();
        const done = li.querySelector(".task-text").classList.contains("done");
        todos.push({ text, done });
    });
    // localStorage.setItem("todos", JSON.stringify(todos));
}