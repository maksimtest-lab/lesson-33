function fetchData(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, method, url);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function() {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject(new Error(`Ошибка: ${xhr.status} ${xhr.response}`));
            }
        };
        xhr.send();

    })

}

fetchData('GET', 'https://jsonplaceholder.typicode.com/users/')
    .then((users) => {
        console.log(users);
    })
    .catch((error) => {
        console.log(error);
    });

fetchData('GET', 'https://jsonplaceholder.typicode.com/users/')
    .then((users) =>
        fetchData('GET', `https://jsonplaceholder.typicode.com/users/${users[0].id}`).then((user) =>
            console.log(user)
        )
    )
    .catch((error) => {
        console.log(error);
    });