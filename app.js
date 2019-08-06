//Model
class TodoData {
    constructor() {
        this.list = JSON.parse(localStorage.getItem('todolist') || '[]');

    }
}

const data = new TodoData();
console.log(data.list)