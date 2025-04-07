// Загрузка WebAssembly
const loadWasm = async () => {
    const module = await Module(); // Подключение сгенерированного модуля
    const { _fibonacci } = module; // Экспорт функции fibonacci

    // Привязываем обработчик на кнопку
    document.getElementById("calc-btn").addEventListener("click", () => {
        const input = document.getElementById("fib-input").value;
        const n = parseInt(input, 10);

        if (isNaN(n) || n < 0) {
            document.getElementById("result").textContent = "Введите корректное число!";
            return;
        }

        const result = _fibonacci(n); // Вызов функции из WebAssembly
        document.getElementById("result").textContent = `Число Фибоначчи для ${n}: ${result}`;
    });
};

loadWasm();