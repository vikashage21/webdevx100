import "./style.css";

interface formData {
  text: string;
  isCompleted: boolean;
  readonly id: string;
}

let todoData: formData[] = [];

const form = document.querySelector("form") as HTMLFormElement;
const input = document.querySelector("input") as HTMLInputElement;
const todoContainer = document.querySelector(
  ".displayContainer"
) as HTMLDivElement;
const addBtn = document.querySelector(".btn--primary") as HTMLButtonElement;

// render function

function renderTodos(): void {
  todoContainer.innerHTML = "";
  todoData.forEach((i) => {
    const div = document.createElement("div") as HTMLDivElement;
    div.className = "todobox";
    div.setAttribute("id", i.id);
    const para = document.createElement("p") as HTMLParagraphElement;
    para.textContent = i.text;

    const button = document.createElement("button") as HTMLButtonElement;
    button.classList = "btn btn--warning";
    button.innerText = "delete";
    button.addEventListener("click", () => {
      todoData = todoData.filter((e) => e.id !== i.id);
      renderTodos();
    });
    div.append(para, button);

    todoContainer.append(div);
  });
}

//  adding the event to form

if (form instanceof HTMLFormElement) {
  form.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();

    // getting input button

    if (!input.value.trim()) return;

    let todo: formData = {
      text: String(input.value),
      isCompleted: false,
      id: String(Math.floor(Math.random() * 100)),
    };

    todoData.push(todo);
    input.value = "";
    renderTodos();
  });
}
