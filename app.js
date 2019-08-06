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

const data = new TodoData();
console.log(data.list)