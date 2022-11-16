let addTask = document.getElementById("push-task");
let newTaskInput = document.querySelector("#new-task input");
let tasksList = document.getElementById("tasks");

addTask.onclick = function () {
  if (newTaskInput.value.length == 0) {
    // ADD ERROR MESSAGE IN HTML PAGE INSTEAD
    // Input validation
    alert("Hey! Não esquece de colocar a tarefa!");
    return;
  }

  // Add task to list
  tasksList.innerHTML += `
    <div class="task">
        <span id="task-name">${newTaskInput.value}</span>
        <div class="btn-task">
            <button class="button-action edit-task">
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="button-action delete-task">
                <i class="fa-solid fa-trash"></i> 
            </button>
        </div>
    </div>
  `;

  // Delete task

  let delete_task = document.querySelectorAll(".delete-task");

  for (var i = 0; i < delete_task.length; i++) {
    delete_task[i].onclick = function () {
      this.parentNode.parentNode.remove();
    };
  }

  // Edit task

  let edit_task = document.querySelectorAll(".edit-task");

  for (var i = 0; i < edit_task.length; i++) {
    edit_task[i].onclick = function () {
      //   this.parentNode.parentNode.e;
    };
  }

  let tasks = document.querySelectorAll(".task");

  // Cross done task
  for (var i = 0; i < tasks.length; i++) {
    tasks[i].onclick = function () {
      this.classList.toggle("completed");
    };
  }

  newTaskInput.value = "";
};
