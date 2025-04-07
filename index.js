// TODOS

fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json()).then((data) => console.log(data));

fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'DELETE'
});

const todo = {
    id: 111,
    completed: false,
    title: 'Lorem',
    userId: 1
}

fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    header: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
}).then((request) => console.log(request));

