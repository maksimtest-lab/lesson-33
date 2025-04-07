function fetchData(method, url, callback) {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.send();

    xhr.onload = function() {
        const response = JSON.parse(xhr.response);
        if (callback) {
            callback(response[0].id);
        } else {
            console.log(response);
        }
    };

    xhr.onerror = function() {
        console.log(`Ошибка соединение: ${xhr.status} ${xhr.response}`);
    }

    // xhr.progress = function(event) {
    //     console.log(`Прогресс: ${event.loaded} из ${event.total}`);
    // }

}

function getUser(id) {
    fetchData('GET', `https://jsonplaceholder.typicode.com/users/${id}`);
}

function getUsers() {
    fetchData('GET', 'https://jsonplaceholder.typicode.com/users/', getUser);
}

getUsers();