const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/');

xhr.onload = function() {
    console.log(`Загружено: ${xhr.status} ${xhr.response}`);
    // if (xhr.status === 200) {
    //     console.log(xhr.response);
    // }
};

xhr.onerror = function() {
    console.log(`Ошибка: ${xhr.status} ${xhr.response}`);
}

xhr.progress = function(event) {
    console.log(`Прогресс: ${event.loaded} из ${event.total}`);
}

xhr.send();