const screen = document.getElementById("screen");

function entervalue(input) {
    screen.value += input;
}

function equalto() {
    screen.value = eval(screen.value);
}

function clearscreen() {
    screen.value = "";
}

function back() {
    screen.value = screen.value.slice(0, -1);
}