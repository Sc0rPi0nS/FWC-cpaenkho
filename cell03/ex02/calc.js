const leftinput = document.getElementById("left");
const rightinput = document.getElementById("right");
const form = document.getElementById("form");
const select = document.getElementById("operator");

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
        return left / right;
    }
    else if (operator = '%') {
        if (right == 0) {
            return "Error :(";
        } else {
            return left % right;
        }
    }
    else {
        return "Error :(";
    }
}

form.addEventListener('submit', function(event){
    event.preventDefault();

    const leftvalue = leftinput.value.trim();
    const rightvalue = rightinput.value.trim();
    const operator = select.value;

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