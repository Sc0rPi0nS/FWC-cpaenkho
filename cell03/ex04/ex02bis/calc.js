$(document).ready(function() {
    const leftinput = $("#left");
    const rightinput = $("#right");
    const form = $("#form");
    const select = $("#operator");

    function calculate(left, operator, right) {
        if (operator == '+') {
            return left + right;
        }
        else if (operator == '-') {
            return left - right;
        }
        else if (operator == '*') {
            return left * right;
        }
        else if (operator == '/') {
            if (right == 0) {
                return 'It\'s over 9000!'
            } else {
                return left / right;
            }
        }
        else if (operator = '%') {
            if (right == 0) {
                return 'It\'s over 9000!'
            } else {
                return left / right;
            }
        }
        else {
            return "Error :(";
        }
    }

    form.on('submit', function(event){
        event.preventDefault();

        const leftvalue = leftinput.val().trim();
        const rightvalue = rightinput.val().trim();
        const operator = select.val();

        if (leftvalue >= 0 && rightvalue >= 0) {
            const left = parseInt(leftvalue, 10);
            const right = parseInt(rightvalue, 10);
            const result = calculate(left, operator, right);

            alert(result);
            console.log(result);
        } else {
            alert('Error :(');
            console.log('Error :(');
        }
    });

    setInterval(function() {
        alert('Please, use me...')
    }, 30000);
});