<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles.css">
    <title>Calculator</title>

</head>
<body>
    <div class="container">
        <div class="calc">
            <div class="display" id="display">
            </div>
            <div class="buttons">
                <button onclick="appendToDisplay('1')">1</button>
                <button onclick="appendToDisplay('2')">2</button>
                <button onclick="appendToDisplay('3')">3</button>
                <button onclick="appendToDisplay('+')">+</button>
                <button onclick="appendToDisplay('4')">4</button>
                <button onclick="appendToDisplay('5')">5</button>
                <button onclick="appendToDisplay('6')">6</button>
                <button onclick="appendToDisplay('-')">-</button>
                <button onclick="appendToDisplay('7')">7</button>
                <button onclick="appendToDisplay('8')">8</button>
                <button onclick="appendToDisplay('9')">9</button>
                <button onclick="appendToDisplay('*')">*</button>
                <button onclick="clearDisplay()">C</button>
                <button onclick="appendToDisplay('0')">0</button>
                <button onclick="calculate()">=</button>
                <button onclick="appendToDisplay('/')">/</button>
            </div>
        </div>
    </div>

    <script>
        function appendToDisplay(value) {
            const display = document.getElementById('display');
            display.innerText += value;
        }

        function clearDisplay() {
            const display = document.getElementById('display');
            display.innerText = '';
        }

        function calculate() {
            const display = document.getElementById('display');
            try {
                display.innerText = eval(display.innerText);
            } catch (e) {
                display.innerText = 'Error';
            }
        }
    </script>
</body>
</html>
