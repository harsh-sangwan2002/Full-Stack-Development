function TodoForm2(id, completed, createdAt, updatedAt) {

    this.id = id;
    this.title = title;
    this.completed = completed;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
}

TodoForm2.prototype.toggleCompleted = function () {
    this.completed = !this.completed;
}

TodoForm2.prototype.updateTitle = function (title) {
    if (title && title.length > 0) {
        this.title = title;
    }
}

class TodoForm {

    constructor(id, title, completed, createdAt, updatedAt) {
        this.id = id;
        this.title = title;
        this.completed = completed;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }

    updateTitle(title) {
        if (title && title.length > 0) {
            this.title = title;
        }
    }
}

class TodoList {

    constructor() {
        this.todos = []
    }

    remove(id) {

        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    get(id) {

        const todo = this.todos.find(todo => todo.id === id);
        if (!todo) {
            throw new Error('Todo not found');
        }
        return todo;
    }

    add(todo) {
        this.todos.push(todo);
    }
}

const todo1 = new TodoForm(1, 'Learn JavaScript', false, new Date(), new Date());
const todo2 = new TodoForm(2, 'Learn React', false, new Date(), new Date());

todo1.toggleCompleted();

// console.log(todo1);
// console.log(todo1.completed)
// console.log(todo2);

const todoList = new TodoList();
todoList.add(todo1.prototype);
todoList.add(todo2);
console.log(todoList.todos);
todoList.remove(1);
console.log(todoList.todos);
todoList.remove(2);
console.log(todoList.todos);