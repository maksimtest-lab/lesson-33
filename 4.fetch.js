fetch('https://jsonplaceholder.typicode.com/users/', {
    method: 'GET'
}).then((response) =>
    response.json().then((data) => {
        console.log(data);
    })
)

const newUser = {
    name: 'new user',
    id: 1
}

fetch('https://jsonplaceholder.typicode.com/users/', {
    method: 'POST',
    header: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
}).then((response) =>
    response.json().then((data) => {
        console.log(data);
    })
)

fetch('https://jsonplaceholder.typicode.com/users/9', {
    method: 'DELETE',

});