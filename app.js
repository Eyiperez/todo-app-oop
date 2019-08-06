//Model
class TodoData {
    constructor() {
        this.list = JSON.parse(localStorage.getItem('todolist') || '[]');
    }

    save(value) {
        this.list.unshift(value);
        localStorage.setItem('todolist', JSON.stringify(this.list));
    }

    delete(index) {
        this.list.splice(index, 1);
        localStorage.setItem('todolist', JSON.stringify(this.list));
    }
}

//View
class View {
    constructor(name, render) {
        this.name = name;
        this.render = render;
    }
}

//App 
class App {
    constructor() {
        //Initialize Model
        this.todos = new TodoData();
    }

    initializeViews() {

    }
}

