const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const fliterOption = document.querySelector('.filter-todo');

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deletecheck);
fliterOption.addEventListener('click',filterTodo);


function addTodo(event){
    event.preventDefault();
    const todoDiv = document.createElement("div");
    //<div></div>
    console.log(todoDiv);
    todoDiv.classList.add("todo");
    //<div class="todo"></div>
    const newTodo = document.createElement('li');
    //<li></li>
    newTodo.innerText = todoInput.value;
    //<li>value</li>
    newTodo.classList.add('todo-item');
    //<li class="todo-item"></li>
    todoDiv.appendChild(newTodo); 
    //<div class="todo">
      //<li class="todo-item">value</li>
    //</div>
    const completedButton = document.createElement('button');
    //<button></button>
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    //<button><i class="fa-solid fa-check"></i>'</button>
    
    completedButton.classList.add("complete-button");
    //<button class="complete-button></button>

    todoDiv.appendChild(completedButton);
    //<button class="complete-button"><i class="fa-solid fa-check"></i>'</button>

    const trashButton = document.createElement('button');
    //<button></button>

    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    //<button>'<i class="fa-solid fa-trash"></i></button>
    trashButton.classList.add("trash-button");
    //<button class="trash-button"></button>
    todoDiv.appendChild(trashButton);
    //<button class="trash-button"><i class="fa-solid fa-trash"></i></button>

    todoList.appendChild(todoDiv);
    console.log(todoList);


    todoInput.value = "";
}
function deletecheck(e){
    console.log(deletecheck);
    const item = e.target;
    if (item.classList[0] === "trash-button"){
        const todo = item.parentElement;
        todo.classList.add("all");
        todo.addEventListener('Transitionend', function(){
         todo.remove();
         //drop down elements nd element to be removed
         
        });
        }
    if (item.classList[0] === "complete-button"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        //selected one to be visible b/w the show nd hiden
    }
}

function filterTodo(e){
    const todo = todoList.childNodes;
    //childnodes retun to the list
    todo.forEach(function(todo){
        switch (e.target.value) {
          case "all":
              todo.style.display = "flex";
             // <div class="todo" style="display:flex;"></div>
              break;
              
              case "completed":
          if (todo.classList.contains("completed")) {
              todo.style.display = "flex";
            }
           else {
               todo.style.display = "none";
 
            }
            break;

           case "uncompleted":
            if(!todo.classList.contains('uncompleted')){
                //collection of arry retun to be boolean 
                todo.style.display = "flex";
            } else {
                    todo.style.display = "none";
            }
            break;
        }
    });
}



 