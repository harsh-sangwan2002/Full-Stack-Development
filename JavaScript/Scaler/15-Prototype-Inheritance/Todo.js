class TodoForm {

    constructor(id, title, completed) {
        this.id = id;
        this.title = title;
        this.completed = completed;
        this.createdAt = new Date();
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }

    updateTitle(title) {
        const updatedTitle = title?.trim();

        if (!updatedTitle || updatedTitle.length == 0)
            throw new Error('Title cannot be empty');

        this.title = updatedTitle;
    }
}

const todo1 = new TodoForm(1, 'Learn JS', false);
const todo2 = new TodoForm(2, 'Learn React', true);

class TodoList {
    constructor() {
        this.todos = []
    }

    add(todo) {
        this.todos.push(new TodoForm(...todo))
    }

    remove(id) {

        const idx = this.todos.findIndex(todo => todo.id === id);

        if (idx == -1)
            throw new Error('Todo not found');

        this.todos.splice(idx, 1);
    }

    get(id) {

        const todo = this.todos.find(todo => todo.id === id);

        if (!todo)
            throw new Error('Todo not found');

        return todo;
    }
}

const todoList = new TodoList();
todoList.add([1, 'Learn JS', false]);
todoList.add([2, 'Learn React', true]);

console.log(todoList.todos);